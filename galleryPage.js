document.addEventListener('DOMContentLoaded', () => {

    // loop many pictues
    console.log("ues")
    const imageContainer = document.querySelector(".container")
    const imageArea = document.querySelector(".img-area")

    //fetch all images
    fetch('http://localhost:3000/images')
    .then(response => response.json())
    .then(images => getImageData(images))

    function getImageData(images){
        
        images.forEach(image => {
            const newImageCard = document.createElement("div")
            // const newImage = document.createElement("img")
            // newImage.src = image.url
            // newImage.id = image.id
            newImageCard.innerHTML = `
            <div class="card">
                <div class="card-image">
                    <a href="http://localhost:3001/cardPage.html?id=${image.id}"><img src="${image.url}" alt="##" style="width:80%">
                </div>
            </div>
            `
            imageArea.append(newImageCard)

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

                
            // })
            
        })
    }

})