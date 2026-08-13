const formm = document.querySelector(".x");
formm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = formm.name.value;
    if (name.length < 3) {
        alert("Name must be at least 3 characters long");
    } else {
        alert("Form submitted successfully");
    }
});