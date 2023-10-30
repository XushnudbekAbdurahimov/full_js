const carousel = document.querySelector('.carousel');
        const prevButton = document.querySelector('.prev-button');
        const nextButton = document.querySelector('.next-button');
        const imageWidth = carousel.firstElementChild.clientWidth;

        prevButton.addEventListener('click', () => {
            carousel.style.transform = `scaleX(${imageWidth}px)`;
            carousel.insertBefore(carousel.lastElementChild, carousel.firstElementChild);
        });

        nextButton.addEventListener('click', () => {
            carousel.style.transform = `scaleX(-${imageWidth}px)`;
            carousel.appendChild(carousel.firstElementChild);
        });

        carousel.addEventListener('transitionend', () => {
            carousel.style.transform = 'none';
        });

        function LoginPanel(){
            const loading = document.querySelector(".loading")
            loading.style.display = "flex"
            setTimeout(()=>{
                window.location = "./index.html"
            },3000)
        }