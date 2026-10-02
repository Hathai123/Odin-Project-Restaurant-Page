import "./menu.css";

import ex1 from "../images/suradeach-saetang-X6ilNZbrRLM-unsplash.jpg";
import ex2 from "../images/markus-winkler-7XESYTzyUWw-unsplash.jpg";
import ex3 from "../images/vicky-ng-NT5oqzp-050-unsplash.jpg";

export default function exampleSection() {

    // Order's Input
    const example = document.createElement("div");

    // example's Button
    const exampleBtn = document.createElement("button");
    exampleBtn.textContent = "ตัวอย่างการสั่ง (Example Menu)";
    exampleBtn.setAttribute("id", "example");

    const exampleDisplay = document.createElement("div");
    exampleDisplay.setAttribute("id", "exampleDisplay");

    // example's picture
    const exampleContainer = document.createElement("div");
    exampleContainer.setAttribute("class", "exampleContainer");

    const example1 = document.createElement("a");
    example1.setAttribute("class", "picContainer");
    const img1 = document.createElement("img");
    img1.src = ex1;
    example1.appendChild(img1);
    // whenclick scroll to meatOrder
    example1.href = "#meatOrder";
    // and change all input
    example1.addEventListener("click", () => {
        setOrder(0, 3, 1);
    })

    const example2 = document.createElement("a");
    example2.setAttribute("class", "picContainer");
    const img2 = document.createElement("img");
    img2.src = ex2;
    example2.appendChild(img2);
    example2.href = "#meatOrder";
    example2.addEventListener("click", () => {
        setOrder(2, 2, 0);
    })

    const example3 = document.createElement("a");
    example3.setAttribute("class", "picContainer");
    const img3 = document.createElement("img");
    img3.src = ex3;
    example3.appendChild(img3);
    example3.href = "#meatOrder";
    example3.addEventListener("click", () => {
        setOrder(2, 1, 1);
    })

    exampleContainer.appendChild(example1);
    exampleContainer.appendChild(example2);
    exampleContainer.appendChild(example3);

    // when click button show exampleContainer
    exampleBtn.addEventListener("click", () => {
        if (exampleContainer.parentElement === exampleDisplay)
            exampleDisplay.removeChild(exampleContainer);
        else
            exampleDisplay.appendChild(exampleContainer);
    });


    example.appendChild(exampleBtn);
    example.appendChild(exampleDisplay);
    return example;
}

function setOrder(meat, spicy, egg) {
    const event = new Event('change');

    const selectMeat = document.getElementById("selectMeat");
    selectMeat.selectedIndex = meat;
    selectMeat.dispatchEvent(event);

    const selectSpicy = document.getElementById("selectSpicy");
    selectSpicy.selectedIndex = spicy;
    selectSpicy.dispatchEvent(event);

    const inputEgg = document.getElementById("inputEgg");
    inputEgg.value = egg;
    inputEgg.dispatchEvent(event);
}