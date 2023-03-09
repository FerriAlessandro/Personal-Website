import { videos, genres } from "./videos.js";
{
    let coding, finance, miscellaneous;
    miscellaneous = document.getElementById("miscellaneous");
    coding = document.getElementById("coding");
    finance = document.getElementById("finance");
    genres.forEach((g) => {
        videos.filter(video => video.genre === g).forEach((video) => {

            let container = document.createElement("span");
            let frame = document.createElement("iframe");
            frame.setAttribute("src", video.link);
            frame.width = '400';
            frame.height = '250';
            //img.onclick = function () { window.open(video.link) };
            let description = document.createElement("span");
            description.setAttribute("id", video.name + "Description"); //useful?..
            description.innerHTML = video.description;
            container.setAttribute("id", video.name);
            container.appendChild(frame);
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