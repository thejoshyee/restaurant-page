
function loadPage() {
    const content = document.getElementById("content")
 
    //create header
    const header = document.createElement("header")
    header.setAttribute("id", "header")
    //append header to content
    content.appendChild(header)
    //header title
    header.textContent = `JOSH'S CHINESE CUISINE`

    //create nav
    const navBar = document.createElement("nav")
    navBar.setAttribute("id", "nav-bar")
    content.appendChild(navBar)

        //create nav buttons
        // home button
        const homeBtn = document.createElement("button")
        homeBtn.setAttribute("id", "home-btn")
        homeBtn.innerHTML = "Home"
        navBar.appendChild(homeBtn)

        //menu button
        const menuBtn = document.createElement("button")
        menuBtn.setAttribute("id", "menu-btn")
        menuBtn.innerHTML = "Menu"
        navBar.appendChild(menuBtn)

        //contact button
        const contactBtn = document.createElement("button")
        contactBtn.setAttribute("id", "contact-btn")
        contactBtn.innerHTML = "Contact"
        navBar.appendChild(contactBtn)

        //create tab content
        const tabContent = document.createElement("main")
        tabContent.setAttribute("id", "tab-content")
        content.appendChild(tabContent)


    //create footer

  
    const footer = document.createElement("footer")
    footer.setAttribute("class", "footer")
    footer.innerHTML = `Josh's Chinese Food 2022`
    content.appendChild(footer)
    

    

}

export default loadPage