const question1 = () => {
    const sidebarButton = document.getElementById("sidebar-button");
    const sidebar = document.getElementById("sidebar");

    // Listen for a "click" event on the sidebar's button.
    //
    // Browsers emit lots of different kinds of events, for
    // a full list see the following link:
    //   https://www.javatpoint.com/javascript-events
    //
    // addEventListener will then call the function we provide
    // whenever the button is clicked.
    sidebarButton.addEventListener("click", (event) => {
        const sidebarIsOpen = sidebar.classList.toggle('opened');

        if (sidebarIsOpen) {
            // Close the sidebar
            /** YOUR CODE HERE */
            sidebarIsOpen
            sidebarButton.innerText = "‹‹‹";
            // sidebarIsOpen = false;

        } else {
            // Open the sidebar
            /** YOUR CODE HERE */
            sidebarIsOpen
            sidebarButton.innerText = '›››';
        }
    });
};

const scrollToIntro = () => {
    // Scroll to introduction section 
    const scrollButton = document.getElementById('scroll-intro');
    const scrollSection = document.getElementById('introduction');

    scrollButton.addEventListener("click", (event) => {
        console.log('hi');
        scrollSection.scrollIntoView({ behavior: "smooth" })
    })
}

const scrollToEdu = () => {
    // Scroll to education section 
    const scrollButton = document.getElementById('scroll-edu');
    const scrollSection = document.getElementById('educations');

    scrollButton.addEventListener("click", (event) => {
        console.log('hi');
        scrollSection.scrollIntoView({ behavior: "smooth" })
    })
}

document.addEventListener("DOMContentLoaded", (event) => {
    // We wrap each question in a try-catch so that way even if
    // your code for one question errors, the other ones
    // will work.
    try {
        question1();
    } catch (e) {
        console.error(e);
    }

    try {
        scrollToIntro();
    } catch (e) {
        console.error(e);
    }

    try {
        scrollToEdu();
    } catch (e) {
        console.error(e);
    }

});