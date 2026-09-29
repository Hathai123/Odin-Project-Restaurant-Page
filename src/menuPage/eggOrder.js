import "./menu.css";

import friedegg from "../images/fried-egg-01.svg";

export default function eggSection() {

    // Order's Input
    const allOrder = document.createElement("div");

    // egg's Input
    const eggOrder = document.createElement("div");
    eggOrder.setAttribute("class", "inputOrder");

    const input = document.createElement("div");
    const inputEgg = document.createElement("input");
    inputEgg.id = "inputEgg";
    inputEgg.type = "number";
    inputEgg.min = 0;
    inputEgg.max = 5;
    inputEgg.value = 0;

    const inputEggLabel1 = document.createElement("label");
    inputEggLabel1.textContent = "เพิ่มไข่ดาวไหม? (Add Fried-Egg?)";
    inputEggLabel1.setAttribute("for", "inputEgg");

    const inputEggLabel2 = document.createElement("label");
    inputEggLabel2.textContent = "เพิ่มไข่ (Add) [0 - 5] : ";
    inputEggLabel2.setAttribute("for", "inputEgg");

    input.appendChild(inputEggLabel2);
    input.appendChild(inputEgg);

    eggOrder.appendChild(inputEggLabel1);
    eggOrder.appendChild(input);


    const showEgg = document.createElement("div");
    showEgg.setAttribute("class", "displaySelect");
    const picContainer = document.createElement("div");
    picContainer.setAttribute("class", "picContainer");
    const img = document.createElement("img");
    img.src = friedegg;
    const p = document.createElement("p");
    picContainer.appendChild(img);
    setEggMessage(p, "ไม่ใส่ไข่ดาว");
    showEgg.appendChild(p);

    // change display when egg's value
    inputEgg.addEventListener("change", (e) => {
        if(e.target.value === "0"){
            if(showEgg.contains(picContainer)){
                showEgg.removeChild(picContainer);
            }
            setEggMessage(p, "ไม่ใส่ไข่ดาว");
        }else{
            if(!showEgg.contains(picContainer)){
                showEgg.appendChild(picContainer);
            }
            const text = "ใส่ไข่ดาว " + e.target.value +" ใบ"
            setEggMessage(p, text);
        }
    })
    

    function setEggMessage( messageNode, message) {
        messageNode.textContent = message;
    }


    
    allOrder.appendChild(eggOrder);
    allOrder.appendChild(showEgg);


    return allOrder;
}