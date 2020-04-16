<div class="card">
    <div class="card-image">
    <!-- 触发弹窗 - 图片改为你的图片地址 -->
    <a href="http://www.php.cn"><img src="${image.url}" alt="${image.name}" style="width:80%">
    </div>
    <!-- 弹窗 -->
    <div id="myModal" class="modal">
 
    <!-- 关闭按钮 -->
    <span class="close" onclick="document.getElementById('myModal').style.display='none'">&times;</span>
    <!-- 弹窗内容 -->
    <img class="modal-content" id="${image.id}">
    <div class="card-box">
        <ul>Region: ${image.region} </ul>
        <ul>Attack: ${image.attack} </ul>
        <ul>Health: ${image.health} </ul>
        <ul>Cost: ${image.cost} </ul>

    </div>
</div>

<form class="comment_form" id="${image.id}-comment_form">
    <input id="comment_input" type="text" name="comment" placeholder="Add Comment"/>
    <input type="submit" value="Submit"/>
</form>
<ul class="comments" id="${image.id}-comments">

</ul>


 

 

