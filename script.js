const btn = document.getElementById("giftBtn");
const icon = document.getElementById("giftIcon");
const reveal = document.getElementById("revealArea");
const msg = document.getElementById("messageText");

let modalTimeout = null;

btn.addEventListener("click", () => {
  const open = reveal.classList.toggle("open");
  btn.setAttribute("aria-expanded", open ? "true" : "false");

  if (open) {
    icon.style.transform = "scale(1.18) rotate(-8deg)";
    setTimeout(() => {
      icon.style.transform = "scale(1) rotate(0deg)";
      msg.setAttribute("aria-hidden", "false");
    }, 350);

    // Show SweetAlert2 modal after 3 seconds
    if (modalTimeout) clearTimeout(modalTimeout);
    modalTimeout = setTimeout(() => {
      Swal.fire({
        title: "Will you forgive me?",
        html: "Please say yes... 💕",
        icon: "question",
        showDenyButton: true,
        confirmButtonText: "Yes 💖",
        denyButtonText: "Yes 💕",
        allowOutsideClick: false,
        allowEscapeKey: false,
        customClass: {
          confirmButton: "swal2-confirm",
          denyButton: "swal2-deny",
        },
      }).then((_result) => {
        // Both buttons lead to the same result
        icon.textContent = "💕";
        setTimeout(() => {
          icon.textContent = "💖";
        }, 1000);

        Swal.fire({
          title: "Yay! 🎉",
          html: "I knew you would! You're the best! 💕",
          icon: "success",
          confirmButtonText: "Close 💖",
          customClass: {
            confirmButton: "swal2-confirm",
          },
        });
      });
    }, 4500);
  } else {
    msg.setAttribute("aria-hidden", "true");
    icon.style.transform = "scale(1)";
    // Cancel modal if heart is closed before it shows
    if (modalTimeout) clearTimeout(modalTimeout);
  }
});

/* background falling items */
const symbols = ["💙", "🌷", "💖", "💙", "🌸", "💙", "🌷"];
const num = 25;

for (let i = 0; i < num; i++) {
  const s = document.createElement("div");
  s.className = "floating";
  s.textContent = symbols[Math.floor(Math.random() * symbols.length)];
  s.style.left = Math.random() * 100 + "vw";
  const size = Math.random() * 24 + 16;
  s.style.fontSize = size + "px";
  const duration = Math.random() * 5 + 6;
  s.style.animationDuration = duration + "s";
  s.style.animationDelay = Math.random() * 5 + "s";
  document.body.appendChild(s);
}
