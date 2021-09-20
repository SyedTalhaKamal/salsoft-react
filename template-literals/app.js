let humans = [{
    name: "azam",
    age: 18,
    gender: "Male",
    img: "images/chapter-1.png",
},
{
    name: "haseeb",
    age: 25,
    gender: "Male",
    img: "images/chapter-2.png",
},
{
    name: "ahab",
    age: 26,
    gender: "Male",
    img: "images/chapter-3.png",
},
];

let container = document.getElementById("container");
let templateList;
humans.forEach(human => {

    templateList = `<ul class="list">
        <li>${human.name}</li>
        <li>${human.age}</li>
        <li>${human.gender}</li>
        </ul>
        `;
    console.log(templateList);
    container.innerHTML = container.innerHTML + templateList;
});
