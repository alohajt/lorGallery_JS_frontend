document.addEventListener('DOMContentLoaded', () => {
    const searchId = new URLSearchParams(window.location.search)
    const id = searchId.get('id')

    //fetch clicked image
    fetch(`http://localhost:3000/images/${id}`)
    .then(response => response.json())
    // .then(console.log)
    .then(image => singleImageData(image))

    function singleImageData(image){
        const imageArea = document.querySelector(".img-area")
        const newImageCard = document.createElement("div")
        newImageCard.innerHTML = `
        <title>${image.name}</title>
        <div class="card">
            <div class="card-image">
            <a href="http://localhost:3001/cardPage.html?id=${image.id}"><img src="${image.url}" alt="##" style="width:80%">
            </div>

            <div class="info-box">
                <ul>Region: ${image.region} </ul>
                <ul>Attack: ${image.attack} </ul>
                <ul>Health: ${image.health} </ul>
                <ul>Cost: ${image.cost} </ul>
                <ul>Description: ${image.description}</ul>
                <ul>Card Type: ${image.cardType}</ul>
            </div>
        </div>

        <form class="comment_form" id="${image.id}-comment_form">
            <input id="comment_input" type="text" name="comment" placeholder="Add Comment"/>
            <input type="submit" value="Submit"/>
        </form>
        <ul class="comments" id="${image.id}-comments"></ul>
        `
        imageArea.append(newImageCard)

        //add new comment(frontend)
        const commentForm = document.getElementById(`${image.id}-comment_form`)
        const commentBody = document.getElementById(`${image.id}-comments`)
        
        commentForm.addEventListener('submit', event => {
            event.preventDefault()
            const formData = new FormData(commentForm)
            const newCommentContent = formData.get("comment")
            newComment = document.createElement("li")
            newComment.innerText = newCommentContent
            commentBody.append(newComment)

            //add new comment (backend)
                // fetch(commentsURL, {
                //     method:"POST",
                //     headers:{'Content-Type': 'application/json'},
                //     body:JSON.stringify({
                //         image_id: imageId,
                //         content: newCommentContent
                //     })
                // })
                //===
        })
    }

})