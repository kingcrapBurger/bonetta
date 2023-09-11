// 공통변수
let sec1 = document.getElementById("sec1");
let MainImageHeight;
let c_width;

// onload 실행시
window.onload = function () {
  deviceWidth();
  // MainImageHeight = getParentHeight();
  // adjustParentHeight(MainImageHeight);
  // if (c_width < 601) {
  //   sec1resize(MainImageHeight);
  // }
  if(c_width < 601){
    console.log("sec1resize 실행");
    // sec1resize();
  }
};

// resize 실행시
window.addEventListener("resize", function () {
  deviceWidth();
  // changeImg(c_width);
  if(c_width < 601){
    console.log("sec1resize 실행");
    // sec1resize();
  }
});

// 디바이스 너비 구하기
function deviceWidth() {
  c_width = document.documentElement.clientWidth;
}
function getSec1height(){
  let sec1 = document.querySelector("#sec1");
  sec1height = sec1.clientHeight;
}

// 모바일화면 사진 교체
// function changeImg(element) {
//   let backgroundImage = document.getElementById("background_image");
//   let newSrc;
//   if (element < 601) {
//     newSrc = "/images/2.treat/P2_1_mobile.jpg";
//   } else {
//     newSrc = "/images/2.treat/P2_1.png";
//   }
//   backgroundImage.src = newSrc;
//   console.log("backgroundImage 경로: ", backgroundImage.src);

//   // 메인화면사진 로딩 완료후 실행
//   backgroundImage.onload = function () {
//     MainImageHeight = getParentHeight();
//     adjustParentHeight(MainImageHeight);
//     if (c_width < 601) {
//       sec1resize(MainImageHeight);
//     }
//   }
// }

// // 부모 요소의 높이 구하기
// function getParentHeight() {
//   let backgroundImage = document.getElementById("background_image");
//   let imageHeight = backgroundImage.style.height;
//   console.log("imageHeight 는 = ", imageHeight);
//   return imageHeight;
//   // sec1.style.height = `${imageHeight}px`;
// }

// // 부모 요소의 높이 조정
// function adjustParentHeight(element) {
//   sec1.style.height = `${element}px`;
//   let clickBox = document.querySelector("#clickBox");
//   clickBox.style.height = `${element}px`;
// }


// 모바일 sec1 디자인 변경
function sec1resize() {
  sec1.style.height = `${sec1height + 150}px`;
}


// body2 슬라이드 처리
let underLine = Array.from(document.querySelectorAll(".underLine"));

let slidesContainer = document.getElementById("slideContainer");
let slide = document.querySelector(".slide");

underLine.forEach((element, index) => {
  element.addEventListener("click", function (event) {

    // 언더라인 버튼 애니메이션
    if (element.classList.contains("enlarge")) {
      event.preventDefault();
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


//  comparison slider

// let scrollers = document.querySelectorAll(".scroller")
// for(var i=0;i<scrollers.length;i++){
//   scrollers[i].addEventListener("mousedown",function(){
//     active = true;
//     this.classList.add("scrolling");
//     eventTarget = this;
//     console.log("down works")
//   });
// }

let active = false;
var eventTarget;

// drag on
let scroller = Array.from(document.querySelectorAll(".scroller"));
scroller.forEach((element) => {
  // element.addEventListener("mousedown", function (event) {
  //   console.log("mousedown works");
  //   let parentElm = event.target.parentElement;
  //   console.log("parentElm : ", parentElm);
  //   console.log("dataset값은 ", parentElm.dataset.pos);
  //   if (parentElm.dataset.pos = "0") {
  //     active = true;
  //     event.target.classList.add("scrolling");
  //     eventTarget = event.target;
  //     console.log("eventTarget : ", eventTarget);
  //   }
  // });
  // element.addEventListener("mousedown", function () {
  //   console.log("mousedown works");
  //   let parentElm = this.parentElement;
  //   console.log("parentElm : ", parentElm);
  //   console.log("dataset값은 ", parentElm.dataset.pos);
  //   if (parentElm.dataset.pos == 0) {
  //     active = true;
  //     this.classList.add("scrolling");
  //     eventTarget = this;
  //     console.log("eventTarget : ", eventTarget);
  //   }
  // });
  // element.addEventListener("touchstart", function () {
  //   console.log("touchstart works");
  //   let parentElm = this.parentElement;
  //   console.log("parentElm : ", parentElm);
  //   console.log("dataset값은 ", parentElm.dataset.pos);
  //   if (parentElm.dataset.pos == 0) {
  //     active = true;
  //     this.classList.add("scrolling");
  //     eventTarget = this;
  //     console.log("eventTarget : ", eventTarget);
  //   }
  // });


  // comparison slider start
  element.addEventListener("mousedown", startComparisonSlider);
  element.addEventListener("touchstart", startComparisonSlider);
});


function startComparisonSlider(event) {
  console.log("mousedown works");
  let parentElm = this.parentElement;
  console.log("parentElm : ", parentElm);
  console.log("dataset값은 ", parentElm.dataset.pos);
  if (parentElm.dataset.pos == 0) {
    active = true;
    this.classList.add("scrolling");
    eventTarget = this;
    console.log("eventTarget : ", eventTarget);
  }
}


// drag and move
document.body.addEventListener('mousemove', function (e) {
  if (!active) return;
  let x = e.pageX;

  x -= eventTarget.parentNode.getBoundingClientRect().left;
  scrollIt(x);
});

document.body.addEventListener('touchmove', function (e) {
  if (!active) return;
  let x = e.changedTouches[0].pageX;

  x -= eventTarget.parentNode.getBoundingClientRect().left;
  scrollIt(x);
});

function scrollIt(x) {
  let transform = Math.max(0, (Math.min(x, eventTarget.parentNode.offsetWidth)));
  eventTarget.parentNode.children[1].style.width = transform + "px";
  eventTarget.style.left = transform - 25 + "px";
}


// comparison slider end
document.body.addEventListener("mouseup", endComparisonSlider);
document.body.addEventListener("mouseleave", endComparisonSlider);
document.body.addEventListener("touchend", endComparisonSlider);
document.body.addEventListener("touchcancel", endComparisonSlider);

function endComparisonSlider() {
  active = false;
  eventTarget.classList.remove('scrolling');
  console.log("endComparisonSlider work");
}




// drag off
// document.body.addEventListener('mouseup', function () {
//   active = false;
//   eventTarget.classList.remove('scrolling');
//   console.log("mouseup work");
// });
// document.body.addEventListener('mouseleave', function () {
//   active = false;
//   eventTarget.classList.remove('scrolling');
//   console.log("mouseleave work");
// });
// document.body.addEventListener('touchend',function(){
//   active = false;
//   eventTarget.classList.remove('scrolling');
//   console.log("touchend work");
// });
// document.body.addEventListener('touchcancel',function(){
//   active = false;
//   eventTarget.classList.remove('scrolling');
//   console.log("touchcancel work");
// });




// carousel 이벤트 start
let carouselList = document.querySelector(".carousel__list");
let carouselItems = document.querySelectorAll(".carousel__item");
let elems = Array.from(carouselItems);

elems.forEach(element => {
  element.addEventListener("click", function (event) {
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
};  // carousel 이벤트 end


// 부모 carousel height 자식에 맞추기
// let beforeHeight;
//  let carouselItem = Array.from(document.querySelectorAll(".carousel__item"));
// carouselItems.forEach(element => {
//   beforeHeight = element.firstElementChild.clientHeight;
//   element.style.height = beforeHeight + "px";
// });
// carouselList.style.height = beforeHeight + "px";












