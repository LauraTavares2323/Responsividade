function updateSizeInfo(){
    document.getElementById("sizeInfo").textContent = `Largura da janela: ${window.innerWidth}px`
}

window.addEventListener("resize", updateSizeInfo)
updateSizeInfo()


