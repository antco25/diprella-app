import './index.css'
import './slider.css'
import './form.css'

function onSliderClick() {
    const root = document.getElementById('root')
    const slider = document.getElementById('slider')
    const sliderContent = document.getElementById('slider-content')
    const sliderButton = document.getElementById("slider-button")
    const sliderButtonContent = document.getElementById('slider-button-content')
    const form = document.getElementById('form')

    if (window.matchMedia("(max-width: 640px)").matches) {
        root.scroll({
            top: 0, 
            behavior: 'smooth'
          });
    }

    if (slider.className == 'slider-right') {
        sliderToLeftAnimations()

        setTimeout(() => {
            sliderToLeftContentChange()
        }, 500);

        setTimeout(() => {
            sliderOnLeft()
        }, 1000);

    } else {
        sliderToRightAnimations()

        setTimeout(() => {
            sliderToRightContentChange()
        }, 500);

        setTimeout(() => {
            sliderOnRight()
        }, 1000);
    }

    function sliderToLeftAnimations() {
        slider.className = 'rtl-slider'
        sliderContent.className = 'rtl-content'
        sliderButton.className = 'event-disabled'
        sliderButtonContent.className = 'rtl-button-content'
        form.className = 'ltr-form'
    }

    function sliderToRightAnimations() {
        slider.className = 'ltr-slider'
        sliderContent.className = 'ltr-content'
        sliderButton.className = 'event-disabled'
        sliderButtonContent.className = 'ltr-button-content'
        form.className = 'rtl-form'
    }

    function sliderToLeftContentChange() {
        sliderContentLeft()
        formContentRight()
    }

    function sliderToRightContentChange() {
        sliderContentRight()
        formContentLeft()
    }

    function sliderOnLeft() {
        slider.className = 'slider-left'
        sliderContent.className = ''
        sliderButton.className = ''
        sliderButtonContent.className = ''
        form.className = 'form-right'
    }

    function sliderOnRight() {
        slider.className = 'slider-right'
        sliderContent.className = ''
        sliderButton.className = ''
        sliderButtonContent.className = ''
        form.className = 'form-left'
    }

    function sliderContentRight() {
        sliderContent.innerHTML =
        "<h1>Hello, Friend!</h1>" +
        "<p>Enter your personal details and start your journey with us</p>"

        sliderButtonContent.innerHTML = "Sign Up"
    }

    function sliderContentLeft() {
        sliderContent.innerHTML = 
        "<h1>Welcome Back!</h1>" +
        "<p>To keep connected with us please login with your personal info</p>"

        sliderButtonContent.innerHTML = "Sign In"
    }

    function formContentRight() {
        const formTitle = document.getElementById('form-title')
        const formSubtitle = document.getElementById('form-subtitle')
        const formButtonContent = document.getElementById('form-button-content')
        const formInput = document.getElementById('form-input')

        formTitle.innerHTML = "Create Account"
        formSubtitle.innerHTML = "or use your email for registration:"
        formButtonContent.innerHTML = "Sign Up"
        formInput.innerHTML =                 
        '<form>' +
            '<div class="input-container">' +
                '<i class="fa fa-user icon"></i>' +
                '<input type="text" name="name" placeholder="Name">' +
            '</div>' +
            '<div class="input-container">' +
                '<i class="fa fa-envelope icon"></i>' +
                '<input type="text" name="email" placeholder="Email">' +
            '</div>' +
            '<div class="input-container">' +
                '<i class="fa fa-lock icon"></i>' +
                '<input type="password" name="password" placeholder="Password">' +
            '</div>' +
        '</form>'
    }

    function formContentLeft() {
        const formTitle = document.getElementById('form-title')
        const formSubtitle = document.getElementById('form-subtitle')
        const formButtonContent = document.getElementById('form-button-content')
        const formInput = document.getElementById('form-input')

        formTitle.innerHTML = "Sign in to Your Account"
        formSubtitle.innerHTML = "or use your email account:"
        formButtonContent.innerHTML = "Sign In"
        formInput.innerHTML =                 
        '<form>' +
            '<div class="input-container">' +
                '<i class="fa fa-envelope icon"></i>' +
                '<input type="text" name="email" placeholder="Email">' +
            '</div>' +
            '<div class="input-container">' +
                '<i class="fa fa-lock icon"></i>' +
                '<input type="password" name="password" placeholder="Password">' +
            '</div>' +
        '</form>' +
        '<a href="#" class="form-input-text">Forgot your password?</a>'
    }
}

document.getElementById("slider-button").addEventListener('click', onSliderClick)