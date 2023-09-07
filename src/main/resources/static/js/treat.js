// 공통변수
let sec1 = document.getElementById("sec1");
let MainImageHeight;
let c_width;

// onload 실행시
window.onload = function () {
  deviceWidth();
  changeImg(c_width);
};

// resize 실행시
window.addEventListener("resize", function () {
  deviceWidth();
  changeImg(c_width);
});

// 디바이스 너비 구하기
function deviceWidth() {
  c_width = document.documentElement.clientWidth;
}

// 모바일화면 사진 교체
function changeImg(element) {
  let backgroundImage = document.getElementById("background_image");
  let newSrc;
  if (element < 601) {
    newSrc = "/images/2.treat/P2_1_mobile.jpg";
  } else {
    newSrc = "/images/2.treat/P2_1.png";
  }
  backgroundImage.src = newSrc;

  // 메인화면사진 로딩 완료후 실행
  backgroundImage.onload = function () {
    MainImageHeight = getParentHeight();
    adjustParentHeight(MainImageHeight);
    if (c_width < 601) {
      sec1resize(MainImageHeight);
    }
  }
}

// 부모 요소의 높이 구하기
function getParentHeight() {
  let backgroundImage = document.getElementById("background_image");
  let imageHeight = backgroundImage.height;
  // console.log("imageHeight 는 = ", imageHeight);
  return imageHeight;
  // sec1.style.height = `${imageHeight}px`;
}

// 부모 요소의 높이 조정
function adjustParentHeight(element) {
  sec1.style.height = `${element}px`;
  let clickBox = document.querySelector("#clickBox");
  clickBox.style.height = `${element}px`;
}

// 모바일 sec1 디자인 변경
function sec1resize(element) {
  sec1.style.height = `${element + 150}px`;
}


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
      for (var i = 0; i < underLine.length; i++) {
        underLine[i].classList.remove("enlarge");
      }
      element.classList.add("enlarge");

      //슬라이드 애니메이션
      // var eleIndex = getIndex(element);
      let slideWidth = slide.clientWidth;
      slidesContainer.style.left = ("-" + slideWidth * index) + "px";
      // console.log("slideWidth : " + slideWidth);
      // console.log("slidesContainer.style.left : " + slidesContainer.style.left);

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


// carousel 이벤트
let carouselList = document.querySelector(".carousel__list");
let carouselItems = document.querySelectorAll(".carousel__item");
let elems = Array.from(carouselItems);

// carouselList.addEventListener("click", function (event) {
//   var newActive = event.target.closest(".carousel__item");
//   console.log(newActive);
//   update(newActive);
// });
elems.forEach(element =>{
  element.addEventListener("click", function(event){
    // console.log("event.target : ",this);
    update(this)
  });
});

let update = function (newActive) {
  let newItemPos = newActive.dataset.pos;
  // console.log("newItemPos :", newItemPos);

  let current = elems.find((elem) => elem.dataset.pos == 0);
  let prev = elems.find((elem) => elem.dataset.pos == -1);
  let next = elems.find((elem) => elem.dataset.pos == 1);

  [current, prev, next].forEach((item) => {
    var oldItemPos = item.dataset.pos;

    item.dataset.pos = getPos(oldItemPos, newItemPos);
  });
};

let getPos = function (current, selected) {
  let diff = current - selected;
  // console.log("diff :", diff);

  if (Math.abs(current - selected) > 1) {
    return -current;
  }

  return diff;
};  // // carousel 이벤트 end
let beforeHeight;
//  let carouselItem = Array.from(document.querySelectorAll(".carousel__item"));
 carouselItems.forEach(element =>{
  beforeHeight = element.firstElementChild.clientHeight;
  element.style.height = beforeHeight+"px";
 });
 carouselList.style.height = beforeHeight+"px";

//  comparison slider

// I hope this over-commenting helps. Let's do this!
// Let's use the 'active' variable to let us know when we're using it
let active = false;

// First we'll have to set up our event listeners
// We want to watch for clicks on our scroller
document.querySelector('.scroller').addEventListener('mousedown',function(){
  active = true;
  // Add our scrolling class so the scroller has full opacity while active
  document.querySelector('.scroller').classList.add('scrolling');
});
// We also want to watch the body for changes to the state,
// like moving around and releasing the click
// so let's set up our event listeners
document.body.addEventListener('mouseup',function(){
  active = false;
  document.querySelector('.scroller').classList.remove('scrolling');
});
document.body.addEventListener('mouseleave',function(){
  active = false;
  document.querySelector('.scroller').classList.remove('scrolling');
});

// Let's figure out where their mouse is at
document.body.addEventListener('mousemove',function(e){
  if (!active) return;
  // Their mouse is here...
  let x = e.pageX;
  // but we want it relative to our wrapper
  x -= document.querySelector('.wrapper').getBoundingClientRect().left;
  // Okay let's change our state
  scrollIt(x);
});

// Let's use this function
function scrollIt(x){
    let transform = Math.max(0,(Math.min(x,document.querySelector('.carousel__item').offsetWidth)));
    document.querySelector('.after').style.width = transform+"px";
    document.querySelector('.scroller').style.left = transform-25+"px";
}

// Let's set our opening state based off the width, 
// we want to show a bit of both images so the user can see what's going on
scrollIt(150);

// And finally let's repeat the process for touch events
// first our middle scroller...
document.querySelector('.scroller').addEventListener('touchstart',function(){
  active = true;
  document.querySelector('.scroller').classList.add('scrolling');
});
document.body.addEventListener('touchend',function(){
  active = false;
  document.querySelector('.scroller').classList.remove('scrolling');
});
document.body.addEventListener('touchcancel',function(){
  active = false;
  document.querySelector('.scroller').classList.remove('scrolling');
});




