document.addEventListener('DOMContentLoaded', () => {
    const trailerModal = new bootstrap.Modal(document.getElementById('trailerModal'));
    const trailerIframe = document.getElementById('trailerIframe');
    const trailerTitle = document.getElementById('trailerTitle');

    document.querySelectorAll('.card[data-trailer]').forEach(card => {
        card.addEventListener('click', () => {
            const trailerUrl = card.getAttribute('data-trailer');
            const titleElement = card.querySelector('h2, .card-title');
            const title = titleElement ? titleElement.textContent : 'Bande-annonce';
            trailerIframe.src = trailerUrl;
            trailerTitle.textContent = title + " - Bande-annonce";
            trailerModal.show();
        });
    });

    document.getElementById('trailerModal').addEventListener('hidden.bs.modal', () => {
        trailerIframe.src = '';
    });

    document.querySelectorAll('.card-img-wrapper').forEach(wrapper => {
        const img = wrapper.querySelector('img');
        wrapper.style.setProperty('--bg-image', `url('${img.src}')`);
    });
});
