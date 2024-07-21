
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

function inputReview(){
  let reviewTitle = ['Samuel6900 - ☆', 'Kaj8371 - ☆☆☆☆', 'Robopro33 - ☆☆☆', 'XxWheelSeleniumxX - ☆','Michelle_Obama9291 - ☆☆','Garry_from_Gmod - ☆☆☆☆☆'];
  let reviewContent = ['Ik vindt het niet een mooie website', 'Verschikkelijk episch en cool voor op mijn insta!', 'Het is het geld wel waard. Zeker een aanrader!', 'Dit is niet wat ik verwacht had en het was heel kort.', 'Het was niet wat ik verwacht had', 'Wauw echt gewoon wauw! Super leuk en leuk voor alle leeftijden']
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