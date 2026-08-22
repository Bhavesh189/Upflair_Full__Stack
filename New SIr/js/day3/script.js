const button = document.getElementById('btn');
const button1 = document.getElementById('btn1');
const h = document.getElementById('h');
let x = true;

button.addEventListener('dblclick', () => {
    if(x) h.style.display = "block"
    else h.style.display = "none"

    x = !x;
})

button.addEventListener('mouseenter', () => {
    button.style.backgroundColor = "Yellow";
    button.style.color = "Blue";
})

button.addEventListener('mouseleave', () => {
    button.style.backgroundColor = "Green";
    button.style.color = "White";
})


// let student = {
//     name: "Bhavesh Sharma",
//     age: 20,
//     branch: "Computer Science Engineering",
//     fun: function () {
//         console.log(`Student Name is : ${this.name}`)
//     }
// }

// // asscessing

// console.log("Student Name : ", student.name);
// console.log("Student Age : ", student["age"]);

// // // Adding Key values at Runtime

// // student.fees = 20;
// student["fees"] = 20;
// console.log(`Student Fees : ${student.fees}\n ${typeof (student.fees)}`)

// // // Removing key Value at runtime

// delete student.fees;

// // console.log(`Student Fees : ${student.fees}\n ${typeof(student.fees)}`)

// // Nested Object

// const a = {
//     x: "y"
// }

// student["obj"] = a;

// // Methods in Objects

// a["fun"] = function () {
//     console.log("hello World")
//     return "B"
// }

// let x = a;

// console.log("Is a object is eqal to x obj", x === a)

// let y = {
//     ...a
// }

// console.log("Is x is equeal to y of a", x === y.a)

// let obj1 = {
//     10: "x"
// }

// console.log(obj1[10])
// console.log(obj1["10"])

// for (let key in student) {
//     // console.log(key + " : " + student.key)
//     // console.log(key + " : " + student["key"])
//     console.log(key + " : " + student[key])
// }

// let k = "name";
// console.log(student[k])
// // console.log(student.k)

// // console.log(Object.keys(student));
// // console.log(Object.values(student));
// // console.log(Object.entries(student));

// console.log(window)