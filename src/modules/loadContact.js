

function createContact() {
    //about section
    const contactContainer = document.createElement("div")
    contactContainer.classList.add("contact-container")
    const contactTitle = document.createElement("h2")
    contactTitle.textContent = "Contact Us"
    contactContainer.appendChild(contactTitle)

    const contactWords = document.createElement("p")
    contactWords.innerHTML = `<p><i>For questions or concerns please feel free to contact us with one of the methods below!</i></p>
    <p><b>Email:</b> hello@joshschinesecuisine.com</p>
    <p><b>Phone:</b> 1-800-ChineseFood</p>`

    contactContainer.appendChild(contactWords)

    return contactContainer

}

function loadContact() {
    const tabContent = document.getElementById("tab-content")
    tabContent.classList.add("flex")
    
    //prevents it from adding it to the page multiple times
    tabContent.innerHTML = ""

    const contactSection = createContact()
    tabContent.appendChild(contactSection)
}

export default loadContact