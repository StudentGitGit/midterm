// Функция для поиска товаров на странице products.html
function searchProducts(query) {
    // Получение списка всех товаров
    const products = document.querySelectorAll('.product-item');
    
    // Применение фильтрации
    products.forEach(product => {
        const productName = product.querySelector('h3').innerText.toLowerCase();
        if (productName.includes(query.toLowerCase())) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

// Обработка формы поиска товаров
document.querySelector('#searchForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const query = document.querySelector('#searchInput').value;
    searchProducts(query);
});

// Функция для добавления товара в корзину
function addToCart(productId) {
    // Здесь вы должны добавить функционал для добавления товара в корзину
    console.log(`Товар с ID ${productId} добавлен в корзину`);
    // Обновите интерфейс корзины
}

// Обработчики событий для кнопок добавления в корзину
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (event) => {
        const productId = button.getAttribute('data-product-id');
        addToCart(productId);
    });
});

// Функция для отправки формы контактов
function submitContactForm(event) {
    event.preventDefault();
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;

    // Здесь вы можете отправить данные формы на сервер или обработать их в клиентской части
    console.log(`Имя: ${name}, Email: ${email}, Сообщение: ${message}`);
    alert('Ваше сообщение отправлено!');

    // Сброс формы после отправки
    event.target.reset();
}

// Обработчик события отправки формы контактов
document.querySelector('#contactForm').addEventListener('submit', submitContactForm);

// Функция для сортировки товаров
function sortProducts() {
    const sortValue = document.querySelector('#sortSelect').value;
    const products = Array.from(document.querySelectorAll('.product-item'));
    
    // Сортировка товаров в зависимости от выбранного критерия
    products.sort((a, b) => {
        const aValue = a.querySelector('.product-price').innerText.replace(/[^\d.]/g, '');
        const bValue = b.querySelector('.product-price').innerText.replace(/[^\d.]/g, '');

        return sortValue === 'price-asc' ? aValue - bValue : bValue - aValue;
    });
    
    // Обновление списка товаров после сортировки
    const productList = document.querySelector('#productList');
    productList.innerHTML = '';
    products.forEach(product => {
        productList.appendChild(product);
    });
}

// Обработчик события изменения выбора сортировки
document.querySelector('#sortSelect').addEventListener('change', sortProducts);