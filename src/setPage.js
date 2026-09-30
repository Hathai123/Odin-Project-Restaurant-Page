const content = document.getElementById("content");

// function for put page content 
function setPage(thePage) {
    let page = thePage;
    content.appendChild(page);
}

// function for clear content
function clearContent() {
    clearActive();
    while (content.lastElementChild) {
        content.removeChild(content.lastElementChild);
    }
}
// inactive all nav's Link
function clearActive() {
    const navLinkList = document.querySelectorAll("nav > button");
    navLinkList.forEach(navLink => {navLink.classList.remove("active")});
}

export { setPage, clearContent };