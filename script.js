const offScreenMenu = document.getElementById("menu-mobile");
//  Tracks the Icon
const hamMenu = document.getElementById("ham-menu");
// The Ham Menu tracking the icon
hamMenu.addEventListener("click", function () {
  //
  offScreenMenu.classList.toggle("open-menu");
});

function removeMenu() {
  offScreenMenu.classList.remove("open-menu");
}
