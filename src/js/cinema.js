const trailerModal = document.querySelector('.modal');
const trailerVid = document.querySelector('#trailerVid');
const trailerTitle = document.querySelector('#trailerTitle');
const closeBtn = trailerModal.querySelector('.modal__close');

closeBtn.addEventListener('click', () => {
    trailerModal.ariaHidden = 'true';
    trailerVid.src = '';
    document.body.classList.remove('no-scroll');
});

document.querySelectorAll('.gallery-card__button , .section--film__button').forEach(card => {
    card.addEventListener('click', () => {
        const videoName = card.getAttribute('data-trailer');
        const titleElement = card.querySelector('.gallery-card__title , .section--film__title');
        const title = titleElement ? titleElement.textContent : 'Bande-annonce';
        trailerVid.src = `https://sae-cloud.boomoon.cloud/${videoName}`;
        trailerTitle.textContent = title + " - Bande-annonce";
        trailerModal.ariaHidden = 'false';
        document.body.classList.add('no-scroll');
    });
});