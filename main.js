window.addEventListener("DOMContentLoaded", main)


function main() {
    startslideshow()
}


function startslideshow() {
    setInterval(changeImage, 2000)
}


function changeImage(){
    const images = document.querySelectorAll(".slideshow img")
     for(let i = 0; i < images.length; i++) {
        const currentimage = images[i]

        let nextindex
        if (i === images.length - 1) {
            nextindex = 0
        }else {
            nextindex = i + 1
        } 
        
        const nextimage = images[nextindex]

        if (currentimage.classList.contains("visible")) {
            currentimage.classList.remove("visible")
            nextimage.classList.add("visible")
            break
        }
     }

}