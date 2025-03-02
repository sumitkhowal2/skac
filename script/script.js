setTimeout(() => {
    let alertBoxTop = document.getElementById('top-notification');
    if (alertBoxTop) {
        let alertBT = new bootstrap.Alert(alertBoxTop);
        alertBT.close();
    }
}, 5000);

const categoriesWrapper = document.querySelector('.categories-wrapper');
const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');

leftBtn.addEventListener('click', () => {
    categoriesWrapper.scrollBy({ left: -200, behavior: 'smooth' });
});

rightBtn.addEventListener('click', () => {
    categoriesWrapper.scrollBy({ left: 200, behavior: 'smooth' });
});

// Category selection functionality
const categoryButtons = document.querySelectorAll('.category-btn');
const products = document.querySelectorAll('.product');

categoryButtons.forEach(button => {
    button.addEventListener('click', function () {
        const category = button.getAttribute('data-category');
        products.forEach(product => {
            product.style.display = product.classList.contains(category) ? 'block' : 'none';
        });
    });
});

