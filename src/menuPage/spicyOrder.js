import "./menu.css";

import chilli from "../images/chilli-01.svg";
import noChilli from "../images/no-chilli-01.svg";

export default function spicySection() {

    // Order's Input
    const allOrder = document.createElement("div");

    // spicy's Input
    const spicyOrder = document.createElement("div");
    spicyOrder.setAttribute("class", "inputOrder");

    const selectSpicy = document.createElement("select");
    selectSpicy.id = "selectSpicy";

    const spicyOption1 = document.createElement("option");
    spicyOption1.textContent = "ไม่พริก (No chili)";
    spicyOption1.value = "No chili";

    const spicyOption2 = document.createElement("option");
    spicyOption2.textContent = "ไม่เผ็ด (Not spicy)";
    spicyOption2.value = "Not spicy";

    const spicyOption3 = document.createElement("option");
    spicyOption3.textContent = "เผ็ดน้อย (Mildly spicy)";
    spicyOption3.value = "Mildly spicy";

    const spicyOption4 = document.createElement("option");
    spicyOption4.textContent = "เผ็ด (Spicy)";
    spicyOption4.value = "Spicy";
    spicyOption4.setAttribute("selected", "selected");

    selectSpicy.appendChild(spicyOption1);
    selectSpicy.appendChild(spicyOption2);
    selectSpicy.appendChild(spicyOption3);
    selectSpicy.appendChild(spicyOption4);

    const selectSpicyLabel = document.createElement("label");
    selectSpicyLabel.textContent = "ระดับความเผ็ด (Spicy Levels) :";
    selectSpicyLabel.setAttribute("for", "selectSpicy");


    const showspicy = document.createElement("div");
    showspicy.setAttribute("class", "displaySelect");

    const picContainer = document.createElement("div");

    picContainer.setAttribute("class", "picContainer");
    const img = document.createElement("img");
    picContainer.appendChild(img);

    const p = document.createElement("p");
    const chiliP = document.createElement("p");

    setSpicyDisplay(img, 5, p, "เผ็ด",chiliP);
    showspicy.appendChild(p);
    showspicy.appendChild(picContainer);
    showspicy.appendChild(chiliP);

    // change display when spicy's dropdown change
    selectSpicy.addEventListener("change", (e) => {
        switch (e.target.value) {
            case "No chili":
                setSpicyDisplay(img, 0, p, "ไม่ใส่พริก",chiliP);
                break;
            case "Not spicy":
                setSpicyDisplay(img, 1, p, "ไม่เผ็ด",chiliP);
                break;
            case "Mildly spicy":
                setSpicyDisplay(img, 3, p, "เผ็ดน้อย",chiliP);
                break;
            case "Spicy":
                setSpicyDisplay(img, 5, p, "เผ็ด",chiliP);
                break;

        }
    })


    function setSpicyDisplay(imgNode, chilliNum, messageNode, message,chiliP) {
        if (chilliNum) {
            imgNode.src = chilli;
            chiliP.textContent = chilliNum;
        } else {
            imgNode.src = noChilli;
            chiliP.textContent = "";
        }
        messageNode.textContent = message;

    }


    spicyOrder.appendChild(selectSpicyLabel);
    spicyOrder.appendChild(selectSpicy);
    allOrder.appendChild(spicyOrder);
    allOrder.appendChild(showspicy);


    return allOrder;
}