const titles = [
    "hi! im u",
    "hi! im ut",
    "hi! im uto",
    "hi! im ut",
    "hi! im u",
    "hi! im u",
    "hi! im u",
    "hi! im ut",
    "hi! im uto",
    "hi! im utos",
    "hi! im utosh",
    "hi! im utoshu",
    "hi! im utosh",
    "hi! im utos",
    "hi! im uto",
    "hi! im ut",
    "hi! im u",
]

let changes = 0;

function changeTitle() {
  document.title = titles[changes];
  changes = (changes + 1) % titles.length;
}

setInterval(changeTitle, 350);