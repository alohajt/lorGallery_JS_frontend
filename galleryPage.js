// loop many pictues
console.log("ues")
const imageContainer = document.querySelector(".container")
const imageArea = document.querySelector(".img-area")

function loopImages(){
   
    for(let i = 0; i < 4; i++) {
        a=[0-9]
        const newImage = document.createElement("img")
        newImage.src = `../lorGallery/set1-lite-en_us/en_us/img/cards/01DE00${i}.png`
        newImage.id = 
        imageArea.append(newImage)


    }
   
}
loopImages()
