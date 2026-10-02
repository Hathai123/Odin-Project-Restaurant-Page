import "./about.css";

import background from "../images/basil-minced-pork-with-rice-fried-egg.jpg";
import ex1 from "../images/suradeach-saetang-X6ilNZbrRLM-unsplash.jpg";
import ex2 from "../images/markus-winkler-7XESYTzyUWw-unsplash.jpg";
import ex3 from "../images/vicky-ng-NT5oqzp-050-unsplash.jpg";
import pig from "../images/pig-01.svg";
import chicken from "../images/chicken-01.svg";
import chilli from "../images/chilli-01.svg";
import friedegg from "../images/fried-egg-01.svg";


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

    // display ref for all image use in web
    const ref = document.createElement("h1");
    ref.setAttribute("class", "title");
    ref.setAttribute("style", "margin-top:100px;");
    ref.textContent = `Picture's references`;
    
    const showRef = document.createElement("div");
    showRef.setAttribute("class", "showRef");


    // loop show image's ref
    const allRef = [
        { pic: background, ref: `Designed by Magnific<br><a rel="noopener" href="https://www.magnific.com/th/%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2%E0%B8%9F%E0%B8%A3%E0%B8%B5/basil-minced-pork-with-rice-fried-egg_10726313.htm#fromView=search&page=1&position=6&uuid=fe1c0438-3eb1-401b-a21b-859cd3c48de7&track=ais_hybrid&query=basil+minced+pork">jcomp - Magnific.com</a>`},
        { pic: ex1, ref: `Photo by <a rel="noopener" href="https://unsplash.com/@jointstar?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">suradeach saetang</a> on <a rel="noopener" href="https://unsplash.com/photos/a-plate-of-food-X6ilNZbrRLM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>` },
        { pic: ex2, ref: `Photo by <a rel="noopener" href="https://unsplash.com/@markuswinkler?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Markus Winkler</a> on <a rel="noopener" href="https://unsplash.com/photos/a-plate-of-food-7XESYTzyUWw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>`},
        { pic: ex3, ref: `Photo by <a rel="noopener" href="https://unsplash.com/@vickyng?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Vicky Ng</a> on <a rel="noopener" href="https://unsplash.com/photos/fried-rice-with-sunny-side-up-egg-on-gray-ceramic-plate-NT5oqzp-050?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>` },
        { pic: pig, ref: `Designed by Magnific<br><a rel="noopener" href="https://www.magnific.com/th/%E0%B9%80%E0%B8%A7%E0%B8%81%E0%B9%80%E0%B8%95%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B8%9F%E0%B8%A3%E0%B8%B5/farm-icons-collection_943121.htm#fromView=search&page=1&position=1&uuid=d2d5085f-e0ca-4ec9-8a2a-9669debd4eb1&track=ais_hybrid&query=pig+icon">titusurya - Magnific.com</a>`},
        { pic: chicken, ref: `Designed by Magnific<br><a rel="noopener" href="https://www.magnific.com/th/%E0%B9%80%E0%B8%A7%E0%B8%81%E0%B9%80%E0%B8%95%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B8%9F%E0%B8%A3%E0%B8%B5/farm-icons-collection_943121.htm#fromView=search&page=1&position=1&uuid=d2d5085f-e0ca-4ec9-8a2a-9669debd4eb1&track=ais_hybrid&query=pig+icon">titusurya - Magnific.com</a>` },
        { pic: chilli, ref: `Designed by Magnific<br><a rel="noopener" href="https://www.magnific.com/th/%E0%B9%80%E0%B8%A7%E0%B8%81%E0%B9%80%E0%B8%95%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B8%9F%E0%B8%A3%E0%B8%B5/chili-pepper-spice_169543058.htm#fromView=search&page=1&position=0&uuid=7fb3c1c5-0eda-4738-b76a-7e246c763557&track=ais_hybrid&query=chilli">studiogstock - Magnific.com</a>`},
        { pic: friedegg, ref: `Designed by Magnific<br><a rel="noopener" href="https://www.magnific.com/th/%E0%B9%80%E0%B8%A7%E0%B8%81%E0%B9%80%E0%B8%95%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B8%9F%E0%B8%A3%E0%B8%B5/cute-sunny-side-up-egg-doodle-sticker-with-white-border-vector_34380805.htm#fromView=search&page=1&position=6&uuid=451a1ba3-9c82-48c3-9e47-619938b3c003&track=ais_hybrid&query=fried+egg+icon">rawpixel.com - Magnific.com</a>` },
    ];

    for(const val of allRef){

    const containerImg = document.createElement("div");
    containerImg.setAttribute("class", "picContainer");

    const refImg = document.createElement("img");
    refImg.src = val.pic;
    containerImg.appendChild(refImg);

    const refP = document.createElement("p");
    refP.innerHTML = val.ref;
    showRef.appendChild(containerImg);
    showRef.appendChild(refP);
    }

    aboutDiv.appendChild(ref);
    aboutDiv.appendChild(showRef);
    


    return aboutDiv;
}