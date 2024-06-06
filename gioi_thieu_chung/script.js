var dataImages = [
    './assets/imgs/Rectangle 34624612.png',
    './assets/imgs/Rectangle 34624612.png',
    './assets/imgs/Rectangle 34624612.png',
    './assets/imgs/Rectangle 34624612.png',
    './assets/imgs/Rectangle 34624612.png',
    './assets/imgs/Rectangle 34624612.png',
];
document.addEventListener("DOMContentLoaded", function() {
    var containerImageGI = document.getElementById('containerImageGI');
    dataImages.forEach((src, index) => {
        var img = document.createElement('img');
        img.src = src;
        img.className = 'imageGi' + index;
        
        if (index === 0 || index === 5) {
            img.setAttribute('data-aos', 'fade-right');
        } else {
            img.setAttribute('data-aos', 'fade-left');
        }

        containerImageGI.appendChild(img);
    });

    // Initialize AOS
    AOS.init({
        duration: 2000,
    });
});

