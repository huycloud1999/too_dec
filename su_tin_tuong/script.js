document.addEventListener("DOMContentLoaded", function () {
  var mySwiperSlidePartner = new Swiper(".mySwiperSlidePartner", {
    slidesPerView: 3,
    grid: {
      rows: 3,
      fill: "row",
    },
  });
  var mySwiperSlidePartnermb1 = new Swiper(".mySwiperSlidePartnerMb1", {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 0,
    loop:true,
    speed:6000,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
  });
  var mySwiperSlidePartnermb2 = new Swiper(".mySwiperSlidePartnerMb2", {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 0,
    loop:true,
    speed:6000,
    autoplay: {
        delay:0 ,
        disableOnInteraction: false,
      },
  });
});
const data = [
  "./assets/imgs/bank logo.png",
  "./assets/imgs/bank logo.png",
  "./assets/imgs/bank logo.png",
  "./assets/imgs/bank logo.png",
  "./assets/imgs/bank logo.png",
  "./assets/imgs/bank logo.png",
  "./assets/imgs/bank logo.png",
  "./assets/imgs/bank logo.png",
  "./assets/imgs/bank logo.png",
  "./assets/imgs/bank logo.png",
  "./assets/imgs/bank logo.png",
  "./assets/imgs/bank logo.png",
  "./assets/imgs/bank logo.png",
];
const swiperWrapper = document.getElementById("swiper-wrapperPartnerHP");
const swiperWrapperMb1 = document.getElementById("swiper-wrapperPartnerMb1");
const swiperWrapperMb2 = document.getElementById("swiper-wrapperPartnerMb2");
//pc
data.forEach((item,index) => {
  const swiperSlide = document.createElement("div");
  swiperSlide.className = "swiper-slide";
  swiperSlide.innerHTML = `<img src="${item}" alt="${index}" />`;

  swiperWrapper.appendChild(swiperSlide);
});
//mobile
const midPoint = Math.ceil(data.length / 2);
const dataPart1 = data.slice(0, midPoint);
const dataPart2 = data.slice(midPoint);

const appendSlides = (dataArray, swiperWrapper) => {
  dataArray.forEach((item, index) => {
    const swiperSlide = document.createElement("div");
    swiperSlide.className = "swiper-slide";
    swiperSlide.innerHTML = `<img src="${item}" alt="${index}" />`;
    swiperWrapper.appendChild(swiperSlide);
  });
};

appendSlides(dataPart1, swiperWrapperMb1);
appendSlides(dataPart2, swiperWrapperMb2);