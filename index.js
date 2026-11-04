let myJoke = document.getElementById("myJoke");
let btnJoke = document.getElementById("btnJoke");

const getJoke = async () => {
    const res = await fetch("https://api.chucknorris.io/jokes/random");
    const data = await res.json();
    myJoke.textContent = data.value;
}

btnJoke.addEventListener("click", () => {
    getJoke();
});
