import "./menu.css";

import meatOrder from "./meatOrder.js";
import spicyOrder from "./spicyOrder.js";
import eggOrder from "./eggOrder.js";

import example from "./example.js";

export default function menuPage() {
    const menuBtn = document.getElementById("menuBtn");
    menuBtn.classList.add("active");

    const menuDiv = document.createElement("div");
    menuDiv.setAttribute("class", "menu");

    // Menu's title
    const title = document.createElement("div");
    title.setAttribute("class", "title");

    const titleTH = document.createElement("div");
    titleTH.textContent = `สั่งผัดกะเพรา`;

    const titleEN = document.createElement("div");
    titleEN.textContent = `My Pad Kaprao's Order`;

    title.appendChild(titleTH);
    title.appendChild(titleEN);
    menuDiv.appendChild(title);

    menuDiv.appendChild(example());

    menuDiv.appendChild(meatOrder());
    menuDiv.appendChild(spicyOrder());
    menuDiv.appendChild(eggOrder());
    


    return menuDiv;
}