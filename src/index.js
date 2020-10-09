import './styles.css'

function hello() {
    let div = document.createElement("div")
    div.id = "hi"
    div.innerHTML = "<p>Hello there</p>"
    document.body.appendChild(div)
}

function onSliderClick() {
    let slider = document.getElementById('slider')

    if (!slider.className || slider.className == 'ltr') {
        slider.className = 'rtl'
    } else {
        slider.className = 'ltr'
    }
}

document.getElementById("slider-button").addEventListener('click', onSliderClick)