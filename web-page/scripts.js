// Menu data
const menuItems = [
    // Legacy Drinks
    { id: 1, name: 'Bussin Barista', type: 'Coffee', price: 69, calories: 159, category: 'legacy', image: 'assets/web-images/legacy/1.png' },
    { id: 2, name: 'Rizz Mocha Latte', type: 'Coffee', price: 59, calories: 197, category: 'legacy', image: 'assets/web-images/legacy/2.png' },
    { id: 3, name: 'Lit Caramel Latte', type: 'Coffee', price: 59, calories: 204, category: 'legacy', image: 'assets/web-images/legacy/3.png' },
    { id: 4, name: 'Its Giving Creamy Vanilla Caramel', type: 'Coffee', price: 69, calories: 236, category: 'legacy', image: 'assets/web-images/legacy/4.png' },
    { id: 5, name: 'Its Giving Vanilla Latte', type: 'Coffee', price: 59, calories: 204, category: 'legacy', image: 'assets/web-images/legacy/5.png' },
    { id: 6, name: 'Sheesh! White Mocha Caramel', type: 'Coffee', price: 69, calories: 236, category: 'legacy', image: 'assets/web-images/legacy/6.png' },
    { id: 7, name: 'Eyyy! White Chocolate Mocha', type: 'Coffee', price: 59, calories: 175, category: 'legacy', image: 'assets/web-images/legacy/7.png' },
    { id: 8, name: 'Its a Vibe Matcha Latte', type: 'Non-Coffee', price: 59, calories: 180, category: 'legacy', image: 'assets/web-images/legacy/8.png' },
    { id: 9, name: 'Dirty Matcha', type: 'Coffee', price: 69, calories: 180, category: 'legacy', image: 'assets/web-images/legacy/9.png' },
    { id: 10, name: 'Iced Americano', type: 'Coffee', price: 49, calories: 15, category: 'legacy', image: 'assets/web-images/legacy/10.png' },
    { id: 11, name: 'Iced Choco Caramel', type: 'Non-Coffee', price: 49, calories: 204, category: 'legacy', image: 'assets/web-images/legacy/11.png' },
    { id: 12, name: 'Iced Milk Choco', type: 'Non-Coffee', price: 49, calories: 197, category: 'legacy', image: 'assets/web-images/legacy/12.png' },
    { id: 13, name: 'Eyyy! Spanish Latte', type: 'Coffee', price: 59, calories: 174, category: 'legacy', image: 'assets/web-images/legacy/13.png' },
    { id: 14, name: 'Strawberry Milk', type: 'Non-Coffee', price: 49, calories: 234, category: 'legacy', image: 'assets/web-images/legacy/14.png' },
    { id: 15, name: 'Strawberry Choco', type: 'Non-Coffee', price: 49, calories: 260, category: 'legacy', image: 'assets/web-images/legacy/15.png' },
    { id: 16, name: 'Strawberry Latte', type: 'Coffee', price: 59, calories: 188, category: 'legacy', image: 'assets/web-images/legacy/16.png' },
    { id: 17, name: 'Strawberry Matcha', type: 'Non-Coffee', price: 59, calories: 207, category: 'legacy', image: 'assets/web-images/legacy/17.png' },
    { id: 18, name: 'Mocha Peppermint Latte', type: 'Coffee', price: 59, calories: 227, category: 'legacy', image: 'assets/web-images/legacy/18.png' },
    { id: 19, name: 'Brown Sugar Latte', type: 'Coffee', price: 59, calories: 192, category: 'legacy', image: 'assets/web-images/legacy/19.png' },
    { id: 20, name: 'Brewed Coffee (Kapeng Barako)', type: 'Coffee', price: 49, calories: 0, category: 'legacy', image: 'assets/web-images/legacy/20.png' },
    { id: 21, name: 'Hot Lemon Black Tea', type: 'Non-Coffee', price: 49, calories: 15, category: 'legacy', image: 'assets/web-images/legacy/21.png' },
    { id: 22, name: 'Hot Americano', type: 'Coffee', price: 49, calories: 15, category: 'legacy', image: 'assets/web-images/legacy/22.png' },
    { id: 23, name: 'Iced Lemon Black Tea', type: 'Juice', price: 49, calories: 120, category: 'legacy', image: 'assets/web-images/legacy/23.png' },
    { id: 24, name: 'Green Apple Fruit Tea', type: 'Juice', price: 49, calories: 208, category: 'legacy', image: 'assets/web-images/legacy/24.png' },
    { id: 25, name: 'Perfect Peach Iced Tea', type: 'Juice', price: 59, calories: 165, category: 'legacy', image: 'assets/web-images/legacy/25.png' },
    { id: 26, name: 'Iced Strawberry Tea', type: 'Juice', price: 49, calories: 180, category: 'legacy', image: 'assets/web-images/legacy/26.png' },
    { id: 31, name: 'Pink Lemonade', type: 'Juice', price: 59, calories: 182, category: 'legacy', image: 'assets/web-images/legacy/31.png' },
    { id: 32, name: 'Spanish Cold Brew Americano', type: 'Coffee', price: 59, calories: 126, category: 'legacy', image: 'assets/web-images/legacy/32.png' },
    { id: 33, name: 'Chocolate Caramel Cold Brew', type: 'Coffee', price: 69, calories: 149, category: 'legacy', image: 'assets/web-images/legacy/33.png' },
    
    // Seasonal Drinks
    { id: 28, name: 'Cozy Sunset Vibes', type: 'Mocktail', price: 89, calories: 61, category: 'seasonal-drinks', image: 'assets/web-images/seasonal-drink/28.png' },
    { id: 29, name: 'Lychee Blossom Fizz', type: 'Mocktail', price: 89, calories: 60, category: 'seasonal-drinks', image: 'assets/web-images/seasonal-drink/29.png' },
    
    // Seasonal Snacks
    { id: 27, name: 'The First & Only Affogato in Golden', type: 'Snack', price: 39, calories: 170, category: 'seasonal-snacks', image: 'assets/web-images/seasonal-snack/27.png' },
    { id: 30, name: 'Eyyy! Vanilla Coffee Caramel Ice Cream', type: 'Coffee', price: 69, calories: 557, category: 'seasonal-snacks', image: 'assets/web-images/seasonal-snack/30.png' }
];

// DOM elements
const menuGrid = document.getElementById('menu-grid');
const menuTabs = document.querySelectorAll('.menu-tab');
const productModal = document.getElementById('product-modal');
const productModalContent = document.getElementById('product-modal-content');
const closeBtn = document.querySelector('.close-btn');

// Initialize the page
function init() {
    renderMenu('legacy');
    setupEventListeners();
}

// Render menu items based on category
function renderMenu(category) {
    menuGrid.innerHTML = '';
    
    const filteredItems = menuItems.filter(item => item.category === category);
    
    if (filteredItems.length === 0) {
        menuGrid.innerHTML = '<p>No items in this category</p>';
        return;
    }
    
    filteredItems.forEach(item => {
        const menuItemElement = document.createElement('div');
        menuItemElement.className = 'menu-item';
        menuItemElement.dataset.id = item.id;
        
        menuItemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}" loading="lazy">
            <div class="menu-item-info">
                <h3>${item.name}</h3>
                <p>${item.type}</p>
                <p>₱${item.price.toFixed(2)}</p>
            </div>
        `;
        
        menuItemElement.addEventListener('click', () => openProductModal(item));
        menuGrid.appendChild(menuItemElement);
    });
}

// Open product modal with details
function openProductModal(product) {
    productModalContent.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-modal-image">
        <div class="product-modal-info">
            <h3>${product.name}</h3>
            <p><strong>Type:</strong> ${product.type}</p>
            <p><strong>Category:</strong> ${product.category === 'legacy' ? 'Legacy' : 'Seasonal'}</p>
            <p><strong>Calories:</strong> ${product.calories}</p>
            <p class="price">₱${product.price.toFixed(2)}</p>
        </div>
    `;
    
    productModal.style.display = 'block';
}

// Close modal
function closeModal() {
    productModal.style.display = 'none';
}

// Setup event listeners
function setupEventListeners() {
    // Menu tab switching
    menuTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            menuTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            renderMenu(tab.dataset.category);
        });
    });
    
    // Close modal
    closeBtn.addEventListener('click', closeModal);
    
    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === productModal) {
            closeModal();
        }
    });
}

// Initialize the app
document.addEventListener('DOMContentLoaded', init);