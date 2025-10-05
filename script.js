(function() {
const part1 = "Welcome to ";
const part2 = "Xploit_Hunter";

const typingContainer = document.getElementById("typing");
const subtitle = document.querySelector(".subtitle");

let index = 0;
let phase = 1; // 1 = typing part1, 2 = typing part2
let strongEl = null;

function typeStep() {
    // Phase 1: type part1 into typingContainer (normal text)
    if (phase === 1) {
    if (index < part1.length) {
        typingContainer.textContent += part1.charAt(index);
        index++;
        setTimeout(typeStep, 120); // speed for part1
        return;
    }
    // finished part1 — switch to phase 2
    phase = 2;
    index = 0;
    // create strong element for the brand and append it
    strongEl = document.createElement("strong");
    typingContainer.appendChild(strongEl);
    setTimeout(typeStep, 200); // small pause before typing brand
    return;
    }

    // Phase 2: type part2 inside the strong element
    if (phase === 2) {
    if (index < part2.length) {
        strongEl.textContent += part2.charAt(index);
        index++;
        setTimeout(typeStep, 100); // speed for part2 (slightly faster)
        return;
    }
    // finished typing everything
    typingCompleted();
    }
}

function typingCompleted() {
    // remove cursor (optional): remove ::after by adding a class
    // simplest: set an attribute/class so you can alter ::after in CSS if desired
    typingContainer.classList.add("done");
    // reveal subtitle
    subtitle.classList.add("show");
    // you can also stop the cursor by overriding content via inline style:
    // typingContainer.style.setProperty('--cursor', 'none'); etc.
    // For now, we'll keep cursor — if you want it gone, uncomment next line:
    // typingContainer.style.setProperty('display', 'inline-block'); // no-op placeholder
}

// start typing after a short delay so page feels smooth
setTimeout(typeStep, 600);
})();