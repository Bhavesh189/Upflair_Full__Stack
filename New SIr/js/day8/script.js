// function first(a) {
//     console.log("hello", a)
//     a()
// }

// function second() {

//     console.log("I")
// }

// first(second)

// const Details = () => {
//     console.log("My Name Is Bhavesh\nMy College Name is LIET")
// }

// const print = (fun) => {
//     fun();
// }


// function print(details) {
//     // console.log(details);
//     details()
// }


// const promise = new Promise((resolve, reject) => {
//     setInterval(() => {
//         print(Details);
//         resolve("First print completed");
//     }, 2000);
// });

// promise.then((result) => {
//     console.log(result);
// });

// setInterval(() => {
//     console.log("x")
// }, 200);

// console.log(Promise)

// function b() {
//     console.log("Hello X")
//     console.log("Hello")
// }


// setInterval(b, 100)

// const x = 10;

// // console.log(x)

// function y() {
//     console.log(x)
//     // var x = 20;
//     // console.log(x)
// }
// y();
// console.log(x)
// var x = 10;

// setInterval(() => {
//     xyz(y);
// }, 1000);

// function y() {
//     console.log("Hello World")
// }

// function xyz(y) {
//     y();
// }

// var val;
// function change(x) {
//     val = x
// }

// function useState(t) {
//   val = t
  

//   return [val, change]
// }


// const [name, setName] = useState("Helllo");

// console.log(name)

// setName("Infinity");
// change("X")

// console.log(name)

// var val = 23;
// function change(x) {
//     val = x
// }


// var val;

// function useState(x) {
//     val = x
//     console.log("function call",val)

     

//     return [val, (y)=> {
//         val = y;
//         console.log(val)
//         namee = val
//     }]
// }

// var [namee, setName] = useState("Bhavesh")
// console.log(val)

// console.log(namee)
// console.log(setName)
// setName("Bhavesh Sharma")
// console.log(val)

// console.log(namee)

// var val = 10;
// console.log(val)

// function x(v) {
//     val = v;
// }

// x(22)
// console.log(val)


console.log("hello")

// setTimeout(()=> {
//     console.log("By")
// }, 100)

Promise.resolve().then(() => {
    console.log("3");
});

console.log("Infinity")