nav = document.getElementById('topNav');

function scrollAnimations() {
    scrollPosition = window.pageYOffset;
    if (scrollPosition >= 10) {
        topNav.style.boxShadow = "2px 2px 2px 1px rgba(0, 0, 0, 0.2)"

    } else {
        topNav.style.boxShadow = "0px 0px 0px 0px rgba(0, 0, 0, 0.2)"

    }

    if (document.getElementById('innerbox-fourth-first').offsetTop - 600 <= scrollPosition) {
        document.getElementById('innerbox-fourth-first').style.height = "80vh"
        setTimeout(function() {

            document.getElementById('innerbox-fourth-first-inner').style.height = "80vh"
        }, 300)
    }
    if (document.getElementById('innerbox-fourth-third').offsetTop - 600 <= scrollPosition) {
        document.getElementById('innerbox-fourth-third').style.height = "50vh"
        setTimeout(function() {

            document.getElementById('innerbox-fourth-third-inner').style.height = "50vh"
        }, 300)
    }
    if (document.getElementById('innerbox-fourth-fourth').offsetTop - 600 <= scrollPosition) {
        document.getElementById('innerbox-fourth-fourth').style.height = "80vh"
    }
    if (document.getElementById('innerbox-fourth-sixth').offsetTop - 600 <= scrollPosition) {
        document.getElementById('innerbox-fourth-sixth').style.height = "50vh"
    }
    if (document.getElementById('innerbox-fourth-sixth').offsetTop - 600 <= scrollPosition) {
        document.getElementById('innerbox-fourth-sixth').style.height = "50vh"
    }
    if (document.getElementById('image-left').offsetTop - 600 <= scrollPosition) {
        document.getElementById('image-left').style.height = "80vh"
        setTimeout(function() {

            document.getElementById('image-left-inner').style.height = "80vh"
        }, 300)
    }


}