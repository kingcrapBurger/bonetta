// 공통변수
let sec1 = document.getElementById("sec1");
let backgroundImage;
let MainImageHeight;
let c_width;
let c_height;

// onload
window.onload = function () {
  deviceDimensions();
  MainImageHeight = getParentHeight();
  adjustParentHeight(MainImageHeight);
  headerScroll();

  if (c_width < 601) {
    sec1resize(MainImageHeight);
  }
};
// resize
window.addEventListener("resize", function () {
  deviceDimensions();
  MainImageHeight = getParentHeight();
  adjustParentHeight(MainImageHeight);

  if (c_width < 601) {
    sec1resize(MainImageHeight);
  }
});
//scroll
window.addEventListener("scroll", headerScroll);

// 모바일 sec1 디자인 변경
// 테스트중
function sec1resize(element) {
  // let header = document.getElementsByClassName("headWrapper")[0];
  // let headerHeight = window.getComputedStyle(header).height;
  // let titleHeight = element - headerHeight;
  // let sec1Part = document.getElementsByClassName("sec1Part")[0];
  // sec1Part.style.height = (parseInt(titleHeight)) + "px";
  // console.log("title.style.height : " + sec1Part.style.height);
  sec1.style.height = `${element + 200}px`;
}

// 디바이스 크기 구하기
function deviceDimensions() {
  c_width = document.documentElement.clientWidth;
  c_height = document.documentElement.clientHeight;
  console.log("c_height", c_height);
}
// 부모 요소의 높이 구하기
function getParentHeight() {
  backgroundImage = document.getElementById("background_image");
  let imageHeight = backgroundImage.height;

  return imageHeight;
  // sec1.style.height = `${imageHeight}px`;
}
// 부모 요소의 높이 조정
function adjustParentHeight(element) {
  sec1.style.height = `${element}px`;
}

function headerScroll() {
  // let scrollTop = window.scrollY;
  // let winBottom = scrollTop + window.innerHeight;

  // let actReady1Elements = Array.from(document.querySelectorAll(".fadeReady1"));
  // let actReady2Elements = Array.from(document.querySelectorAll(".fadeReady2"));
  let fadeReadyBox = Array.from(document.querySelectorAll(".fadeReadyBox"));

  fadeReadyBox.forEach((element) => {
    // let location = element.offsetTop;
    let childrenNodes = element.children;
    let lect = element.getBoundingClientRect();
    let location = lect.bottom;
    // console.log("location :" + location);
    // console.log("winBottom :" + winBottom);
    if (c_height > location) {
      element.classList.add("scaling");
      for (i = 0; i < childrenNodes.length; i++) {
        let child = childrenNodes[i];
        child.classList.add("fadeIn" + (i + 1));
      }
      // element.classList.remove("fadeReady1");
    }
  });
  // actReady2Elements.forEach((element) => {
  //   // let location = element.offsetTop;
  //   let lect = element.getBoundingClientRect();
  //   let location = lect.top;
  //   console.log("location :" + location);
  //   console.log("c_height :" + c_height);
  //   if (c_height > location + 100) {
  //     element.classList.add("fadeIn2");
  //     // element.classList.remove("fadeReady2");
  //   }
  // });
}

