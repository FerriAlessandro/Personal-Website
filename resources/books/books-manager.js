import { books, genres } from "./books.js";

{
    let coding, finance, miscellaneous;
    miscellaneous = document.getElementById("miscellaneous");
    coding = document.getElementById("coding");
    finance = document.getElementById("finance");
    genres.forEach((g) => {
        books.filter(book => book.genre === g).forEach((book) => {

            let container = document.createElement("span");
            let img = document.createElement("img");
            img.setAttribute("src", book.img);
            img.width = '200';
            img.height = '250';
            img.onclick = function () { window.open(book.link) };
            let description = document.createElement("span");
            description.setAttribute("id", book.name + "Description"); //useful?..
            description.innerHTML = book.description;
            container.setAttribute("id", book.name);
            container.appendChild(img);
            container.appendChild(description);
            if (g === "coding")
                coding.appendChild(container);
            else if (g === "finance")
                finance.appendChild(container);
            else if (g === "miscellaneous")
                miscellaneous.appendChild(container)
        });

    });

}