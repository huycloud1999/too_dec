data = [
  {
    img: "./assets/imgs/Rectangle 72.png",
    date: "08/11/2023",
    title: " Quy định và điều kiện xem xét cấp sổ đỏ đối với đất vi phạm",
  },
  {
    img: "./assets/imgs/Rectangle 72.png",
    date: "08/11/2023",
    title: " Quy định và điều kiện xem xét cấp sổ đỏ đối với đất vi phạm",
  },
  {
    img: "./assets/imgs/Rectangle 72.png",
    date: "08/11/2023",
    title: " Quy định và điều kiện xem xét cấp sổ đỏ đối với đất vi phạm",
  },
  {
    img: "./assets/imgs/Rectangle 72.png",
    date: "08/11/2023",
    title: " Quy định và điều kiện xem xét cấp sổ đỏ đối với đất vi phạm",
  },
  {
    img: "./assets/imgs/Rectangle 72.png",
    date: "08/11/2023",
    title: " Quy định và điều kiện xem xét cấp sổ đỏ đối với đất vi phạm",
  },
  {
    img: "./assets/imgs/Rectangle 72.png",
    date: "08/11/2023",
    title: " Quy định và điều kiện xem xét cấp sổ đỏ đối với đất vi phạm",
  },
  ,
  {
    img: "./assets/imgs/Rectangle 72.png",
    date: "08/11/2023",
    title: " Quy định và điều kiện xem xét cấp sổ đỏ đối với đất vi phạm",
  },
];
document.addEventListener("DOMContentLoaded", function () {
  const swiperWrapper = document.getElementById("mySwiperNewswrapHP");

  data.forEach((item) => {
    const slide = document.createElement("div");
    slide.className = "swiper-slide";

    const card = `
        <div class="cardNewsHomePage">
          <img src="${item.img}" alt="1" class="bg_cardNewsHomePage" />
          <div class="overlay" id="overlayCardNewsHP">
            <div class="dayNewsHP">${item.date}</div>
            <div class="titleNewHp">${item.title}</div>
          </div>
        </div>
      `;

    slide.innerHTML = card;
    swiperWrapper.appendChild(slide);
  });

  const mySwiperNewsHP = new Swiper(".mySwiperNewsHP", {
    slidesPerView: 3.5,
    spaceBetween: 30,
    navigation: {
      nextEl: ".rightbtnSLideNewHP",
      prevEl: ".leftbtnSLideNewHP",
    },
    breakpoints: {
        0: {
          slidesPerView: 1.22,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2.8,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 3.5,
          spaceBetween: 30,
        },
      },
    pagination: {
      el: ".paginationNewsHomepage",
      type: "progressbar",
    },

  });
});
