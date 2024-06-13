function changeStyles() {
   const contactTitle = document.querySelector('.titleContactHP');
   const contactTitleStrong = document.querySelector('.titleContactHPtrong');
   const btnContact = document.querySelector('.btnContactHomepage');
   contactTitle.style.color="rgba(137, 137, 137, 0.30)";
   contactTitleStrong.style.color="rgba(137, 137, 137, 0.30)";
   btnContact.style.scale="1";
  }
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(changeStyles, 500);
        observer.disconnect();
      }
    });
  }, { threshold: 0.1 });

  observer.observe(document.querySelector('.contactHomePage'));