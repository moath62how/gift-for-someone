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
        title: `${reason.icon}`,
        html: `
      <div style="margin: 20px 0;">
        <p style="font-size: 18px; line-height: 1.6; color: #283040;">
          ${reason.text}
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
            // Next button - loop back to start
            currentIndex = (currentIndex + 1) % reasons.length;
            showReason(currentIndex);
        } else if (result.isDenied) {
            // Previous button - loop to end
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