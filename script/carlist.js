document.getElementById('searchButton').addEventListener('click', function() {
    const maxPrice = parseFloat(document.getElementById('priceInput').value);
    const carType = document.getElementById('typeInput').value;
    const carItems = document.querySelectorAll('.group');

    carItems.forEach(car => {
        const price = parseFloat(car.dataset.price);
        const type = car.dataset.type;

        const isPriceValid = isNaN(maxPrice) || price <= maxPrice;
        const isTypeValid = !carType || type === carType;

        if (isPriceValid && isTypeValid) {
            car.style.visibility = 'visible';
            car.style.height = 'auto'; // Reset height
        } else {
            car.style.visibility = 'hidden';
            car.style.height = '0'; // Collapse height
        }
    });
});