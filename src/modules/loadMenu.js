
function createImageContainer(src, alt, text, about, price, className) {

    //create container for image gallery
    const container = document.createElement("div")
    container.classList.add("menu-container")

    //create images and set source and alt text
    const img = document.createElement("img")
    img.setAttribute("src", src)
    img.setAttribute("alt", alt)
    img.setAttribute("class", className)

    //description for images
    const descImg = document.createElement("div")
    descImg.classList.add("description")

    const foodName = document.createElement("div")
    foodName.innerHTML = text
    foodName.classList.add("food-name")

    const aboutFood = document.createElement("div")
    aboutFood.innerHTML = about
    aboutFood.classList.add("about-food")

    const cost = document.createElement("div")
    cost.innerHTML = price
    cost.classList.add("cost")

    //append item details to description
    descImg.appendChild(foodName)
    descImg.appendChild(aboutFood)
    descImg.appendChild(cost)

    //append desc and img to container
    container.appendChild(img)
    container.appendChild(descImg)

    return container

}

function loadMenu() {
    const tabContent = document.getElementById("tab-content")

    tabContent.classList.add("flex")
    tabContent.textContent = ""

    const menuItems = [

        createImageContainer(
            "https://i2.wp.com/hipfoodiemom.com/wp-content/uploads/2014/10/Beef-Chow-Fun_main-2-500x375.jpg",
            "Chow Fun Noodles",
            "Chow Fun Noodles",
            "Flat Stir Fried Noodles with beef or chicken.",
            "- $8.00",
            "chowfun"
        ),

        createImageContainer(
            "https://www.dinneratthezoo.com/wp-content/uploads/2019/07/general-tsos-chicken-4.jpg",
            "General Chicken",
            "General Chicken",
            "The best fried chicken dripped in sauce that you'll love forever.",
            "- $9.00",
            "general-chicken"
        )
    ]

    menuItems.forEach(food => {
        tabContent.append(food)
    })

}

export default loadMenu