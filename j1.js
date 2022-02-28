AOS.init({
        offset: 400, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 1000 // values from 0 to 3000, with step 50ms
      });

      const marker = document.querySelector("#marker");
      const items = document.querySelectorAll("nav a");

      items.forEach(link => link.addEventListener("click",
        e => indicator(e.target)));

      function indicator(item) {
        marker.style.top = item.offsetTop + "px";
        marker.style.height = item.offsetHeight + "px";
      }
