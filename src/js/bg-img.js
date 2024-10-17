document.addEventListener('DOMContentLoaded', function() {
    var albumElements = document.querySelectorAll('.screen');
    var options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };
    var observer = new IntersectionObserver(function(entries, observer) {
        function changeBackgroundImage(className) {
            var newImageUrl;
            switch (className) {
              case 'opeth':
                newImageUrl = '/images/opeth.webp';
                break;
              case 'ten':
                newImageUrl = '/images/ten.jpg';
                break;
                case 'mkynsi':
                    newImageUrl = '/images/mkynsi.png';
                    break;
                case '10kdays':
                    newImageUrl = '/images/10kdays.jpg';
                    break;
                case '36chambers':
                    newImageUrl = '/images/36chambers.jpg';
                    break;
              default:
                newImageUrl = '/images/albums_crop.png';
            }
            const hidden = document.querySelector(".hidden")
            hidden.setAttribute('src', newImageUrl)
            const visible = document.querySelector(".visible")
            setTimeout(function() {
                visible.classList.remove("visible")
                visible.classList.add("hidden")

                hidden.classList.add("visible")
                hidden.classList.remove("hidden")
              }, 150);
        }
        entries.forEach(entry => {
            if (entry.isIntersecting) {
            var backgroundContainer = document.querySelector('.bg-img');
            var intersectingElement = entry.target;
            var className = intersectingElement.classList[2];
            changeBackgroundImage(className);
            var computedStyle = window.getComputedStyle(backgroundContainer, '::before');
            var backgroundImage = computedStyle.getPropertyValue('background-image');
        }
      });
    }, options);
    albumElements.forEach(element => {
        observer.observe(element);
      });
  });
  