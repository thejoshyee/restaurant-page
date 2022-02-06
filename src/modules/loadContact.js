function createContact() {
    //about section
    const contactContainer = document.createElement("div")
    const contactTitle = document.createElement("h2")
    contactTitle.textContent = "Contact Us"
    contactContainer.appendChild(contactTitle)

    const contactWords = document.createElement("p")
    contactWords.innerHTML = `Call us at 1-800-Chinese-Food-Is-Awesome`

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