const menuData = [
    {
      title: "Trang chủ",
      url: "/trang-chu"
    },
    {
      title: "Lĩnh vực hoạt động",
      url: "/linh-vuc-hoat-dong",
      children: [
        { title: "Thiết kế & thi công", url: "/linh-vuc-hoat-dong/item-1" },
        { title: "Tổng thầu xây dựng dân dụng & công nghiệp", url: "/linh-vuc-hoat-dong/item-2" },
        { title: "Hạ tầng giao thông", url: "/linh-vuc-hoat-dong/item-3" },
        { title: "đầu tư & phát triển dự án", url: "/linh-vuc-hoat-dong/item-4" }
      ]
    },
    {
      title: "Dự án",
      url: "/du-an"
    },
    {
      title: "Về chúng tôi",
      url: "/ve-chung-toi",
      children: [
        { title: "Về top dec", url: "/ve-chung-toi/item-1" },
        { title: "Phát triển bền vững", url: "/ve-chung-toi/item-2" },
      ]
    },
    {
      title: "KHÁCH HÀNG VÀ ĐỐI TÁC",
      url: "/khach-hang-va-doi-tac"
    }
  ];
  
document.addEventListener("DOMContentLoaded", function () {
    var btnOpenMenu = document.getElementById('menubtn');
    var menu = document.getElementById('mainContentHeader');
    var closeMenu = document.getElementById('closeMenuHeader');
    btnOpenMenu.addEventListener('click', function () {
        console.log("click")
        menu.classList.add('openMenu');
    });
    closeMenu.addEventListener('click', function () {
        menu.classList.remove('openMenu');
    });
});
function createMenu(menuData, parentElement) {
    menuData.forEach(item => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = item.url;
      a.textContent = item.title;
      li.appendChild(a);

      if (item.children) {
        const ul = document.createElement('ul');
        ul.classList.add('submenu');
        createMenu(item.children, ul);
        li.appendChild(ul);

        // Create img element
        const img = document.createElement('img');
        img.src = "./assets/imgs/retangleWhite.svg";
        img.alt = "white retangle";
        img.classList.add("retangleWhite");

        // Append img to li
        li.appendChild(img);
      }

      parentElement.appendChild(li);
    });
  }

  const menuElement = document.getElementById('menuHeader');
  createMenu(menuData, menuElement);