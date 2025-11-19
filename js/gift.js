// gift.js – Handle gift button & reveal animation

export function initGiftFeature() {
    const giftBtn = document.getElementById("giftBtn");
    const icon = document.getElementById("giftIcon");
    const reveal = document.getElementById("revealArea");
    const msg = document.getElementById("messageText");

    giftBtn.addEventListener("click", () => {
        const open = reveal.classList.toggle("open");
        giftBtn.setAttribute("aria-expanded", open);

        if (open) {
            icon.style.transform = "scale(1.18) rotate(-8deg)";
            setTimeout(() => {
                icon.style.transform = "scale(1) rotate(0deg)";
                msg.setAttribute("aria-hidden", "false");
            }, 350);
        } else {
            msg.setAttribute("aria-hidden", "true");
            icon.style.transform = "scale(1)";
        }
    });
}
