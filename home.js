import { works } from './sections/work.js';

{
    var createSections = function () {
        createWork();
    }


    var createWork = function () {
        for (let i = 0; i < works.length; i++) {
            let carousel = document.getElementsByClassName("carousel"); //Only one carousel in the file which is the Work carousel
            let carousel_element = document.createElement("div");
            let anchor_element = document.createElement("a");
            let container = document.createElement("div");
            let image = document.createElement("img");
            let image_title = document.createElement("div");
            let image_description = document.createElement("p");
            image_title.innerHTML = works[i].name;
            image_title.setAttribute("class", "image_title");
            image_description.innerHTML = works[i].description;
            image_description.setAttribute("class", "image_description");
            anchor_element.href = works[i].link;
            anchor_element.target = "_blank";
            carousel_element.setAttribute("class", "carousel_item");
            carousel[0].appendChild(carousel_element);
            image.setAttribute('src', works[i].img);
            image.width = '400';
            image.height = '400';
            container.setAttribute('class', "image_container image_container--blur");

            container.appendChild(image_title);
            container.appendChild(image_description);
            anchor_element.appendChild(image);
            anchor_element.appendChild(container);
            carousel_element.appendChild(anchor_element);
        }
        let carousel = document.getElementsByClassName("carousel");
        let carousel_items = carousel[0].querySelectorAll(".carousel_item");
        let carousel_buttons = Array.from(carousel_items, () => {
            return `<span class="carousel_button"></span>`;
        });
        carousel[0].insertAdjacentHTML("beforeend",
            `<div class="carousel_nav">
			${carousel_buttons.join("")}
		</div>
	    `);

        let buttons = carousel[0].querySelectorAll(".carousel_button");
        buttons.forEach((button, i) => {
            button.addEventListener("click", () => {
                //unselect all the items
                carousel_items.forEach(item => item.classList.remove("carousel_item--selected"));
                buttons.forEach(button => button.classList.remove("carousel_button--selected"));

                //Selected the right item based on the button index
                carousel_items[i].classList.add("carousel_item--selected");
                button.classList.add("carousel_button--selected");
            })
        });
        //Selected the first item when the page loads
        carousel_items[0].classList.add("carousel_item--selected");
        buttons[0].classList.add("carousel_button--selected");


    }



    var addListeners = function () {
        var coll = document.getElementsByClassName("collapsible");
        var i;
        for (i = 0; i < coll.length; i++) {
            coll[i].addEventListener("click", function () {
                var childNodes = this.childNodes;

                for (var i = 0; i < childNodes.length; i++) {
                    if (childNodes[i].nodeType == 1)
                        childNodes[i].classList.toggle("active");  // <a>
                }
                var content = this.nextElementSibling;
                if (content.style.maxHeight) {
                    content.style.maxHeight = null;
                } else {
                    content.style.maxHeight = content.scrollHeight + "px";
                }
            })
        }
    }

    createSections();
    addListeners();

}