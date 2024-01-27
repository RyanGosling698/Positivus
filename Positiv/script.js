let cards = document.querySelectorAll('.card');
let buttons = document.querySelectorAll('.plus');
let contents = document.querySelectorAll('.content');
buttons.forEach(function(button, index) {
    button.addEventListener('click', function() {

        
        let card = cards[index];
        let content = contents[index];
        card.classList.toggle('opened');
        content.classList.toggle('opened');
        let buttonImage = button.querySelector('img');
        if (card.classList.contains('opened')) {
            
            buttonImage.src = '/img/Minus icon.svg';
            let addContent = '<div class="Line"></div> <div class="t3">During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.</div>';
            card.insertAdjacentHTML('beforeend', addContent);
        } else {
            
            buttonImage.src = '/img/Plus icon.svg';
            let additionalContent = card.querySelector('.t3');
            let additionalLine = card.querySelector('.Line');

            if (additionalContent && additionalLine) {
                additionalContent.remove();
                additionalLine.remove();
            }
        }

        let totalHeight = Array.from(cards).reduce((acc, card) => acc + card.offsetHeight, 0);
        processBlock.style.height = `${totalHeight}px`;
    });
});




$('.carousel').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
      




































































