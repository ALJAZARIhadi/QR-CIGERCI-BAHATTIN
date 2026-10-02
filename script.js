```javascript
/* =========================================
   CİĞERCİ BAHATTİN
   DIGITAL MENU
========================================= */


/* =========================================
   MENU DATA
========================================= */

const menuItems = [

    {
        id: 1,
        name: "Ciğer Şiş",
        category: "izgara",
        categoryName: "Izgara",
        price: 810,
        image: "https://www.cigercibahattin.net/FileUpload/ep928173/VitrinResim/188210.jpg",
        description:
            "Günlük kesim kuzu ciğerinden hazırlanır ve mangalda özenle pişirilir."
    },

    {
        id: 2,
        name: "Yürek Şiş",
        category: "izgara",
        categoryName: "Izgara",
        price: 750,
        image: "https://www.cigercibahattin.net/FileUpload/ep928173/VitrinResim/188216.jpg",
        description:
            "Günlük olarak seçilen kuzu yüreğinden hazırlanır ve mangalda pişirilir."
    },

    {
        id: 3,
        name: "Yaprak Ciğer",
        category: "izgara",
        categoryName: "Izgara",
        price: 780,
        image: "https://www.cigercibahattin.net/FileUpload/ep928173/VitrinResim/188215.jpg",
        description:
            "Özel baharatlarla harmanlanan yaprak ciğer, saf zeytinyağı ile özenle pişirilir."
    },

    {
        id: 4,
        name: "Et Şiş",
        category: "izgara",
        categoryName: "Izgara",
        price: 820,
        image: "https://www.cigercibahattin.net/FileUpload/ep928173/VitrinResim/188212.jpg",
        description:
            "Seçkin kuzu etinden hazırlanır ve mangalda ideal kıvamda pişirilir."
    },

    {
        id: 5,
        name: "Adana Kebap",
        category: "kebap",
        categoryName: "Kebap",
        price: 780,
        image: "https://www.cigercibahattin.net/FileUpload/ep928173/VitrinResim/188214.jpg",
        description:
            "Zırh kıyması ve Antep baharatlarıyla geleneksel yöntemlerle hazırlanır."
    },

    {
        id: 6,
        name: "Tantuni",
        category: "kebap",
        categoryName: "Kebap",
        price: 550,
        image: "https://www.cigercibahattin.net/FileUpload/ep928173/VitrinResim/188213.jpg",
        description:
            "Özenle seçilmiş et, özel baharatlarla harmanlanarak yüksek ateşte pişirilir."
    },

    {
        id: 7,
        name: "Tavuk Şiş",
        category: "izgara",
        categoryName: "Izgara",
        price: 710,
        image: "https://www.cigercibahattin.net/FileUpload/ep928173/VitrinResim/188217.jpg",
        description:
            "Günlük olarak seçilen tavuklar özel baharatlarla hazırlanarak mangalda pişirilir."
    },

    {
        id: 8,
        name: "Mercimek Çorbası",
        category: "corba",
        categoryName: "Çorba",
        price: 280,
        image:
            "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=80",
        description:
            "Geleneksel usulle hazırlanan sıcak ve nefis mercimek çorbası."
    },

    {
        id: 9,
        name: "Ciğer Şiş Dürüm",
        category: "durum",
        categoryName: "Dürüm",
        price: 440,
        image:
            "https://images.unsplash.com/photo-1565299507177-b0ac66763828?auto=format&fit=crop&w=900&q=80",
        description:
            "Mangalda pişirilen ciğer, lavaş ve taze garnitürlerle servis edilir."
    },

    {
        id: 10,
        name: "Adana Dürüm",
        category: "durum",
        categoryName: "Dürüm",
        price: 440,
        image:
            "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=900&q=80",
        description:
            "Adana kebap, lavaş ve taze sebzelerle hazırlanan nefis dürüm."
    },

    {
        id: 11,
        name: "Tavuk Şiş Dürüm",
        category: "durum",
        categoryName: "Dürüm",
        price: 440,
        image:
            "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80",
        description:
            "Mangalda pişirilmiş tavuk şiş, lavaş ve taze sebzelerle servis edilir."
    },

    {
        id: 12,
        name: "Künefe",
        category: "tatli",
        categoryName: "Tatlı",
        price: 470,
        image: "https://www.cigercibahattin.net/FileUpload/ep928173/VitrinResim/188211.jpg",
        description:
            "Taze kadayıf ve özel künefe peyniri ile hazırlanır. Sıcak servis edilir."
    },

    {
        id: 13,
        name: "Ayran",
        category: "icecek",
        categoryName: "İçecek",
        price: 80,
        image:
            "https://images.unsplash.com/photo-1626200419199-391ae4be7a41?auto=format&fit=crop&w=900&q=80",
        description:
            "Geleneksel Türk mutfağının vazgeçilmez soğuk içeceği."
    },

    {
        id: 14,
        name: "Şalgam",
        category: "icecek",
        categoryName: "İçecek",
        price: 80,
        image:
            "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=900&q=80",
        description:
            "Acılı veya acısız seçenekleriyle geleneksel şalgam suyu."
    },

    {
        id: 15,
        name: "Su",
        category: "icecek",
        categoryName: "İçecek",
        price: 30,
        image:
            "https://images.unsplash.com/photo-1564419320461-6870880221ad?auto=format&fit=crop&w=900&q=80",
        description:
            "Soğuk su."
    }

];


/* =========================================
   DOM ELEMENTS
========================================= */

const menuContainer =
    document.getElementById("menuContainer");

const searchInput =
    document.getElementById("searchInput");

const categoryButtons =
    document.querySelectorAll(".category-btn");

const noResults =
    document.getElementById("noResults");

const modal =
    document.getElementById("productModal");

const closeModal =
    document.getElementById("closeModal");

const modalImage =
    document.getElementById("modalImage");

const modalTitle =
    document.getElementById("modalTitle");

const modalCategory =
    document.getElementById("modalCategory");

const modalDescription =
    document.getElementById("modalDescription");

const modalPrice =
    document.getElementById("modalPrice");


/* =========================================
   STATE
========================================= */

let currentCategory = "all";


/* =========================================
   PRICE FORMAT
========================================= */

function formatPrice(price) {

    return new Intl.NumberFormat("tr-TR").format(price) + " ₺";

}


/* =========================================
   CREATE PRODUCT CARD
========================================= */

function createProductCard(item) {

    return `

        <article
            class="product-card"
            data-id="${item.id}"
        >

            <img
                class="product-image"
                src="${item.image}"
                alt="${item.name}"
                loading="lazy"
            >

            <div class="product-body">

                <span class="product-category">
                    ${item.categoryName}
                </span>

                <h3 class="product-title">
                    ${item.name}
                </h3>

                <p class="product-description">
                    ${item.description}
                </p>

                <div class="product-footer">

                    <strong class="product-price">
                        ${formatPrice(item.price)}
                    </strong>

                    <button
                        class="view-btn"
                        data-id="${item.id}"
                    >
                        Detay
                    </button>

                </div>

            </div>

        </article>

    `;

}


/* =========================================
   DISPLAY MENU
========================================= */

function displayMenu(items) {

    menuContainer.innerHTML = "";

    if (items.length === 0) {

        noResults.style.display = "block";

        return;

    }

    noResults.style.display = "none";

    items.forEach(item => {

        menuContainer.insertAdjacentHTML(
            "beforeend",
            createProductCard(item)
        );

    });

}


/* =========================================
   FILTER MENU
========================================= */

function filterMenu() {

    const searchTerm =
        searchInput.value
            .trim()
            .toLocaleLowerCase("tr-TR");


    const filteredItems =
        menuItems.filter(item => {

            const matchesCategory =
                currentCategory === "all" ||
                item.category === currentCategory;


            const matchesSearch =
                item.name
                    .toLocaleLowerCase("tr-TR")
                    .includes(searchTerm)

                ||

                item.description
                    .toLocaleLowerCase("tr-TR")
                    .includes(searchTerm);


            return matchesCategory && matchesSearch;

        });


    displayMenu(filteredItems);

}


/* =========================================
   CATEGORY BUTTONS
========================================= */

categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        categoryButtons.forEach(btn => {

            btn.classList.remove("active");

        });

        button.classList.add("active");

        currentCategory =
            button.dataset.category;

        filterMenu();

    });

});


/* =========================================
   SEARCH
========================================= */

searchInput.addEventListener(
    "input",
    filterMenu
);


/* =========================================
   OPEN PRODUCT MODAL
========================================= */

function openModal(productId) {

    const item =
        menuItems.find(
            product => product.id === Number(productId)
        );


    if (!item) return;


    modalImage.src = item.image;

    modalImage.alt = item.name;

    modalTitle.textContent =
        item.name;

    modalCategory.textContent =
        item.categoryName;

    modalDescription.textContent =
        item.description;

    modalPrice.textContent =
        formatPrice(item.price);


    modal.classList.add("show");

    document.body.style.overflow = "hidden";

}


/* =========================================
   CLOSE MODAL
========================================= */

function closeProductModal() {

    modal.classList.remove("show");

    document.body.style.overflow = "";

}


/* =========================================
   PRODUCT CLICK
========================================= */

menuContainer.addEventListener(
    "click",
    event => {

        const card =
            event.target.closest(".product-card");

        const button =
            event.target.closest(".view-btn");


        if (button) {

            openModal(button.dataset.id);

            return;

        }


        if (card) {

            openModal(card.dataset.id);

        }

    }
);


/* =========================================
   MODAL EVENTS
========================================= */

closeModal.addEventListener(
    "click",
    closeProductModal
);


modal.addEventListener(
    "click",
    event => {

        if (event.target === modal) {

            closeProductModal();

        }

    }
);


document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            closeProductModal();

        }

    }
);


/* =========================================
   INITIALIZE
========================================= */

displayMenu(menuItems);
```
