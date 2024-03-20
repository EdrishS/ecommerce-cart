const product = [
  {
    id: 1,
    image: "image/aa-1.jpg",
    title: "Headphones",
    price: "$20",
  },
  {
    id: 2,
    image: "image/bb-1.jpg",
    title: "Road NT1 Microphone",
    price: "$45",
  },
  {
    id: 3,
    image: "image/cc-1.jpg",
    title: "Smart Watch",
    price: "$30",
  },
  {
    id: 4,
    image: "image/dd-1.jpg",
    title: "HP Laptop Next Generation",
    price: "$70",
  },
  {
    id: 5,
    image: "image/ee-1.jpg",
    title: "250D DSLR Camera",
    price: "$60",
  },
  {
    id: 6,
    image: "image/ff-1.jpg",
    title: "Metal Dask Lamp",
    price: "$35",
  },
  {
    id: 7,
    image: "image/gg-1.jpg",
    title: "Z Flip Foldable Mobile",
    price: "$55",
  },
  {
    id: 8,
    image: "image/hh-1.jpg",
    title: "Air Pods Pro",
    price: "$88",
  },
];
const categories = [
  ...new Set(
    product.map((item) => {
      return item;
    })
  ),
];

let cart = document.getElementById("root");
cart.innerHTML = categories
  .map((item) => {
    var { image, title, price } = item;
    return `<div class="box">
           <div class="img-box">
              <img src=${image}></img>
            </div>
            <div class="left">
               <p>${title}</p>
               <h2>${price}</h2>
               <button>Add to Cart</button>
            </div>
        </div>`;
  })
  .join("");
