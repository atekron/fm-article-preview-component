var info = document.querySelector(".info");
var avatarPicture = document.getElementById("avatar-picture");
var userInfo = document.getElementById("user");
var socialLinks = document.getElementsByClassName("social-links-pop-up")[0];

document.getElementById("share-btn").addEventListener("click", (e) => {
  var popUpVisible = socialLinks.style.display === "flex";

  var media = window.matchMedia("(max-width: 960px)");
  if (media.matches) {
    info.classList.toggle("pop-up-theme");
  }

  if (popUpVisible) {
    socialLinks.style.display = "none";
    if (media.matches) {
      avatarPicture.style.display = "block";
      userInfo.style.display = "block";
    }
  } else {
    socialLinks.style.display = "flex";
    if (media.matches) {
      avatarPicture.style.display = "none";
      userInfo.style.display = "none";
    }
  }
});

window.addEventListener("resize", () => {
  info.classList.remove("pop-up-theme");
  avatarPicture.style.display = "block";
  userInfo.style.display = "block";
  socialLinks.style.display = "none";
});
