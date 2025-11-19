// floating.js – Falling background emoji animation

export function initFloatingHearts() {
    const symbols = ["💙", "🌷", "💖", "🌸"];
    const amount = 25;

    for (let i = 0; i < amount; i++) {
        const el = document.createElement("div");
        el.className = "floating";
        el.textContent = symbols[Math.floor(Math.random() * symbols.length)];

        el.style.left = Math.random() * 100 + "vw";
        el.style.fontSize = Math.random() * 24 + 16 + "px";
        el.style.animationDuration = Math.random() * 5 + 6 + "s";
        el.style.animationDelay = Math.random() * 10 - 5 + "s";

        document.body.appendChild(el);
    }
}
