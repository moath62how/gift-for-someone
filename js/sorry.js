// sorry.js – SweetAlert "forgive me" modal

export function initSorryFeature() {
    const sorryBtn = document.getElementById("sorryBtn");
    const icon = document.getElementById("giftIcon");

    sorryBtn.addEventListener("click", () => {
        Swal.fire({
            title: "Will you forgive me?",
            html: "Please say yes... 💕",
            icon: "question",
            showDenyButton: true,
            confirmButtonText: "Yes 💖",
            denyButtonText: "Of course!💕",
            allowOutsideClick: false,
            allowEscapeKey: false,
        }).then(() => {
            icon.textContent = "💕";
            setTimeout(() => {
                icon.textContent = "💖";
            }, 1000);

            Swal.fire({
                title: "Yay! 🎉",
                html: "Haha, I knew you would! 💕",
                icon: "success",
                confirmButtonText: "Close 💖",
            });
        });
    });
}
