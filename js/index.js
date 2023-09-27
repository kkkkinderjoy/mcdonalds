//변수 설정
const $logo = document.querySelector(".logo-img");
const $aside =document.querySelector(".aside");
const $nav = document.querySelectorAll(".nav ul");
const $subMenu = document.querySelector(".submenu");
const $subWrap =document.querySelector(".submenu .submenu-wrap");
const $topButton= document.querySelector(".aside .top");

//스크롤시 이벤트 추가
document.addEventListener("scroll", function(){
  let pos = window.scrollY;
  if(pos >= 140){
    $logo.style.height= "45px";
    $logo.style.margin="-10px 0px";
    document.querySelector(".header").classList.add("on")
    document.querySelector(".header .nav").classList.add("on")
    $subMenu.style.marginTop="-60px"
    document.querySelectorAll(".nav ul li").forEach((e,i)=>{
      document.querySelectorAll(".nav ul li")[i].classList.add("on")
    })
  }else{
    $logo.style.height= "";
    $logo.style.margin= "";
    document.querySelector(".header").classList.remove("on")
    document.querySelector(".header .nav").classList.remove("on")
    $subMenu.style.marginTop="0px"
    document.querySelectorAll(".nav ul li").forEach((e,i)=>{
      document.querySelectorAll(".nav ul li")[i].classList.remove("on")
      
    })
  }
  if(pos>= 1000){
    $aside.classList.add("on")
  }else{
    $aside.classList.remove("on")
  }
})


$topButton.addEventListener("click",function()
{
    window.scrollTo({
        top:0, 
        behavior: "smooth" 
    })
});

//nav ul  에 마우스를 올리면 서브메뉴 나오게 함
$nav.forEach((e,i)=>{
  e.addEventListener("mouseover",function(){
    $subMenu.classList.add("on")
    $subWrap.classList.add("on")
  })
})
const $img=document.querySelector(".header .header-wrap .logo img");
$img.addEventListener("mouseover",function(){
  $subMenu.classList.remove("on")
  $subWrap.classList.remove("on")
})

const $member=document.querySelector(".header .header-wrap .member");
$member.addEventListener("mouseover",function(){
  $subMenu.classList.remove("on")
  $subWrap.classList.remove("on")
})

 $subUl = document.querySelectorAll(".submenu ul");
 $subUl.forEach((e,i)=>{
   e.addEventListener("mouseover", function(){
    document.querySelectorAll(".nav ul li")[i].classList.add("active")   
   })
   e.addEventListener("mouseout", function(){
     document.querySelectorAll(".nav ul li")[i].classList.remove("active")
  
   })
 })

$subMenu.addEventListener("mouseover",function(){
  $subMenu.classList.add("on")
  $subWrap.classList.add("on")
})
$subMenu.addEventListener("mouseout",function(){
  $subMenu.classList.remove("on")
  $subWrap.classList.remove("on")
})

//swiper 넣기
const swiper = new Swiper(".swiper",{
    slidesPerView: 1,
    loop:true,
    autoplay: {
      delay: 5000,
      disableOnInteraction:false
  },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
      
    }
    
  });
  
 document.querySelector(".swiper-cus-pagination .progress").classList.add("on")
  function auto_play(){
    document.querySelector(".swiper-cus-pagination .progress").classList.remove("on")
    setTimeout(() => {
      document.querySelector(".swiper-cus-pagination .progress").classList.add("on")
    }, 100);
  }
 
  let timer = setInterval(auto_play, 5000);
  document.querySelector(".swiper-cus-pagination .pause").addEventListener("click", function(){
    document.querySelector(".swiper-cus-pagination .pause").classList.toggle("play")
    if(document.querySelector(".swiper-cus-pagination .pause").classList.contains("play")){
      clearInterval(timer);
      document.querySelector(".swiper-cus-pagination .progress").classList.remove("on")
      swiper.autoplay.stop()
    }else{
    document.querySelector(".swiper-cus-pagination .progress").classList.add("on")
    clearInterval(timer);
    timer = setInterval(auto_play, 5000);
    swiper.autoplay.start()
    }
  })

  swiper.on('transitionEnd', function(){
    // 스와이퍼가 동작하고 나서 다시 게이지바 채우고 타이머 실행
    clearInterval(timer);
    if(document.querySelector(".swiper-cus-pagination .pause").classList.contains("play")){
      return;
    }else{
    document.querySelector(".swiper-cus-pagination .progress").classList.add("on")
   }

  });

  // 스와이퍼가 동작하는 순간 타이머 멈추고 게이지바 클래스 바
  swiper.on('slideChange', function(){
      clearInterval(timer);
      document.querySelector(".swiper-cus-pagination .progress").classList.remove("on") 
     
  });