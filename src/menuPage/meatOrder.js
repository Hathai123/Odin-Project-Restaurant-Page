import "./menu.css";

import pig from "../images/pig-01.svg";
import chicken from "../images/chicken-01.svg";

export default function meatSection() {

    // Order's Input
    const allOrder = document.createElement("div");

    // Meat's Input
    const meatOrder = document.createElement("div");
    meatOrder.setAttribute("class", "inputOrder");

    const selectMeat = document.createElement("select");
    selectMeat.id = "selectMeat";

    const meatOption1 = document.createElement("option");
    meatOption1.textContent = "หมูกรอบ (Crispy Pork)";
    meatOption1.value = "Crispy Pork";

    const meatOption2 = document.createElement("option");
    meatOption2.textContent = "หมูชิ้น (Sliced pork)";
    meatOption2.value = "Sliced pork";

    const meatOption3 = document.createElement("option");
    meatOption3.textContent = "หมูสับ (Minced pork)";
    meatOption3.value = "Minced pork";

    const meatOption4 = document.createElement("option");
    meatOption4.textContent = "ไก่ชิ้น (Chopped chicken)";
    meatOption4.value = "Chopped chicken";

    const meatOption5 = document.createElement("option");
    meatOption5.textContent = "ไก่สับ (Minced chicken)";
    meatOption5.value = "Minced chicken";

    selectMeat.appendChild(meatOption1);
    selectMeat.appendChild(meatOption2);
    selectMeat.appendChild(meatOption3);
    selectMeat.appendChild(meatOption4);
    selectMeat.appendChild(meatOption5);

    const selectMeatLabel = document.createElement("label");
    selectMeatLabel.textContent = "เลือกเนื้อ (What's Meat?) :";
    selectMeatLabel.setAttribute("for", "selectMeat");


    const showMeat = document.createElement("div");
    showMeat.setAttribute("class", "displaySelect");
    const picContainer = document.createElement("div");
    picContainer.setAttribute("class", "picContainer");
    const img = document.createElement("img");
    const p = document.createElement("p");
    picContainer.appendChild(img);
    setMeatDisplay(img, "pig", p, "หมูกรอบ");
    showMeat.appendChild(picContainer);
    showMeat.appendChild(p);

    // change display when meat's dropdown change
    selectMeat.addEventListener("change", (e) => {
        switch (e.target.value) {
            case "Crispy Pork":
                setMeatDisplay(img, "pig", p, "หมูกรอบ");
                break;
            case "Sliced pork":
                setMeatDisplay(img, "pig", p, "หมูชิ้น");
                break;
            case "Minced pork":
                setMeatDisplay(img, "pig", p, "หมูสับ");
                break;
            case "Chopped chicken":
                setMeatDisplay(img, "chicken", p, "ไก่ชิ้น");
                break;
            case "Minced chicken":
                setMeatDisplay(img, "chicken", p, "ไก่สับ");
                break;

        }
    })
    

    function setMeatDisplay(imgNode, image, messageNode, message) {
        switch (image) {
            case "pig":
                imgNode.src = pig;
                break;
            case "chicken":
                imgNode.src = chicken;
                break;
        }
        messageNode.textContent = message;

    }


    meatOrder.appendChild(selectMeatLabel);
    meatOrder.appendChild(selectMeat);
    allOrder.appendChild(meatOrder);
    allOrder.appendChild(showMeat);


    return allOrder;
}