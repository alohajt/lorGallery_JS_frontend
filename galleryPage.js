document.addEventListener('DOMContentLoaded', () => {

    // loop many pictues
    console.log("lets do it")
    const imageContainer = document.querySelector(".container")
    const imageArea = document.querySelector(".img-area")

    //fetch all images
    fetch('http://localhost:3000/images')
    .then(response => response.json())
    .then(images => getImageData(images))

    function getImageData(images){
        //sort images by cost
        images.sort(function(a,b){
            return +a.cost - +b.cost
        })

        images.forEach(image => {
            const newImageCard = document.createElement("div")
            newImageCard.innerHTML = `
            
            <div class="card">
                <div class="card-image">
                    <a href="http://localhost:3001/cardPage.html?id=${image.id}"><img id="${image.id}" src="${image.url}" alt="${image.name}"  style="width:80%">
                </div>
            </div>
            `
            imageArea.append(newImageCard)
        })

        //filter Demacia
        const demaciaButton = document.getElementById("demacia-button")
        demaciaButton.addEventListener('click', () => filterDermacia(images))

        function filterDermacia(images){
            // console.log(images)
            console.log("Demacia working")
            images.filter(function(image){
                // console.log(image.region)
                if (image.region !== "Demacia"){
                    // console.log(image)
                    // console.log("remove")
                    let removeImage = document.getElementById(`${image.id}`)
                    // console.log(`"${image.id}"`)
                    // console.log(removeImage)
                    // removeImage.remove()
                    removeImage.style.display = "none"
                    // const newDemaciaCard = document.createElement("div")
                    // newDemaciaCard.innerHTML = `
                    // <div class="card">
                    //     <div class="card-image">
                    //         <a href="http://localhost:3001/cardPage.html?id=${image.id}"><img src="${image.url}" alt="${image.name}" style="width:80%">
                    //     </div>
                    // </div>
                    // `
                    // imageArea.append(newDemaciaCard)                    
                }
            }) 
        }

        //filter Ionia cards
        const ioniaButton = document.getElementById("ionia-button")
        ioniaButton.addEventListener('click', () => filterIonia(images))

        function filterIonia(images){
            console.log("Ionia working")
            images.filter(function(image){
                if (image.region !== "Ionia"){
                    const removeImage = document.getElementById(`${image.id}`)
                    // console.log(`"${image.id}"`)
                    // console.log(removeImage)
                    removeImage.style.display = "none"    
                }
            }) 
        }
        //======
        //freljord filter
        const freljordButton = document.getElementById("freljord-button")
        freljordButton.addEventListener('click', () => filterFreljord(images))

        function filterFreljord(images){
            console.log("Freljord working")
            images.filter(function(image){
                if (image.region !== "Freljord"){
                    const removeImage = document.getElementById(`${image.id}`)
                    // console.log(`"${image.id}"`)
                    // console.log(removeImage)
                    removeImage.style.display = "none"    
                }
            }) 
        }

        //Piltover & Zaun filter piltoverZaun
        const piltoverZaunButton = document.getElementById("piltoverZaun-button")
        piltoverZaunButton.addEventListener('click', () => filterPiltoverZaun(images))

        function filterPiltoverZaun(images){
            console.log("PiltoverZaun working")
            images.filter(function(image){
                if (image.region !== "Piltover & Zaun"){
                    const removeImage = document.getElementById(`${image.id}`)
                    // console.log(`"${image.id}"`)
                    // console.log(removeImage)
                    removeImage.style.display = "none"    
                }
            }) 
        }
        //Noxus filter noxus
        const noxusButton = document.getElementById("noxus-button")
        noxusButton.addEventListener('click', () => filterNoxus(images))

        function filterNoxus(images){
            console.log("Noxus working")
            images.filter(function(image){
                if (image.region !== "Noxus"){
                    const removeImage = document.getElementById(`${image.id}`)
                    // console.log(`"${image.id}"`)
                    // console.log(removeImage)
                    removeImage.style.display = "none"    
                }
            }) 
        }

        //Shadow Isles filter ShadowIsles
        const shadowIslesButton = document.getElementById("shadow-isles-button")
        shadowIslesButton.addEventListener('click', () => filterShadowIsles(images))

        function filterShadowIsles(images){
            console.log("ShadowIsles working")
            images.filter(function(image){
                if (image.region !== "Shadow Isles"){
                    const removeImage = document.getElementById(`${image.id}`)
                    // console.log(`"${image.id}"`)
                    // console.log(removeImage)
                    removeImage.style.display = "none"    
                }
            }) 
        }

        //all cost filter
        //cost 0 filter
        const cost0Button = document.getElementById("cost-0")
        cost0Button.addEventListener('click', () => cost0Filter(images))
        function cost0Filter(images){
            images.filter(image => {
                if (image.cost !== "0"){
                    const removeImage = document.getElementById(`${image.id}`)
                    removeImage.style.display = "none"    
                }
            })
        }

        
        //cost 1 filter
        const cost1Button = document.getElementById("cost-1")
        cost1Button.addEventListener('click', () => cost1Filter(images))
        function cost1Filter(images){
            images.filter(image => {
                if (image.cost !== "1"){
                    const removeImage = document.getElementById(`${image.id}`)
                    removeImage.style.display = "none"    
                }
            })
        } 

        //cost 2 filter
        const cost2Button = document.getElementById("cost-2")
        cost2Button.addEventListener('click', () => cost2Filter(images))
        function cost2Filter(images){
            images.filter(image => {
                if (image.cost !== "2"){
                    const removeImage = document.getElementById(`${image.id}`)
                    removeImage.style.display = "none"    
                }
            })
        } 

        //cost 3 filter
        const cost3Button = document.getElementById("cost-3")
        cost3Button.addEventListener('click', () => cost3Filter(images))
        function cost3Filter(images){
            images.filter(image => {
                if (image.cost !== "3"){
                    const removeImage = document.getElementById(`${image.id}`)
                    removeImage.style.display = "none"    
                }
            })
        } 
        //cost 4 filter
        const cost4Button = document.getElementById("cost-4")
        cost4Button.addEventListener('click', () => cost4Filter(images))
        function cost4Filter(images){
            images.filter(image => {
                if (image.cost !== "4"){
                    const removeImage = document.getElementById(`${image.id}`)
                    removeImage.style.display = "none"    
                }
            })
        }
        //cost 5 filter
        const cost5Button = document.getElementById("cost-5")
        cost5Button.addEventListener('click', () => cost5Filter(images))
        function cost5Filter(images){
            images.filter(image => {
                if (image.cost !== "5"){
                    const removeImage = document.getElementById(`${image.id}`)
                    removeImage.style.display = "none"    
                }
            })
        }

        //clear filter
        const clearButton = document.querySelector(".clear-filter")
        clearButton.addEventListener('click', () => showAllImages(images))

        const clearButton2 = document.querySelector(".clear-filter-2")
        clearButton2.addEventListener('click', () => showAllImages(images))

        function showAllImages(images){
            images.forEach(image => {
                const showImage = document.getElementById(`${image.id}`)
                showImage.style.display = ""
            })
        }
        //======

        //search card
        const searchForm = document.querySelector(".search-form")
        searchForm.addEventListener('submit', ()=> searchCard(images))

        function searchCard(images){
            event.preventDefault()
            const formData = new FormData(searchForm)
            const searchInput = formData.get("search-card")
            // console.log(searchInput.toLowerCase())
            images.filter(image => {
                searchInputLowcase = searchInput.toLowerCase()
                imageNameLowcase = image.name.toLowerCase()
                if (!imageNameLowcase.includes(searchInputLowcase) ){
                    const removeImage = document.getElementById(`${image.id}`)
                    removeImage.style.display = "none"
                }
            })
        }
                

        
    












            //add new comment(frontend)
            // const commentForm = document.getElementById(`${image.id}-comment_form`)
            // const commentBody = document.getElementById(`${image.id}-comments`)

            // commentForm.addEventListener('submit', event => {
            //     event.preventDefault()
            //     const formData = new FormData(commentForm)
            //     const newCommentContent = formData.get("comment")
            //     newComment = document.createElement("li")
            //     newComment.innerText = newCommentContent
            //     commentBody.append(newComment)
    }

})