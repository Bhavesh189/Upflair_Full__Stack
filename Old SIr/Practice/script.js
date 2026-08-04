const xyz = document.querySelector(".xyz");


const word = "Infinity X"
let i = 0;
let c = true;


setInterval(() => {
    xyz.innerText = word.substring(0, i);

    if (c) {
        i++;
        if (i > word.length) {
            c = false;
            i = word.length;
        }
    } else {
        i--;
        if (i < 0) {
            c = true;
            i = 0;
        }
    }
}, 200)