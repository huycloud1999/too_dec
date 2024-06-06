const footerData = [
  {
    title: "Về chúng tôi",
    url: "/ve-chung-toi",
    children: [
      { title: "Về top dec", url: "/ve-chung-toi/item-1" },
      { title: "Dự án", url: "/ve-chung-toi/item-1" },
      { title: "khách hàng và đối tác", url: "/ve-chung-toi/item-1" },
      { title: "Phát triển bền vững", url: "/ve-chung-toi/item-2" },
      { title: "Liên hệ", url: "/ve-chung-toi/item-1" },
      { title: "Tin tức", url: "/ve-chung-toi/item-1" },
    ],
  },
  {
    title: "Lĩnh vực hoạt động",
    url: "/linh-vuc-hoat-dong",
    children: [
      { title: "Thiết kế & thi công", url: "/linh-vuc-hoat-dong/item-1" },
      {
        title: "Tổng thầu xây dựng dân dụng & công nghiệp",
        url: "/linh-vuc-hoat-dong/item-2",
      },
      { title: "Hạ tầng giao thông", url: "/linh-vuc-hoat-dong/item-3" },
      { title: "đầu tư & phát triển dự án", url: "/linh-vuc-hoat-dong/item-4" },
    ],
  },
];
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
      }

      parentElement.appendChild(li);
    });
  }

  const footerElement = document.getElementById('footerContentList');
  createMenu(footerData, footerElement);
