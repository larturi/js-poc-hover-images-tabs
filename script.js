document.addEventListener('DOMContentLoaded', () => {
   const tabs = document.querySelectorAll('.tab');

   tabs.forEach((tab) => {
      const imageEl = tab.querySelector('img');

      const imageDefaultPath = imageEl.getAttribute('data-default-path');
      const imageActivePath = imageEl.getAttribute('data-active-tab-path');

      if (tab.classList.contains('active')) {
         imageEl.src = imageActivePath;
      }

      tab.addEventListener('mouseenter', () => {
         if (!tab.classList.contains('active')) {
            imageEl.src = imageActivePath;
         }
      });

      tab.addEventListener('mouseleave', () => {
         if (!tab.classList.contains('active')) {
            imageEl.src = imageDefaultPath;
         }
      });

      tab.addEventListener('click', () => {
         tabs.forEach((ele) => {
            ele.classList.remove('active');
            setTabDefaultImageAttributes(ele);
         });

         tab.classList.add('active');
         imageEl.src = imageActivePath;
      });
   });

   function setTabDefaultImageAttributes(tab) {
      const imageEl = tab.querySelector('img');
      if (imageEl) {
         imageEl.src = imageEl.getAttribute('data-default-path');
      }
   }
});
