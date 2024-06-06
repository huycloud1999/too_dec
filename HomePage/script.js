document.addEventListener("DOMContentLoaded", function () {
  var mySwiperHomePage = new Swiper(".mySwiperHomePage", {
    grabCursor: true,
    effect: "creative",
    navigation: {
      prevEl: ".leftBtnBannerHomepage",
      nextEl: ".rightBtnBannerHomepage",
    },
    slidesPerView: 1,
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
    on: {
      slideChange: function () {
        updateContent(mySwiperHomePage.realIndex);
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
  var mySwiperBottombanner = new Swiper(".mySwiperBottombanner", {
    navigation: {
      nextEl: ".btnBottomBannerRight",
      prevEl: ".btnBottomBannerLeft",
    },
  });
});
//tạo swiper-slide
const data = [
  {
    imgUrl: "./assets/imgs/TOP DEC.jpg",
    title: "ĐƠN VỊ DẪN ĐẦU TRONG NGÀNH ĐẦU TƯ VÀ XÂY DỰNG VIỆT NAM 1",
    desc: "Cam kết phát triển một cách bền vững không chỉ là xu hướng phát triển toàn cầu mà còn là một định hướng của TOP DEC.",
    link: "/",
  },
  {
    imgUrl: "./assets/imgs/img2.jpg",
    title: "ĐƠN VỊ DẪN ĐẦU TRONG NGÀNH ĐẦU TƯ VÀ XÂY DỰNG VIỆT NAM 2",
    desc: "Cam kết phát triển một cách bền vững không chỉ là xu hướng phát triển toàn cầu mà còn là một định hướng của TOP DEC.",
    link: "/",
  },
  {
    imgUrl: "./assets/imgs/TOP DEC.jpg",
    title: "ĐƠN VỊ DẪN ĐẦU TRONG NGÀNH ĐẦU TƯ VÀ XÂY DỰNG VIỆT NAM 3",
    desc: "Cam kết phát triển một cách bền vững không chỉ là xu hướng phát triển toàn cầu mà còn là một định hướng của TOP DEC.",
    link: "/",
  },
  {
    imgUrl: "./assets/imgs/img2.jpg",
    title: "ĐƠN VỊ DẪN ĐẦU TRONG NGÀNH ĐẦU TƯ VÀ XÂY DỰNG VIỆT NAM 4",
    desc: "Cam kết phát triển một cách bền vững không chỉ là xu hướng phát triển toàn cầu mà còn là một định hướng của TOP DEC.",
    link: "/",
  },
];

const swiperWrapper = document.getElementById("swiper-wrapperBannerHP");

data.forEach((item) => {
  const swiperSlide = document.createElement("div");
  swiperSlide.className = "swiper-slide";

  swiperSlide.innerHTML = `<img src="${item.imgUrl}" alt="${item.title}" />`;

  swiperWrapper.appendChild(swiperSlide);
});

//content slide
const updateContent = (index) => {
  const { title, desc, link } = data[index];
  const contentBannerHomepage = document.querySelector(
    ".contentBannerHomepage"
  );
  contentBannerHomepage.classList.add("fade-out");
  setTimeout(function () {
    document.querySelector(".numberTextMainCHP").textContent = `0${index + 1}.`;
    document.querySelector(".titleTextMainCHP").innerHTML = title;
    document.querySelector(".descTextMainCHP").innerHTML = desc;
    document.querySelector(".linkTextMainCHP").setAttribute("href", link);

    contentBannerHomepage.classList.remove("fade-out");
    contentBannerHomepage.classList.add("fade-in");
    setTimeout(function () {
      contentBannerHomepage.classList.remove("fade-in");
    }, 800);
  }, 800);
};
updateContent(0);
