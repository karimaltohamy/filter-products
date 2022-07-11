let input = document.querySelector(".input-products");
let containerBoxs = document.querySelector(".container-boxs");

// api products
fetch('https://fakestoreapi.com/products')
.then(res=>res.json())
.then(json=> {
    console.log(json)
    for (let value of json) {
        filterProducts(containerBoxs,value)
    }
    
});

// function filtr product
function filterProducts(grid,value) {
    let box = document.createElement("div");
    box.className = "box"

    let title = value.title;
    let image = value.image;
    let category = value.category;
    let price = value.price;

    box.innerHTML = `
        <img src="${image}" alt="">
        <h3 class="title-box">${title}</h3>
        <span class="category">${category}</span>
        <span class="price">$${price}</span>
        <button class="btn">Buy Now</button>
    `;

    grid.appendChild(box)
}

input.addEventListener("keyup", () => {
    let value = input.value.toUpperCase();
    let boxs = containerBoxs.querySelectorAll(".box")
    console.log(value)

    for (let i = 0; i < boxs.length; i++) {
        let span = boxs[i].querySelector(".title-box")

        if (span.innerHTML.toUpperCase().indexOf(value) > -1) {
            boxs[i].style.display = "block"
        }
        else {
            boxs[i].style.display = "none"
        }
    }
})