import './index.css'
import './slider.css'
import './form.css'

function hello() {
    let div = document.createElement("div")
    div.id = "hi"
    div.innerHTML = "<p>Hello there</p>"
    document.body.appendChild(div)
}

function onSliderClick() {
    let slider = document.getElementById('slider')
    let sliderContent = document.getElementById('slider-content')
    let sliderButtonContent = document.getElementById('slider-button-content')

    if (!slider.className || slider.className == 'ltr') {
        slider.className = 'rtl'
        sliderContent.className = 'rtl-content'
        sliderButtonContent.className = 'rtl-button-content'
    } else {
        slider.className = 'ltr'
        sliderContent.className = 'ltr-content'
        sliderButtonContent.className = 'ltr-button-content'
    }
}

document.getElementById("slider-button").addEventListener('click', onSliderClick)