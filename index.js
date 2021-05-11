document.getElementById("share-btn").addEventListener("click", (e) => {
  var popUp = document.getElementsByClassName("social-links-pop-up")[0];
  var popUpVisible = popUp.style.display === "flex";

  var media = window.matchMedia("(max-width: 960px)");
  if (media.matches) {
    document.querySelector(".info").classList.toggle("pop-up-theme");
  }

  if (popUpVisible) {
    popUp.style.display = "none";
    if (media.matches) {
      document.getElementById("avatar-picture").style.display = "block";
      document.getElementById("user").style.display = "block";
    }
  } else {
    popUp.style.display = "flex";
    if (media.matches) {
      document.getElementById("avatar-picture").style.display = "none";
      document.getElementById("user").style.display = "none";
    }
  }
});

window.addEventListener("resize", () => {
  document.querySelector(".info").classList.remove("pop-up-theme");
  document.getElementById("avatar-picture").style.display = "block";
  document.getElementById("user").style.display = "block";
  document.getElementsByClassName("social-links-pop-up")[0].style.display =
    "none";
});
