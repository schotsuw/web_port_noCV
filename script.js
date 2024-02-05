function toggleMenu() {
    //target two elements: menu-links and ham-icon class
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    //once click, it will add or remove the opened class
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}