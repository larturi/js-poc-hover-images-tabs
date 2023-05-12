document.addEventListener('DOMContentLoaded', () => {
   setImagesTabsOnInit();

   function setTabActiveImageAttributes(tab) {
      // Recibe un tab y le coloca la imagen activa
      const imageEl = tab.querySelector('img');
      if (imageEl) {
         const imageActivePath = imageEl.getAttribute('data-active-tab-path');
         if (imageActivePath) {
            imageEl.src = imageActivePath;
         }
      }
   }

   function setTabDefaultImageAttributes(tab) {
      // Recibe un tab y le coloca la imagen default
      const imageEl = tab.querySelector('img');
      if (imageEl) {
         imageEl.src = imageEl.getAttribute('data-default-path');
      }
   }

   function setTabImageHoverBehavior(tab) {
      // Cambia la imagen al hacer hover, excepto para tab activo
      const imageEl = tab.querySelector('img');
      if (imageEl) {
         const imageHoverPath = imageEl.getAttribute('data-active-tab-path');
         const imageDefaultPath = imageEl.getAttribute('data-default-path');

         tab.addEventListener('mouseenter', () => {
            const hasActiveClass = tab.classList.contains('active');
            if (!hasActiveClass && imageHoverPath) {
               imageEl.src = imageHoverPath;
            }
         });

         tab.addEventListener('mouseleave', () => {
            const hasActiveClass = tab.classList.contains('active');
            if (!hasActiveClass) {
               imageEl.src = imageDefaultPath;
            }
         });
      }
   }

   function setImagesTabsOnInit() {
      // Configuracion inicial de las imagenes de los tabs

      const currentContentTab = document.querySelector('.tabs');
      const tabs = currentContentTab.querySelectorAll('.tab');

      tabs.forEach((tab) => {
         const isTabActive = tab.classList.contains('active');

         // Setea hover para todos los tabs
         setTabImageHoverBehavior(tab);

         // Setea tab activo
         if (isTabActive) {
            setTabActiveImageAttributes(tab);
         }

         // Setea click event para cada tab
         tab.addEventListener('click', () => {
            const selectedTab = tab;

            tabs.forEach((ele) => {
               // Setea hover y elimina class active para todos los tabs 
               setTabImageHoverBehavior(ele);
               ele.classList.remove('active');
               setTabDefaultImageAttributes(ele);
            });

            // Setea el tab activo
            selectedTab.classList.add('active');
            setTabActiveImageAttributes(selectedTab);
         });
      });
   }
});
