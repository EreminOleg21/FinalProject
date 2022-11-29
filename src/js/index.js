import '../scss/style.scss';



const swiperBrands = document.querySelector('.swiper-brands');
const swiperRepair = document.querySelector('.swiper-repair');
const swiperPrices = document.querySelector('.swiper-prices');

let mySwiperBrands;
let mySwiperRepair;
let mySwiperPrices;
  

// SWIPER BRANDS
  function mobileSliderBrands(){
    if (window.innerWidth <= 767 && swiperBrands.dataset.mobile === 'false'){
      mySwiperBrands = new Swiper(swiperBrands, {
        wrapperClass: 'swiper-wrapper_brands',
        slideClass: 'swiper-slide_brands',
        spaceBetween: 16,
    
        pagination: {
          el: '.pag-brands',
          clickable: true,
        },
    
        breakpoints: {
          320: {
            slidesPerView: 1.25        
          },
          480: {
            slidesPerView: 2.1
          },
          660: {
            slidesPerView: 3.1
          },
        }       
      });
      swiperBrands.dataset.mobile = 'true';
    }

    if (window.innerWidth >= 767){
      swiperBrands.dataset.mobile = 'false';    
      if ( swiperBrands.classList.contains('swiper-initialized')) { 
        mySwiperBrands.destroy();
      }
      
    }
  }



   
  

 
// SWIPER REPAIR
  function mobileSliderRepair(){
    if (window.innerWidth <= 767 && swiperRepair.dataset.mobile === 'false'){
      mySwiperRepair = new Swiper(swiperRepair, {
        wrapperClass: 'swiper-wrapper_repair',
        slideClass: "swiper-slide_repair",
        spaceBetween: 16,
     
    
        pagination: {
          el: '.pag-repair',
          clickable: true,
        },
    
        breakpoints: {
          320: {
            slidesPerView: 1.25        
          },
          480: {
            slidesPerView: 2.1
          },
          660: {
            slidesPerView: 3.1
          },
        }       
      });
      swiperRepair.dataset.mobile = 'true';
    }

    if (window.innerWidth >= 767){
      swiperRepair.dataset.mobile = 'false';    
      if ( swiperRepair.classList.contains('swiper-initialized')) { 
        mySwiperRepair.destroy();
      }
      
    }
  }
  
 

 


//SWIPER PRICES
function mobileSliderPrices(){
  if (window.innerWidth <= 767 && swiperPrices.dataset.mobile === 'false'){
    mySwiperPrices = new Swiper(swiperPrices, {
      wrapperClass: 'swiper-wrapper_prices',
      slideClass: "swiper-slide_prices",
      spaceBetween: 16,
   
  
      pagination: {
        el: '.pag-prices',
        clickable: true,
      },
  
      breakpoints: {
        320: {
          slidesPerView: 1.1        
        },
        580: {
          slidesPerView: 2.1
        },
       
      }       
    });
    swiperPrices.dataset.mobile = 'true';
  }

  if (window.innerWidth >= 767){
    swiperPrices.dataset.mobile = 'false';    
    if (swiperPrices.classList.contains('swiper-initialized')) { 
      mySwiperPrices.destroy();
    }
    
  }
}

  window.addEventListener('resize', () => {
    mobileSliderBrands();
    mobileSliderRepair();
    mobileSliderPrices();
    })


    mobileSliderBrands;
    mobileSliderRepair;
    mobileSliderPrices;

  

  
    
// КНОПКИ ПОКАЗАТЬ ВСЕ ДЛЯ 1 SWIPER'a

    let btnSwiperBrands = document.querySelector('.swp-brands__btn');
    let imgSwiperBrands = document.querySelector('.btn__img-brands');    
    let wrapperSwiperBrands = document.querySelector('.swiper-wrapper_brands');       
  

    btnSwiperBrands.addEventListener('click', function(evt){ 
      evt.preventDefault();
           
      if (wrapperSwiperBrands.classList.contains('over')){

        wrapperSwiperBrands.classList.remove('over');
        document.querySelector('.btn__text-brands').textContent="Показать все";
        imgSwiperBrands.classList.remove('arrows_rotate');
        imgSwiperBrands.classList.add('arrows_reverse');      
      
      }else{

        wrapperSwiperBrands.classList.add('over');
      document.querySelector('.btn__text-brands').textContent="Скрыть";
      imgSwiperBrands.classList.add('arrows_rotate');
      imgSwiperBrands.classList.remove('arrows_reverse');
      }
    })
// КНОПКИ ПОКАЗАТЬ ВСЕ ДЛЯ 2 SWIPER'a

let btnSwiperRepair = document.querySelector('.swp-repair__btn');
let imgSwiperRepair = document.querySelector('.btn__img-repair');    
let wrapperSwiperRepair = document.querySelector('.swiper-wrapper_repair');       


btnSwiperRepair.addEventListener('click', function(evt){ 
  evt.preventDefault();
  if (wrapperSwiperRepair.classList.contains('over')){

    wrapperSwiperRepair.classList.remove('over');
    document.querySelector('.btn__text-repair').textContent="Показать все";
    imgSwiperRepair.classList.remove('arrows_rotate');
    imgSwiperRepair.classList.add('arrows_reverse');      
  
  }else{

    wrapperSwiperRepair.classList.add('over');
  document.querySelector('.btn__text-repair').textContent="Скрыть";
  imgSwiperRepair.classList.add('arrows_rotate');
  imgSwiperRepair.classList.remove('arrows_reverse');
  }
})

// BURGER BUTTON


const burgerBtn = document.querySelector('.burger-btn');
let asideMenu = document.querySelector('.aside-menu');
let burgerX = document.querySelector('.burgerX');
let blurOver = document.querySelector('.blur');


 
if (window.innerWidth >= 1439){
  asideMenu.classList.remove('open-aside');
  asideMenu.classList.add('aside');

}

burgerBtn.addEventListener('click', function(evt){
  evt.preventDefault();
  blurOver.style.zIndex = 11;
  if (asideMenu.classList.contains('open-aside')){
    asideMenu.classList.remove('open-aside');
    asideMenu.classList.add('aside');
  }else{
    asideMenu.classList.add('open-aside');
    burgerX.style.display = 'block';
    asideMenu.classList.remove('aside');
  }
})

burgerX.addEventListener('click', function(evt){
  evt.preventDefault();
  blurOver.style.zIndex = -1;
  if (asideMenu.classList.contains('open-aside')){
    asideMenu.classList.remove('open-aside');
    asideMenu.classList.add('aside');
}else{
  asideMenu.classList.add('open-aside');
  burgerX.style.display = 'block';
  asideMenu.classList.remove('aside');
}
})




  



// FEEDBACK BUTTON

const feedBackBtn = document.querySelector('.data__feedback');
const burgerCloseBtn = document.querySelector('.burger-close');
let asideFeedBack = document.querySelector('.aside-feedback');

feedBackBtn.addEventListener('click', function() {

  if (asideFeedBack.classList.contains('aside-feedback--open')){
    asideFeedBack.classList.remove('aside-feedback--open');
  }else{
    asideFeedBack.classList.add('aside-feedback--open');
    blurOver.style.zIndex = 111;
  }
  
})



burgerCloseBtn.addEventListener('click', function(){
  if (asideFeedBack.classList.contains('aside-feedback--open')){
    asideFeedBack.classList.remove('aside-feedback--open'); 
    blurOver.style.zIndex = -1;
  }else if(asideFeedBack.classList.contains('aside-feedback--open')){
    asideFeedBack.classList.remove('aside-feedback--open'); 
  }
})


// CALLBACK BUTTON
const burgerCallClose = document.querySelector('.burger-call-close')
const callBackBtn = document.querySelector('.data__callback');
let asideCallBack = document.querySelector('.aside-callback');

callBackBtn.addEventListener('click', function() {

  if (asideCallBack.classList.contains('aside-callback--open')){
    asideCallBack.classList.remove('aside-callback--open');
  }else{
    asideCallBack.classList.add('aside-callback--open');
    blurOver.style.zIndex = 111;
  }  
})

burgerCallClose.addEventListener('click', function(){
  if (asideCallBack.classList.contains('aside-callback--open')){
    asideCallBack.classList.remove('aside-callback--open'); 
    blurOver.style.zIndex = -1;
  }else if(asideCallBack.classList.contains('aside-callback--open')){
    asideCallBack.classList.remove('aside-callback--open'); 
  }
})



// KEY ESCAPE CLOSE OPEN MODAL
document.addEventListener('keydown', function(evt){
  evt.preventDefault;
   if (evt.key === "Escape"){
   blurOver.style.zIndex = -1;  
     asideMenu.classList.remove('open-aside');
     asideMenu.classList.add('aside'); 
     asideFeedBack.classList.remove('aside-feedback--open'); 
     asideCallBack.classList.remove('aside-callback--open'); 
   }  
 })


 blurOver.addEventListener('click',function(){
  blurOver.style.zIndex = -1;  
    asideMenu.classList.remove('open-aside');
    asideMenu.classList.add('aside');
    asideFeedBack.classList.remove('aside-feedback--open'); 
    asideCallBack.classList.remove('aside-callback--open'); 
})


// BUTTON READ MORE

const readBtn = document.querySelector('.read__btn');
const readBtnText = document.querySelector('.btn__read-text');
const readBtnImg = document.querySelector('.btn__open-img');
let readText = document.querySelector('.read__text')

readBtn.addEventListener('click', function(evt){
  evt.preventDefault();

  if(readBtnImg.classList.contains('arrows_reverse')){
    readBtnImg.classList.remove('arrows_reverse');
    readBtnText.textContent = "Скрыть все";
    readBtnImg.classList.add('arrows_rotate');
    readText.classList.add('read__more');

  }else{
    readBtnImg.classList.add('arrows_reverse');
    readBtnText.textContent = "Читать далее";
    readBtnImg.classList.remove('arrows_rotate');
    readText.classList.remove('read__more');
  }
  
})


  


