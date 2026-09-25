// "use strict"

// const obj = {
//     FullName : 'John',
//     LastName : 'Dani',
//     display : function()
//     {
//         console.log(this)
//         const fun = ()=>{
//         console.log(this);
//     }
//     fun()

//     }
// }

// obj.display();

// const obj = {
//     FullName : 'John',
//     LastName : 'Dani',
//     display : function(){
//         console.log(this);
//         function fun()
//         {
//             console.log(this);
//         }
//         fun();
//     }
// }

// obj.display();

// function display()
// {
//     console.log(this);
// }

// window.display();

// const user = {
//     name: "Bhavesh",

//     show : function() {
//         console.log(this)
        
//         const disp = () => {
//             console.log(this)            
//         }

//         disp();
//     }
    
// };

// user.show();

// console.log(this)

// console.log(window.location.href)

// var x = 10;

// const y = () => {
//     var x = 20;
//     console.log(x)
// }
// y();
// console.log(x)
// function name1() {
//     console.log("hello");
// }

// function name2() {
//     console.log("my name is virat");
//     name1();
// }

// name2();



  x = 2 


function sayHello(name) {
    console.log("hello" + name);
}

function callBack(name, func) {
    func(name);
}

callBack("Infinite", sayHello);