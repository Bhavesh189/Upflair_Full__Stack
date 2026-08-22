// const x = {
//     name: "Bhavesh",
//     fun: function () {
//         console.log(this.name);
//     }
// }

// const y = x;
// const z = { ...x }


// z.name = "Infinity"

// x.fun();
// z.fun();

// const t = x.fun;

// console.log(window);

// t() 


// const ch = function () {
//     console.log("Infinity World")
// }

// ch();

let i = 1;

const con1 = document.querySelector('.con1')
const con2 = document.querySelector('.con2')

// con1.addEventListener('mouseover', (e) => {
//     console.log(i++)
//     con1.style.backgroundColor = "red"
//     e.stopPropagation();
// })

con2.addEventListener('mousedown', (e) => {
    con2.style.backgroundColor = "red"
    e.stopPropagation(); 
});
con2.addEventListener('mouseup', (e) => {
    con2.style.backgroundColor = "blue"
    e.stopPropagation(); 
});
con1.addEventListener('mousemove', (e) => {
    con2.style.backgroundColor = "red"
    e.stopPropagation();
});
con1.addEventListener('contextmenu', (e) => {
    console.log("RIght Click")
});
con2.addEventListener('contextmenu', (e) => {
     e.stopPropagation();
    // console.log("RIght Click")
});
// con1.addEventListener('mouseout', () => {
//     console.log(i++)
//     con1.style.backgroundColor = "green"
// })

console.log("H")