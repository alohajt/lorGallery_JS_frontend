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
            const newImage = document.createElement("img")
            // newImage.src = image.url
            // newImage.id = image.id
            newImageCard.innerHTML = `
            <div class="card">
                <p class="card-title"><a href='#'> card </a></p>
                <div class="card-image">
                    <img src="${image.url}" alt="##" style="width:60%">
                </div>
                <div class="card-box">
                    <ul>Region: image.region </ul>
                    <ul>"attack": 0</ul>
                </div>
            </div>

            <form id="comment_form">
                <input id="comment_input" type="text" name="comment" placeholder="Add Comment"/>
                <input type="submit" value="Submit"/>
            </form>
            <ul id="comments">

            </ul>
            `
            imageArea.append(newImageCard)

            //add new comment
            const commentForm = document.getElementById("comment_form")
            const commentBody = document.getElementById("comments")

            commentForm.addEventListener('submit', event => {
                event.preventDefault()
                const formData = new FormData(commentForm)
                const newCommentContent = formData.get("comment")
                newComment = document.createElement("li")
                newComment.innerText = newCommentContent
                commentBody.append(newComment)
            })
            
        })
    }

})