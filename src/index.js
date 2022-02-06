import loadPage from "./modules/loadPage.js"
import loadHome from "./modules/loadHome.js"
import loadMenu from "./modules/loadMenu.js"
import loadContact from "./modules/loadContact.js"

initialPageLoad()

function addNavEvents() {
    const homeBtn = document.getElementById("home-btn")
    const menuBtn = document.getElementById("menu-btn")
    const contactBtn = document.getElementById("contact-btn")

    homeBtn.addEventListener("click", loadHome)
    menuBtn.addEventListener("click", loadMenu)
    contactBtn.addEventListener("click", loadContact)

}

function initialPageLoad() {
    //nav bar & initial page
    loadPage()
    //front page - default tab content
    loadHome()
    //click events for menu
    addNavEvents()
}