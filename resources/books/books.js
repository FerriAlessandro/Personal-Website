const genres = ["coding", "finance", "miscellaneous"];

const books = [
    {
        name: "Design Patterns",
        author: "",
        img: "./images/Design_patterns.jpg", //link to the img
        link: "http://amazon.it/Design-Patterns-Elements-Reusable-Object-Oriented/dp/0201633612", //link to amazon
        description: "A book about design patterns with examples in C++",
        genre: "coding", //coding, finance, ...

    },

    {
        name: "Java: How to Program",
        author: "",
        img: "./images/Java_how_to_program.jpg",
        link: "https://www.amazon.it/Java-Program-Early-Objects-Global/dp/1292223855/ref=sr_1_1?keywords=java+how+to+program+deitel&qid=1658501905&sprefix=%2Caps%2C120&sr=8-1", //link to amazon
        description: "A book about Java",
        genre: "coding",

    },

    {
        name: "Il diavolo alla cattedra",
        author: "",
        img: "./images/il_diavolo_alla_cattedra.jpg",
        link: "https://www.amazon.it/gp/product/8806227874/ref=ox_sc_act_title_11?smid=A11IL2PNWYJU7H&psc=1", //link to amazon
        description: "A book about logic",
        genre: "miscellaneous",

    },
];

export { books, genres };