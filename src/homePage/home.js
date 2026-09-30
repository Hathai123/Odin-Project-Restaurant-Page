import "./home.css";

import { setPage, clearContent } from "../setPage.js";
import pageState from "../pageState.js";
import menuPage from "../menuPage/menu.js";

export default function homePage() {
    const homeBtn = document.getElementById("homeBtn");
    homeBtn.classList.add("active");

    const homeDiv = document.createElement("div");
    homeDiv.setAttribute("class", "home");

    // restaurant's name
    const storeNameTH = document.createElement("div");
    storeNameTH.textContent = "ร้านขายผัดกะเพรา";
    storeNameTH.setAttribute("class", "storeNameTH");
    homeDiv.appendChild(storeNameTH);

    const storeNameEN = document.createElement("div");
    storeNameEN.textContent = "Pad Kaprao Restaurant";
    storeNameEN.setAttribute("class", "storeNameEN");
    homeDiv.appendChild(storeNameEN);

    // goto menu button
    const toMenuBtn = document.createElement("button");
    toMenuBtn.textContent = "Menu";
    toMenuBtn.setAttribute("class", "toMenuBtn");
    toMenuBtn.addEventListener("click", () => {
        clearContent();
        setPage(menuPage());
        pageState.setStateMenu();
    })
    homeDiv.appendChild(toMenuBtn);
    return homeDiv;
}