document.addEventListener("DOMContentLoaded", () => {
  const animationCoreValue = document.querySelector(".animationCoreValue");
  const otherElements = document.querySelectorAll(
    ".redAnimation, .threeTrigle_coreValue"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("in-viewport");
            otherElements.forEach((el) => el.classList.add("in-viewport2"));
            observer.unobserve(entry.target);
          }, 300);
        }
      });
    },
    { threshold: 0.1 }
  );

  observer.observe(animationCoreValue);
});
//tạo swiper
const data = [
  {
    imgUrl: "./assets/imgs/image 34.jpg",
    desc: "1Cam kết phát triển một cách bền vững không chỉ là xu hướng phát triển toàn cầu mà còn là một định hướng của TOP DEC.",
    title: "an toàn",
  },
  {
    imgUrl: "./assets/imgs/image 33.jpg",
    title: "ĐƠN VỊ DẪN ĐẦU TRONG NGÀNH ĐẦU TƯ VÀ XÂY DỰNG VIỆT NAM 2",
    desc: "2Cam kết phát triển một cách bền vững không chỉ là xu hướng phát triển toàn cầu mà còn là một định hướng của TOP DEC.",
    title: "chất lượng",
  },
  {
    imgUrl: "./assets/imgs/image 34.jpg",
    desc: "3Cam kết phát triển một cách bền vững không chỉ là xu hướng phát triển toàn cầu mà còn là một định hướng của TOP DEC.",
    title: "chất lượng",
  },
  {
    imgUrl: "./assets/imgs/image 33.jpg",
    title: "ĐƠN VỊ DẪN ĐẦU TRONG NGÀNH ĐẦU TƯ VÀ XÂY DỰNG VIỆT NAM 2",
    desc: "4Cam kết phát triển một cách bền vững không chỉ là xu hướng phát triển toàn cầu mà còn là một định hướng của TOP DEC.",
    title: "an toàn",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  var mySwiperCoreValue = new Swiper(".mySwiperCoreValue", {
    grabCursor: true,
    effect: "creative",
    slidesPerView: 1,
    speed:800,
    pagination: {
      el: ".paginationCoreValue",
      type: "fraction",
    },
    on: {
      slideChange: function () {
        updateContent(mySwiperCoreValue.realIndex);
      },
    },
    navigation: {
      nextEl: ".nextCoreValue",
      prevEl: ".prevCoreValue",
    },
    speed: 800,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      1024: {
        autoplay: false,
      },
    },
    creativeEffect: {
      prev: {
        shadow: true,
        translate: ["-20%", 0, -1],
      },
      next: {
        translate: ["100%", 0, 0],
      },
    },
  });
  const swiperWrapper = document.getElementById("swiper-wrapperCoreValue");

  data.forEach((item) => {
    const swiperSlide = document.createElement("div");
    swiperSlide.className = "swiper-slide";

    swiperSlide.innerHTML = `<img src="${item.imgUrl}" alt="${item.title}"  />`;

    swiperWrapper.appendChild(swiperSlide);
  });
});
const updateContent = (index) => {
  const descCoreValueHP = document.getElementById("descCoreValueHP");
  descCoreValueHP.classList.add("hiddendescCoreValueHP");
  document.querySelector(".titleCoreValueSpan").classList.add("hiddenTitleCoreValue");
  setTimeout(function () {
    const { title, desc } = data[index];
    document.querySelector(".titleCoreValueSpan").textContent = title;
    document.querySelector(".descCoreValueHPspan").innerHTML = desc;
    descCoreValueHP.classList.remove("hiddendescCoreValueHP");
    document.querySelector(".titleCoreValueSpan").classList.remove("hiddenTitleCoreValue");
  }, 800); 
};
updateContent(0);
