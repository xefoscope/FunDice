function gameEvent() {
  var randomNumOne=Math.floor(Math.random()*6)+1;
  var randomImgOne="images/dice"+randomNumOne+".png";

  var randomNumTwo=Math.floor(Math.random()*6)+1;
  var randomImgTwo="images/dice"+randomNumTwo+".png";

  var img1=document.querySelectorAll("img")[0];
  img1.setAttribute("src", randomImgOne);

  var img2=document.querySelectorAll("img")[1];
  img2.setAttribute("src", randomImgTwo);

  if(randomNumOne>randomNumTwo){
    document.querySelector("h1").innerHTML="Player One Wins!"
  }else if (randomNumTwo>randomNumOne) {
    document.querySelector("h1").innerHTML="Player Two Wins!"
  }else {
    document.querySelector("h1").innerHTML="Draw!"
  }


}

document.querySelector("button").addEventListener("click", gameEvent);
