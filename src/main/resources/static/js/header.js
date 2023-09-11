let imageHeight;

window.addEventListener("DOMContentLoaded", function(){
  getImageHeight();
});

window.addEventListener("resize",function(){
  getImageHeight();
});

// 스크롤시 header 컬러 변경
window.addEventListener("scroll", () =>{
  let header = document.querySelector(".headWrapper");
  let scrollLocation = document.documentElement.scrollTop;
  // console.log("scrollLocation : ",scrollLocation);
  // console.log("imageHeight : ",imageHeight);

  if(scrollLocation >= imageHeight){
    header.classList.add("headColor");
  }else if(scrollLocation < imageHeight){
    header.classList.remove("headColor");
  }
});

// background_image 높이 찾기
function getImageHeight(){
  let backgroundImage = document.getElementById("background_image");
  imageHeight = backgroundImage.getBoundingClientRect().bottom;
}