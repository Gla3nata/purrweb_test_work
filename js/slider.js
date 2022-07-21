let sliders = [
  {
    title: "Device Authentication",
    text: "SALT Group is a world leader in authentication and security. We have <br> sa range of services to improve user authentication. <br> Discover the possibilities with SALT.",
  },
  {
    title: "Authentication Policy",
    text: "SALT Group, ea sequi quibusdam officiis tenetur dicta deserunt, voluptates molestiae quos repellendus ? Minima consectetur quibusdam!",
  },
  {
    title: "About Authentication",
    text: "SALT Lorem ipsum officia id magni quos cupiditate odio in voluptas ullam modi with SALT.",
  },
];

let btn1 = document.getElementById("btn1");
btn1.onclick = (e) => changeHeader(btn1, 0);

let btn2 = document.getElementById("btn2");
btn2.onclick = (e) => changeHeader(btn2, 1);

let btn3 = document.getElementById("btn3");
btn3.onclick = (e) => changeHeader(btn3, 2);

let headerTitle = document.querySelector(".header__title");

let headerText = document.querySelector(".header__text");
changeHeader(btn1, 0);

function changeHeader(btn, number) {
  btn1.classList.remove("active");
  btn2.classList.remove("active");
  btn3.classList.remove("active");
  btn.classList.add("active");

  headerTitle.innerHTML = sliders[number].title;
  headerText.innerHTML = sliders[number].text;
}
