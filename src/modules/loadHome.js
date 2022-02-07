
function createAbout() {
    //about div container
    const about = document.createElement("div")
    about.setAttribute("id", "about-container")


    // h2 & words container
    const welcomeContainer = document.createElement("div")
    welcomeContainer.setAttribute("class", "welcome-container")


    //about words paragraph
    const aboutWords = document.createElement("p")
    aboutWords.innerHTML = `<p>Do you love Chinese Food? Then you will love Josh's Chinese Cuisine! It's the best in San Diego, CA!</p>
    <p>You will get authentic Hong Kong Style food with all your favorite goodies like Chow Fun, General Chicken, Lo Sa Bao, 
    Ham Yu Guy Lop Fan, Scallop Fried Rice, Fried Tofu, Flounder and much much more!</p>
    <p>So stop on by and say hello! We love meeting new people and sharing our Chinese culture all around San Diego!</p>`


    //about h2 title
    const title = document.createElement("h2")
    title.textContent = "Welcome to San Diego's #1 Chinese Restaurant"
    title.setAttribute("class", "welcome-title")
  

    //about image
    const homeImage = document.createElement("img")
    homeImage.setAttribute("src", "https://www.thespruceeats.com/thmb/noIa6Wr8DKHmRlm9OH6dOHsHEbQ=/940x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/chinese-take-out-472927590-57d31fff3df78c5833464e7b.jpg")
    homeImage.setAttribute("class", "home-image")


    //append home image to about container
    about.appendChild(homeImage)
    //append title to about container
    about.appendChild(title)
    //append words to about container
    about.appendChild(aboutWords)
    //append welcomecontainer to about
    about.appendChild(welcomeContainer)

    // append h2 title and words paragraph to welcomeContainer
    welcomeContainer.append(title)
    welcomeContainer.append(aboutWords)
    
    //return about
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