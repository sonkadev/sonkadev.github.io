const titles = ["s", "so", "son", "sonk", "sonka", "sonka.", "sonka.l", "sonka.lo", "sonka.lol"];
const delay = 200; 

titles.forEach((title, index) => {
    setTimeout(() => {
        document.title = title;
    }, index * delay);
});
