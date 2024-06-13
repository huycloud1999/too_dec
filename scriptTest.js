document.addEventListener("DOMContentLoaded", function () {
  // Hàm để cập nhật vị trí top của megaMenuTKNT
  function updateMegaMenuPosition() {
    const stickyDesktop = document.getElementById("sticky-desktop");
    if (stickyDesktop) {
      const stickyDesktopHeight = stickyDesktop.offsetHeight;
      const megaMenuTKNT = document.getElementById("megaMenuTKNT");
      if (megaMenuTKNT) {
        megaMenuTKNT.style.top = stickyDesktopHeight + "px";
      } else {
        console.error("megaMenuTKNT not found");
      }
    } else {
      console.error("stickyDesktop not found");
    }
  }

  // Gọi hàm cập nhật vị trí khi DOMContentLoaded
  updateMegaMenuPosition();

  // Thêm sự kiện lắng nghe scroll và resize để cập nhật vị trí khi cuộn hoặc thay đổi kích thước cửa sổ
  window.addEventListener("scroll", updateMegaMenuPosition);
  window.addEventListener("resize", updateMegaMenuPosition);

  // Thêm sự kiện hover cho .TKNT_mega và megaMenuTKNT
  const TKNTMega = document.querySelector(".TKNT_mega");
  const megaMenuTKNT = document.getElementById("megaMenuTKNT");
  const stickyDesktop = document.getElementById("sticky-desktop");

  let hideTimeout;

  if (TKNTMega && megaMenuTKNT && stickyDesktop) {
    // Thêm thuộc tính transition cho megaMenuTKNT
    megaMenuTKNT.style.transition =
      "opacity 0.5s ease-in-out, z-index 0.5s ease-in-out";

    TKNTMega.addEventListener("mouseenter", function () {
      clearTimeout(hideTimeout);
      megaMenuTKNT.style.opacity = "1";
      megaMenuTKNT.style.zIndex = "99999";
      stickyDesktop.style.background = "#0D0D0D";
      megaMenuTKNT.style.pointerEvents = "auto";
    });

    TKNTMega.addEventListener("mouseleave", function () {
      stickyDesktop.style.background = "";
      hideTimeout = setTimeout(function () {
        megaMenuTKNT.style.opacity = "0";
        megaMenuTKNT.style.zIndex = "-99";
        megaMenuTKNT.style.pointerEvents = "none";
      }, 300);
    });

    megaMenuTKNT.addEventListener("mouseenter", function () {
      clearTimeout(hideTimeout);
      stickyDesktop.style.background = "#0D0D0D";
    });

    megaMenuTKNT.addEventListener("mouseleave", function () {
      stickyDesktop.style.background = "";
      hideTimeout = setTimeout(function () {
        megaMenuTKNT.style.opacity = "0";
        megaMenuTKNT.style.zIndex = "-99";
        megaMenuTKNT.style.pointerEvents = "none";
      }, 300);
    });
  } else {
    console.error("TKNTMega, megaMenuTKNT, or stickyDesktop not found");
  }
});
