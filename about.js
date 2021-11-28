let overlay = document.querySelector(".menu_overlay");
let open = document.querySelector(".fa-bars");
let close = document.querySelector(".fa-times");

open.addEventListener("click", () => {
  overlay.style.transform = "translateY(0)";
});

close.addEventListener("click", () => {
  overlay.style.transform = "translateY(-110%)";
});

// subscription

// let subscribe = document.querySelector(".sub");
// let subscribeButton = document.querySelector(".subscribe__button");
// let subscribedPerson = document.querySelector(".subscribed");

// subscribeButton.addEventListener("click", () => {
//     subscribedPerson.innerHTML("Subscribed!")
//     subscribe.classList.add("hide")
// })
