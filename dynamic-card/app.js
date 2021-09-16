let cars = [
  {
    make: "Honda",
    name: "Civic",
  },
  {
    make: "Toyota",
    name: "Prado",
  },
];

let carArray = document.getElementById("container");
cars.forEach((car) => {
  let card = document.createElement("div");
  card.classList.add("card");
  carArray.appendChild(card);
  let cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  card.appendChild(cardBody);

  let make= document.createElement("p");
  make.innerHTML= car.make;
  cardBody.appendChild(make);
  let name= document.createElement("p");
  name.innerHTML= car.name;
  cardBody.appendChild(name);

});
