import "./styles.css";

import homePage from "./homePage/home.js";

const content = document.getElementById("content");

// object for check which page we're in
const pageState = (function () {
    let state = "Home";
    const getState = () => state;
    const setStateHome = () => { state = "Home" };
    const setStateMenu = () => { state = "Menu" };
    const setStateAbout = () => { state = "About" };
    return { getState, setStateHome, setStateMenu, setStateAbout };
})();

function setPage(thePage) {
    let page = thePage;
    content.appendChild(page);
}

// start web
setPage(homePage());

// set nav's Menu
const homeBtn = document.getElementById("homeBtn");
homeBtn.addEventListener("click", (e) => {
    if (pageState.getState() !== "Home") {
        clearContent(e.target);
        setPage(homePage());
        pageState.setStateHome();

    }
});

// set nav's Menu
const menuBtn = document.getElementById("menuBtn");
menuBtn.addEventListener("click", (e) => {
    if (pageState.getState() !== "Menu") {
        clearContent();
        alert("Menu");
        pageState.setStateMenu();
    }
});

// set nav's About
const aboutBtn = document.getElementById("aboutBtn");
aboutBtn.addEventListener("click", (e) => {
    if (pageState.getState() !== "About") {
        clearContent();
        alert("About");
        pageState.setStateAbout();
    }
});


// function for clear content
function clearContent() {
    clearActive();
    while (content.lastElementChild) {
        content.removeChild(content.lastElementChild);
    }
}
// inactive all nav's Link
function clearActive() {
    alert("Clear Link");
    const navLinkList = document.querySelectorAll("nav > button");
    navLinkList.forEach(navLink => {navLink.classList.remove("active")});
}
