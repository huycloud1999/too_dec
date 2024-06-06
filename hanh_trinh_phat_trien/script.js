
    document.addEventListener('DOMContentLoaded', function() {
        // Hàm để cập nhật vị trí top của megaMenuGoOcCho
        function updateMegaMenuPosition() {
            const stickyDesktop = document.getElementById('sticky-desktop');
            if (stickyDesktop) {
                const stickyDesktopHeight = stickyDesktop.offsetHeight;
                const megaMenuGoOcCho = document.getElementById('megaMenuGoOcCho');
                if (megaMenuGoOcCho) {
                    megaMenuGoOcCho.style.top = stickyDesktopHeight + 'px';
                } else {
                    console.error('megaMenuGoOcCho not found');
                }
            } else {
                console.error('stickyDesktop not found');
            }
        }

        // Gọi hàm cập nhật vị trí khi DOMContentLoaded
        updateMegaMenuPosition();

        // Thêm sự kiện lắng nghe scroll và resize để cập nhật vị trí khi cuộn hoặc thay đổi kích thước cửa sổ
        window.addEventListener('scroll', updateMegaMenuPosition);
        window.addEventListener('resize', updateMegaMenuPosition);

        // Thêm sự kiện hover cho .go_oc_cho_mega và megaMenuGoOcCho
        const goOcChoMega = document.querySelector('.go_oc_cho_mega');
        const megaMenuGoOcCho = document.getElementById('megaMenuGoOcCho');
        const stickyDesktop = document.getElementById('sticky-desktop');

        let hideTimeout;

        if (goOcChoMega && megaMenuGoOcCho && stickyDesktop) {
            // Thêm thuộc tính transition cho megaMenuGoOcCho
            megaMenuGoOcCho.style.transition = 'opacity 0.5s ease-in-out, z-index 0.5s ease-in-out';
            stickyDesktop.style.transition = ' 0.5s ease-in-out';
            goOcChoMega.addEventListener('mouseenter', function() {
                clearTimeout(hideTimeout);
                megaMenuGoOcCho.style.opacity = '1';
                megaMenuGoOcCho.style.zIndex = '99999';
                stickyDesktop.style.background = '#0D0D0D';
            });

            goOcChoMega.addEventListener('mouseleave', function() {
                hideTimeout = setTimeout(function() {
                    megaMenuGoOcCho.style.opacity = '0';
                    megaMenuGoOcCho.style.zIndex = '-1';
    
                }, 300);
            });

            megaMenuGoOcCho.addEventListener('mouseenter', function() {
                clearTimeout(hideTimeout);
                stickyDesktop.style.background = '#0D0D0D';
            });

            megaMenuGoOcCho.addEventListener('mouseleave', function() {
                hideTimeout = setTimeout(function() {
                    megaMenuGoOcCho.style.opacity = '0';
                    megaMenuGoOcCho.style.zIndex = '-1';
                }, 300);
            });
        } else {
            console.error('goOcChoMega, megaMenuGoOcCho, or stickyDesktop not found');
        }
    });

