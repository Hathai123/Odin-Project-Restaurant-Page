import "./about.css";

export default function aboutPage() {
    const aboutBtn = document.getElementById("aboutBtn");
    aboutBtn.classList.add("active");

    const aboutDiv = document.createElement("div");
    aboutDiv.setAttribute("class", "about");

    // About's title
    const title = document.createElement("h1");
    title.setAttribute("class", "title");
    title.textContent = `About Menu`;

    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    const p4 = document.createElement("p");
    const p5 = document.createElement("p");
    p1.textContent = `I think just make content about imaginary menu look boring, so I make content about basic order when you order Pad Kaprao in my country (Thailand).`;
    p2.textContent = `When you order Pad Kaprao, the restaurant’s owner will ask what meat you will use as main for Pad Kaprao. In many restaurants, they may have more or less choice than this. But in most (non-halal) restaurants they should have these meats.`;
    p3.textContent = `And the spicy level, if you don’t tell them any, the default in most cases would be quite spicy with 4–5 chilies (or more), so I set the choice in spicy levels for the non-spicy eater. If you want it to be spicier, you can order by asking the owner for more chilies.`;
    p4.textContent = `Finally, about fried eggs, many local Thai restaurants let you specify your egg add-on and if you don’t order any, some may ask if you like to add fried eggs, so we also tell them in order, but normally, if you don’t ask, there will no add-on.`;
    p5.textContent = `P.S. if you are curious why the menu doesn’t have a price. Pad Kaprao has quite a variety in price depending on where you get it. So ask for the price from the restaurant you eat if you don’t want a heart attack. (555)`;


    aboutDiv.appendChild(title);
    aboutDiv.appendChild(p1);
    aboutDiv.appendChild(p2);
    aboutDiv.appendChild(p3);
    aboutDiv.appendChild(p4);
    aboutDiv.appendChild(p5);
    


    return aboutDiv;
}