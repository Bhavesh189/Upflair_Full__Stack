const box = document.getElementById('name')
const form = document.getElementById('f')
const text = document.getElementById('h1');

box.addEventListener('input', (e) => {
    console.log("Current Input : " + e.target.value);
})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("Submitted")
})

box.addEventListener('focus', () => {
    box.style.border = "2px solid red"
})

box.addEventListener('blur', () => {
    box.style.border = "2px solid green"
})

box.addEventListener('keyup', (e) => {
    console.log(`key Pressed : ${e.key}`)
})

box.addEventListener('keydown', (e) => {
    console.log(`key Downed : ${e.key}`)
})

h1.addEventListener('click', () => {
    console.log("Text Clicked")
})

h1.addEventListener('copy', (e) => {
    console.log("Text Copied")

    e.preventDefault();

    console.log(e)
    e.clipboardData.setData('text/plain', "newText");
})