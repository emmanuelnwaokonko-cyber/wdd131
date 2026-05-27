document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`

const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
});
