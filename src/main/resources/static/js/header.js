let imageHeight;

window.onload = function(){
  getImageHeight()
}

window.addEventListener("resize",function(){
  getImageHeight()
});

// 스크롤시 header 컬러 변경
window.addEventListener("scroll", () =>{
  let header = document.querySelector(".headWrapper");
  // let scrollLocation = header.scrollTop;
  let backgroundImage = document.getElementById("background_image");
  // let scrollLocation = backgroundImage.scrollTop;
  document.documentElement.scrollTop;
  console.log("scrollLocation : ",scrollLocation);
  console.log("imageHeight : ",imageHeight);

  // let headerBottom = header.getBoundingClientRect().bottom;
  // console.log("headerBottom : ",headerBottom);
  // if(headerBottom >= imageHeight){
  //   header.classList.add("hahaha");
  // }else if(headerBottom < imageHeight){
  //   header.classList.remove("hahaha");
  // }
});

// background_image 높이 찾기
function getImageHeight(){
  let backgroundImage = document.getElementById("background_image");
  // imageHeight = backgroundImage.height;
  imageHeight = backgroundImage.getBoundingClientRect().bottom;
}