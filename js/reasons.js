// reasons.js - handles the "Reasons I like you" feature using SweetAlert2

let reasons = [];
let currentIndex = 0;

// Fetch reasons from JSON
async function loadReasons() {
    try {
        const response = await fetch('data/reasons.json');
        const data = await response.json();
        reasons = data.reasons;
    } catch (error) {
        console.error('Failed to load reasons:', error);
        reasons = [{ text: "You're amazing!", icon: "💙" }];
    }
}

// Show reason with SweetAlert2
function showReason(index) {
    const reason = reasons[index];

    Swal.fire({
        title: `why i like you <br>${reason.icon}`,
        html: `
      <div style="margin: 20px 0;">
        <p style="
          font-size: 18px;
          line-height: 1.6;
          color: #283040;
          margin-bottom: 25px;
        ">
          ${reason.text}
        </p>

        <!-- Bottom middle quote -->
        <p style="
          font-size: 14px;
          color: #1565c0;
          font-weight: 600;
          opacity: 0.85;
          margin-top: 35px;
          text-align: center;
          border-top: 1px solid rgba(21, 101, 192, 0.2);
          padding-top: 14px;
          max-width: 80%;
          margin-left: auto;
          margin-right: auto;
        ">
    Honestly… it's never just one thing. It's everything about you.
        </p>
      </div>
    `,
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Next →',
        denyButtonText: '← Previous',
        cancelButtonText: 'Close',
        allowOutsideClick: true,
        allowEscapeKey: true,
        customClass: {
            confirmButton: 'swal2-confirm',
            denyButton: 'swal2-deny',
            cancelButton: 'swal2-cancel'
        }
    }).then((result) => {
        if (result.isConfirmed) {
            currentIndex = (currentIndex + 1) % reasons.length;
            showReason(currentIndex);
        } else if (result.isDenied) {
            currentIndex = (currentIndex - 1 + reasons.length) % reasons.length;
            showReason(currentIndex);
        }
    });
}


// Open reasons modal
function openReasons() {
    if (reasons.length === 0) {
        Swal.fire({
            title: 'Loading...',
            text: 'Getting reasons ready for you 💙',
            icon: 'info',
            showConfirmButton: false,
            timer: 1500
        });
        return;
    }

    currentIndex = 0;
    showReason(currentIndex);
}

// Initialize
async function initReasons() {
    await loadReasons();

    document.getElementById('reasonsBtn').addEventListener('click', openReasons);
}

initReasons();