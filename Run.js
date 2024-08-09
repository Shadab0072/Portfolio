let body = document.getElementById("body");
let moon = document.getElementById("moon");
let moon1 = document.getElementById("moon1");
let bar = document.getElementById("bar");
let navBox = document.getElementById("up-down-box");
let closes = document.getElementById("close");
// Qualification
let edu = document.getElementById("edu");
let work = document.getElementById("work");
let cap = document.getElementById("cap");
let bag = document.getElementById("bag");

// name head
const nameCompoEl = document.getElementById("name_compo");
// dark them

let themDark = false;

cap.addEventListener("click", () => {
  edu.style.display = "block";
  cap.style.color = "#e05785";
  bag.style.color = "#9b96aa";
  work.style.display = "none";
});

bag.addEventListener("click", () => {
  edu.style.display = "none";
  work.style.display = "block";
  cap.style.color = "#9b96aa";
  bag.style.color = "#e05785";
});

bar.addEventListener("click", () => {
  navBox.style.marginBottom = "0px";
});

closes.addEventListener("click", () => {
  navBox.style.marginBottom = "-180px";
});

moon.addEventListener("click", () => {
  if (themDark) {
    body.style.backgroundColor = "white";
    work.style.color = "block";
    cap.style.color = "#block";
    bag.style.color = "#block";
    edu.style.color = "#block";
    nameCompoEl.style.color = "black";
    themDark = false;
    console.log(themDark);
  } else {
    body.style.backgroundColor = "black";
    work.style.color = "white";
    cap.style.color = "white";
    edu.style.color = "white";
    nameCompoEl.style.color = "black";
    themDark = true;
    console.log(themDark);
  }
});

moon1.addEventListener("click", () => {
  if (themDark) {
    body.style.backgroundColor = "white";
    work.style.color = "black";
    cap.style.color = "black";
    bag.style.color = "black";
    edu.style.color = "black";
    nameCompoEl.style.color = "black";
    themDark = false;

    console.log(themDark);
  } else {
    body.style.backgroundColor = "black";
    work.style.color = "white";
    cap.style.color = "white";
    edu.style.color = "white";
    nameCompoEl.style.color = "black";
    themDark = true;
    console.log(themDark);
  }
});
