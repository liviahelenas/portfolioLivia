function modosBotao() {

    if(document.body.classList.contains("light-mode")) {

        document.body.classList.remove("light-mode");
        document.body.classList.add("dark-mode");

        localStorage.setItem("tema", "dark");

    } else {

        document.body.classList.remove("dark-mode");
        document.body.classList.add("light-mode");

        localStorage.setItem("tema", "light");
    }

}

window.onload = () => {

    const temaSalvo = localStorage.getItem("tema");

    if(temaSalvo === "dark") {

        document.body.classList.remove("light-mode");
        document.body.classList.add("dark-mode");

    } else {

        document.body.classList.remove("dark-mode");
        document.body.classList.add("light-mode");

    }

}

let i = 0;

const track = document.querySelector(".track");
const slides = document.querySelectorAll(".track img");

setInterval(() => {
  i++;

  if (i >= slides.length) {
    i = 0;
  }

  track.style.transform = `translateX(-${i * 100}%)`;
}, 3000);