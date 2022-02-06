
function createAbout() {
    //about section
    const about = document.createElement("div")
    const title = document.createElement("h2")
    title.textContent = "About Us"
    about.appendChild(title)

    const aboutWords = document.createElement("p")
    aboutWords.innerHTML = `Do you love Chinese Food? Then you will love Josh Yee's Chinese Cuisine! It's the best in San Diego, CA!
    You will get authentic Hong Kong Style food with all your favorite goodies like Chow Fun, General Chicken, Lo Sa Bao, 
    Ham Yu Guy Lop Fan, Scallop Fried Rice, Fried Tofu, Flounder and much much more!`

    about.appendChild(aboutWords)

    return about

}

function loadHome() {
    const tabContent = document.getElementById("tab-content")
    tabContent.classList.add("flex")
    
    //prevents it from adding it to the page multiple times
    tabContent.innerHTML = ""

    const aboutSection = createAbout()

    tabContent.appendChild(aboutSection)
}

export default loadHome