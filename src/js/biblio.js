document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.card-img-wrapper').forEach(wrapper => {
        const img = wrapper.querySelector('img');
        wrapper.style.setProperty('--bg-image', `url('${img.src}')`);
    });
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })
})