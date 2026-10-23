// global variables
const products = [
    { id: 0, title: "Syltherine", subtitle: "Stylish cafe chair", image: "./assets/images/image-bed.png", price: "Rp 2.500.000", oldPrice: "Rp 3.500.000", },
    { id: 1, title: "Leviosa", subtitle: "Stylish cafe chair", image: "./assets/images/image-dining.png", price: "Rp 2.500.000", oldPrice: "Rp 3.500.000", },
    { id: 2, title: "Lolito", subtitle: "Stylish cafe chair", image: "./assets/images/image-living.png", price: "Rp 2.500.000", oldPrice: "Rp 3.500.000", },
    { id: 3, title: "Respira", subtitle: "Stylish cafe chair", image: "./assets/images/image-bed.png", price: "Rp 2.500.000", oldPrice: "Rp 3.500.000", },
    { id: 4, title: "Grifo", subtitle: "Stylish cafe chair", image: "./assets/images/image-dining.png", price: "Rp 2.500.000", oldPrice: "Rp 3.500.000", },
    { id: 5, title: "Muggo", subtitle: "Stylish cafe chair", image: "./assets/images/image-living.png", price: "Rp 2.500.000", oldPrice: "Rp 3.500.000", },
    { id: 6, title: "Pingky", subtitle: "Stylish cafe chair", image: "./assets/images/image-bed.png", price: "Rp 2.500.000", oldPrice: "Rp 3.500.000", },
    { id: 7, title: "Potty", subtitle: "Stylish cafe chair", image: "./assets/images/image-dining.png", price: "Rp 2.500.000", oldPrice: "Rp 3.500.000", },
    { id: 8, title: "Liza", subtitle: "Stylish cafe chair", image: "./assets/images/image-living.png", price: "Rp 2.500.000", oldPrice: "Rp 3.500.000", },
    { id: 9, title: "Olga", subtitle: "Stylish cafe chair", image: "./assets/images/image-bed.png", price: "Rp 2.500.000", oldPrice: "Rp 3.500.000", },
    { id: 10, title: "Kelea", subtitle: "Stylish cafe chair", image: "./assets/images/image-dining.png", price: "Rp 2.500.000", oldPrice: "Rp 3.500.000", },
    { id: 11, title: "Kelea 2", subtitle: "Stylish cafe chair", image: "./assets/images/image-living.png", price: "Rp 2.500.000", oldPrice: "Rp 3.500.000", },
    { id: 12, title: "Syltherine", subtitle: "Stylish cafe chair", image: "./assets/images/image-bed.png", price: "Rp 2.500.000", oldPrice: "Rp 3.500.000", },
    { id: 13, title: "Leviosa", subtitle: "Stylish cafe chair", image: "./assets/images/image-dining.png", price: "Rp 2.500.000", oldPrice: "Rp 3.500.000", },
    { id: 14, title: "Lolito", subtitle: "Stylish cafe chair", image: "./assets/images/image-living.png", price: "Rp 2.500.000", oldPrice: "Rp 3.500.000", },
    { id: 15, title: "Lolito 2", subtitle: "Stylish cafe chair", image: "./assets/images/image-living.png", price: "Rp 2.500.000", oldPrice: "Rp 3.500.000", },
];

// DOM selection
const mobileNavButton = document.querySelector(".mobile-nav-button"),
    mobileNavMenu = document.querySelector(".mobile-nav-menu"),
    productsContainer = document.querySelector(".our-products"),
    showMoreBtn = document.querySelector(".show-more-btn");

// usable functions
const generateProductCard = (product) => {
    const productCard = document.createElement("div");
    productCard.innerHTML = `
            <div class="group relative bg-[#F4F5F7] overflow-hidden flex flex-col transition-all duration-300">
                        <div class="relative w-full aspect-[285/301] overflow-hidden bg-[#e0e0e0]">
                            <img src="${product.image}" alt="${product.title}"
                                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                            <!-- Badge -->
                            <span
                                class="absolute top-6 right-6 w-12 h-12 rounded-full bg-[#E97171] text-white text-sm font-medium flex items-center justify-center pointer-events-none">
                                -30%
                            </span>

                            <!-- Hover Overlay -->
                            <div
                                class="absolute inset-0 bg-[#3A3A3A]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 gap-6 z-10">
                                <button
                                    class="w-full max-w-[202px] py-3 bg-white text-primary font-semibold text-base hover:bg-primary hover:text-white transition-colors duration-300 shadow-md">
                                    Add to cart
                                </button>
                                <div class="flex items-center justify-center gap-4 text-white text-sm font-semibold">
                                    <button
                                        class="flex items-center gap-1.5 hover:text-primary transition-colors cursor-pointer">
                                        <i class="fa-solid fa-share-nodes"></i> Share
                                    </button>
                                    <button
                                        class="flex items-center gap-1.5 hover:text-primary transition-colors cursor-pointer">
                                        <i class="fa-solid fa-arrow-right-arrow-left"></i> Compare
                                    </button>
                                    <button
                                        class="flex items-center gap-1.5 hover:text-primary transition-colors cursor-pointer">
                                        <i class="fa-regular fa-heart"></i> Like
                                    </button>
                                </div>
                            </div>
                        </div>

                        <!-- Product Info -->
                        <div class="p-4 sm:p-5 flex flex-col flex-1">
                            <h3 class="text-2xl font-semibold text-[#3A3A3A] mb-1">${product.title}</h3>
                            <p class="text-[#898989] text-base font-medium mb-2">${product.subtitle}</p>
                            <div class="flex items-center justify-between mt-auto">
                                <span class="text-[#3A3A3A] font-semibold text-lg sm:text-xl">${product.price}</span>
                                <span class="text-[#B0B0B0] text-sm sm:text-base line-through">${product.oldPrice}</span>
                            </div>
                        </div>
                    </div>
            `;
    return productCard;
}

// render dynamic products
const renderProducts = (products = [], more = false) => {
    if (!more) {
        products.forEach((product) => {
            productsContainer.appendChild(generateProductCard(product));
        });
        return;
    }

    // render with more products
    products.forEach((product) => {
        productsContainer.appendChild(generateProductCard(product));
    });
};

// initial function calls

// show initially 8 products
renderProducts(products.slice(0, 8));

// nav menu btn
mobileNavButton.addEventListener("click", () => {
    // check hidden class exist
    if (mobileNavMenu.classList.contains("hidden")) {
        mobileNavMenu.classList.remove("hidden");
        mobileNavMenu.classList.add("flex");

        mobileNavButton.innerHTML = '';
        mobileNavButton.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    } else {
        mobileNavMenu.classList.add("hidden");
        mobileNavMenu.classList.remove("flex");

        mobileNavButton.innerHTML = '';
        mobileNavButton.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
});

// show more products btn
if (showMoreBtn) {
    showMoreBtn.addEventListener("click", () => {
        //remove previous products
        productsContainer.innerHTML = '';

        // render all products
        renderProducts(products, true);

        // hide show more btn
        showMoreBtn.style.display = "none";
    });
}