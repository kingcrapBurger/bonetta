// 공통변수
let sec1 = document.getElementById("sec1");
let MainImageHeight;
let c_width;

// onload
window.onload = function () {
  deviceWidth();
  changeImg(c_width);
  MainImageHeight = getParentHeight();
  adjustParentHeight(MainImageHeight);
  if (c_width < 601) {
    sec1resize(MainImageHeight);
  }
  // headerScroll();

};
// resize
window.addEventListener("resize", function () {
  deviceWidth();
  changeImg(c_width);
  MainImageHeight = getParentHeight();
  adjustParentHeight(MainImageHeight);
  if (c_width < 601) {
    sec1resize(MainImageHeight);
  }

});
// 모바일화면 사진 교체
function changeImg(element) {
  backgroundImage = document.getElementById("background_image");
  if (element < 601) {
    backgroundImage.src = "/images/2.treat/P2_1_mobile.jpg";
  } else {
    backgroundImage.src = "/images/2.treat/P2_1.png";
  }
}
//scroll
// window.addEventListener("scroll", headerScroll);

// 모바일 sec1 디자인 변경
function sec1resize(element) {
  sec1.style.height = `${element + 150}px`;
}

// 디바이스 너비 구하기
function deviceWidth() {
  c_width = document.documentElement.clientWidth;
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
  let clickBox = document.querySelector("#clickBox");
  clickBox.style.height = `${element}px`;
}

// function headerScroll() {
//   let scrollTop = window.scrollY;
//   let winBottom = scrollTop + window.innerHeight;

//   let actReady1Elements = document.querySelectorAll(".fadeReady1");
//   let actReady2Elements = document.querySelectorAll(".fadeReady2");
//   actReady1Elements.forEach((element) => {
//     let location = element.offsetTop;
//     console.log("location :" + location);
//     console.log("winBottom :" + winBottom);
//     if (winBottom - 30 > location) {
//       element.classList.add("fadeIn1");
//       // element.classList.remove("fadeReady1");
//     }
//   });
//   actReady2Elements.forEach((element) => {
//     let location = element.offsetTop;
//     if (winBottom - 30 > location) {
//       element.classList.add("fadeIn2");
//       // element.classList.remove("fadeReady2");
//     }
//   });

// body2 슬라이드 처리
let underLine = Array.from(document.querySelectorAll(".underLine"));

let slidesContainer = document.getElementById("slideContainer");
let slide = document.querySelector(".slide");

underLine.forEach((element, index) => {
  element.addEventListener("click", function (event) {

    // 언더라인 버튼 애니메이션
    if (element.classList.contains("enlarge")) {
      return false;
    } else {
      for (var i=0; i < underLine.length; i++) {
        underLine[i].classList.remove("enlarge");
      }
      element.classList.add("enlarge");
      
      //슬라이드 애니메이션
      // var eleIndex = getIndex(element);
      let slideWidth = slide.clientWidth;
      console.log("slideWidth : "+ slideWidth);
      slidesContainer.style.left = ("-" + slideWidth * index) + "px";
      console.log("slidesContainer.style.left : "+ slidesContainer.style.left);

      // querySelector(".slideContainer").sytle.left = eleIndex * silde.Width;

    }

    // let id = event.currentTarget.id;
    // let element = event.currentTarget;
    // let siblings = element.parentElement.children;
    // console.log("element.parentElement ", element.parentElement);
    // console.log("siblings ", siblings);

    // let targetIndex = parseInt(id.replace("line", "")) - 1;
    // // 이전 요소의 인덱스 값
    // let currentIndex = getIndex(element);
    // console.log("targetIndex 는 ", targetIndex);
    // console.log("currentIndex 는 ", currentIndex);

    // // 슬라이드 이동
    // let slideWidth = slide.clientWidth;
    // slidesContainer.style.width = slideWidth*3;

    // slidesContainer.style.left = underLine.indexOf(selectedElement)*slideWidth;

    // selectedElement = element;

    // // 선택요소 확대하기
    // for (i = 0; i < siblings.length; i++) {
    //   if (siblings[i].classList.contains("enlarge")) {
    //     siblings[i].classList.remove("enlarge");
    //     siblings[i].firstChild.classList.remove("enlargeLogo");
    //   }
    // }

    // element.classList.add("enlarge");
    // element.firstChild.classList.add("enlargeLogo");
  }); // event 종료
});

// 메인이미지 clickBox 처리
let hotspot = document.querySelectorAll(".hotspot");

hotspot.forEach(function (element) {
  element.addEventListener("click", function () {
    smallBtn(element);
  });
});

function smallBtn(element) {
  if (element.classList.contains("btnFocus")) {
    element.innerHTML = "";
    element.classList.toggle("btnFocus");
  } else {
    hotspot.forEach(function (element) {
      element.innerHTML = "";
      element.classList.remove("btnFocus");
    });
    let content = element.dataset["content"];
    element.innerHTML = content;
    element.classList.add("btnFocus");
  }
}

// carousel item 처리
let carouselList = document.querySelector(".carousel__list");
let carouselItems = document.querySelectorAll(".carousel__item");
let elems = Array.from(carouselItems);

carouselList.addEventListener("click", function (event) {
  var newActive = event.target.closest(".carousel__item");
  console.log(newActive);
  var isItem = newActive.closest(".carousel__item");
  console.log("isItem :", isItem);
  update(newActive);
});

let update = function (newActive) {
  let newActivePos = newActive.dataset.pos;
  console.log("newActivePos :", newActivePos);

  let current = elems.find((elem) => elem.dataset.pos == 0);
  let prev = elems.find((elem) => elem.dataset.pos == -1);
  let next = elems.find((elem) => elem.dataset.pos == 1);

  [current, prev, next].forEach((item) => {
    var itemPos = item.dataset.pos;

    item.dataset.pos = getPos(itemPos, newActivePos);
  });
};

let getPos = function (current, active) {
  let diff = current - active;
  console.log("diff :", diff);

  if (Math.abs(current - active) > 1) {
    return -current;
  }

  return diff;
};



