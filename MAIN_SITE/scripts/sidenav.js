const factoryNew = [

    {
        cardTag: "FN",
        cardTitle: "CRIMSON WEB1",
        cardSubtitle: "Knife",
        image: "./images/knife.png",
        price: 299,
        steamPrice: 344
    },


]

const fieldTested = [
    {
        cardTag: "FT",
        cardTitle: "CRIMSON WEB2",
        cardSubtitle: "Knife",
        image: "./images/knife3.png",
        price: 399,
        steamPrice: 444
    }
]

const minimalWear = [
    {
        cardTag: "MW",
        cardTitle: "CRIMSON WEB3",
        cardSubtitle: "Knife",
        image: "./images/knife3.png",
        price: 599,
        steamPrice: 944
    }
]

const wellWorn = [
    {
        cardTag: "WW",
        cardTitle: "CRIMSON WEB4",
        cardSubtitle: "Knife",
        image: "./images/knife4.png",
        price: 399,
        steamPrice: 1144
    }
]

const battleScarred = [
    {
        cardTag: "BS",
        cardTitle: "CRIMSON WEB5",
        cardSubtitle: "Knife",
        image: "./images/knife5.png",
        price: 999,
        steamPrice: 2144
    }
]

const all = [
    {
        name: "allItems",
        content: [
            ...fieldTested,
            ...factoryNew,
            ...minimalWear,
            ...wellWorn,
            ...battleScarred
        ]
    },
    {
        name: "factoryNew",
        content: factoryNew
    },
    {
        name: "fieldTested",
        content: fieldTested
    },
    {
        name: "minimalWear",
        content: minimalWear
    },
    {
        name: "wellWorn",
        content: wellWorn
    },
    {
        name: "battleScarred",
        content: battleScarred
    }

]


function createCard(element) {
    return `
    <div class="card">
    <h1 class="cardTag">${element.cardTag}</h1>
    <h1 class="cardTitle">${element.cardTitle}</h1>
    <h1 class="cardSubtitle">${element.cardSubtitle}</h1>
    <img class="cardImage" src="${element.image}" alt="">
    <hr>
    <h1 class="price"><span style="color: #901919;">$</span>${element.price}</h1>
    <h1 class="steamPrice">Steam Price : $${element.steamPrice}</h1>

    <button class="addtocart_button">
        <h1>ADD TO CART</h1>
    </button>

</div>
`
}


let div = document.querySelector(".div_for_items");

let checkbox_buttons = document.querySelectorAll(".checkbox_button");

checkbox_buttons.forEach(cBtn => {
    cBtn.addEventListener('click', event => {

        clearAllClassFromArray(checkbox_buttons, "active");
        cBtn.classList.add("active");

        const listOfitems = all.filter(
            item => item.name == cBtn.id
        )[0].content;



        const contentDiv = document.createElement("div");
        contentDiv.classList.add("container");

        listOfitems.forEach(item => {
            contentDiv.insertAdjacentHTML("beforeend", createCard(item));
        });


        div.innerHTML = "";

        div.appendChild(contentDiv);
    })
})

document.querySelector("#allItems").click();

function clearAllClassFromArray(array, className) {
    array.forEach(el => {
        el.classList.remove(className);
    });
}

