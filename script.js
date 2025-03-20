function updateSizeInfo(){
    let width = window.innerHeight
    document.getElementById("sizeInfo").textContent = `Largura da janela ${width}px`

    let container = document.getElementById("container")
    let inputs = document.getElementById("input, select")

    if(width < 600){
        container.style.backgroundColor = "#222"
        container.style.width = "80%"
        inputs.forEach(input => {
            input.style.width = "70%"
            input.style.padding = "6px"
        })
    } else {
        container.style.backgroundColor = "#333"
        container.style.width = "85%"
        inputs.forEach(input => {
            input.style.width = "100%"
            input.style.padding = "8px"
        })
    }
}

window.addEventListener(updateSizeInfo)
updateSizeInfo()