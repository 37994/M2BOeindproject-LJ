

//Img zoom

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


//Random revieuw

function inputReview(){
  let reviewTitle = ['Samuel6900 - ☆', 'Kaj8371 - ☆☆☆☆', 'Robopro33 - ☆☆☆', 'XxWheelSeleniumxX - ☆','Michelle_Obama9291 - ☆☆','Garry_from_Gmod - ☆☆☆☆☆'];
  let reviewContent = ["I don't think it's a pretty website", 'really epic and cool for my insta!', "It's worth the money though. Definitely recommended!", 'This is not what I expected and it was very short.', "It wasn't what I expected.", 'Wow really just wow! Super fun and fun for all ages.']
  let reviewTags = document.getElementsByClassName("rtext")
  let reviewNames = document.getElementsByClassName("rtitle")
 
  for (let i = 0; i < 3; i++) { // Genereer 4 random reviews
      let number = Math.floor(Math.random() * reviewTitle.length);
      let pick1 =  reviewTitle[number];
      let pick2 =  reviewContent[number];
      reviewNames[i].innerText = pick1
      reviewTags[i].innerText = pick2
      reviewTitle.splice(number, 1);
      reviewContent.splice(number, 1);
  }
}
inputReview();