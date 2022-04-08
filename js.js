const nameMain = document.getElementById("name");
const button = document.getElementById("btn");

const inputText_rgb = document.getElementById("input-rgb")
const change_rgb = document.getElementById("change-rgb")

const input_Text = document.getElementById("input-text")
const change_text = document.getElementById("change-text")

button.addEventListener('click',clickBtn)
change_rgb.addEventListener('click',inputColor_rgb)
change_text.addEventListener('click',inputColor_text)

function clickBtn(){
    const randColor = "rgb("+ Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+")"

    document.body.style.backgroundColor = randColor
    nameMain.textContent = randColor
}

function inputColor_rgb(){
    const value = inputText_rgb.value
    document.body.style.backgroundColor = "rgb("+value+")"
    nameMain.textContent = "rgb("+value+")"
}

function inputColor_text(){
    const value = input_Text.value
    document.body.style.backgroundColor = value.toString()
    nameMain.textContent = value.toString()
}