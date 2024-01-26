var modal = document.getElementById("myModal");


var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
  modal.style.display = "none";
}


let imgs = document.getElementsByClassName("imgs");
for(let i =0; i < imgs.length; i++){
    imgs[i].onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
}