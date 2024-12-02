function darkmode(){
    
    const html = document.getElementById("Html")

    if (html.className == "dark"){
        html.className = ''
    }
    else{
        html.className = "dark"
    }

    const button = document.getElementById("darkmode-btn")

    if (button.innerHTML === `<img class="w-8" src="dark.svg">`){
        button.innerHTML = `<img class="w-8" src="light.svg">`
    }
    else{
        button.innerHTML = `<img class="w-8" src="dark.svg">`
        console.log(button.innerHTML)
    }

}