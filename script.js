'strict use';

const searchEl = document.querySelector('.search');
searchEl.addEventListener('click', function () {
  searchEl.style.boxShadow = '0px 0px 2px 2px orange';
});

document.addEventListener('click', function (event) {
  if (!searchEl.contains(event.target)) {
    searchEl.style.boxShadow = 'none';
  }
});

let slider = document.querySelectorAll('.hero-image');
let slideCount = 0;
let forward = true;

let nextSlide = () => {
  slider[slideCount].style.transform = `translateX(-${slideCount * 100}%)`;
  if (slideCount == slider.length - 1) {
    forward = false;
    slideCount -= 1;
  }
  slideCount++;
};
let prevSlide = () => {
  if (slideCount == 1) {
    forward = true;
  }
  slider[slideCount].style.transform = `translateX(${slideCount * 100}%)`;
  slideCount--;
};

setInterval(() => {
  if (forward == true) {
    nextSlide();
  } else {
    prevSlide();
  }
}, 5000);
//////////////////////////////////////////////

//////// Routing ///////////
let onCartPage = false;

const products = [
  {
    id: 0,
    refName: 'Product-1',
    dealPercent: '91',
    rating: 2,
    title: 'Sony XM8-347539 Camera',
  },
  {
    id: 1,
    refName: 'Product-2',
    dealPercent: '42',
    rating: 4,
    title: 'Canon 8473948 camera',
  },
  {
    id: 2,
    refName: 'Product-3',
    dealPercent: '43',
    rating: 1,
    title: 'Queen Perfumes',
  },
  {
    id: 3,
    refName: 'Product-4',
    dealPercent: '44',
    rating: 3,
    title: 'GAEA Facial oil',
  },
  {
    id: 4,
    refName: 'Product-5',
    dealPercent: '45',
    rating: 4,
    title: 'Basic wooden chair',
  },
  {
    id: 5,
    refName: 'Product-6',
    dealPercent: '41',
    rating: 4,
    title: 'Basic white running shoes men',
  },
  {
    id: 6,
    refName: 'Product-7',
    dealPercent: '47',
    rating: 3,
    title: 'Misolo cosmetic',
  },
  {
    id: 7,
    refName: 'Product-8',
    dealPercent: '48',
    rating: 5,
    title: 'Vintage DSLR camera',
  },
];

let cartProducts = [];

let productsArray = [];

// Selecting product template
const productTemplate = document.querySelector('.product-template');
// Selecting main product container
const productContainer = document.querySelector('.products-container');

function createProductCard(product) {
  // Selecting product tag in template and cloning it
  const productCardEl = productTemplate.content.cloneNode(true).children[0];
  // Selecting Elements of the product template
  const productTitleEl = productCardEl.querySelector('.product-title');
  const productImageEl =
    productCardEl.querySelector('.product-image').children[0];
  const productDealTagEl = productCardEl.querySelector('.deal-tag');
  // Assigning respective values to elements
  productImageEl.attributes.src.textContent = `./images/${product.refName}.jpg`;
  productTitleEl.textContent = product.title;
  productDealTagEl.textContent = `Up to ${product.dealPercent}% off`;
  return productCardEl;
}

function displayProducts() {
  onCartPage == false
    ? (productsArray = products)
    : (productsArray = cartProducts);

  productsArray.forEach((product) => {
    const productCard = createProductCard(product);

    // Displaying Rating
    for (let i = 0; i < product.rating; i++) {
      productCard.querySelector('.rating').children[i].classList.remove('no');
    }

    // Append the cloned and updated product to the products container
    productContainer.append(productCard);

    productCard.querySelector('.btn').addEventListener('click', (e) => {
      cartProducts.push(product);
    });
  });
}

// Rendering Cart products
const cartClick = document.querySelector('.cart-container');
cartClick.addEventListener('click', () => {
  onCartPage = true;
  productContainer.textContent = '';
  displayProducts();
});

// Rendering All products
const homeClick = document.querySelector('.icon-logo');
homeClick.addEventListener('click', () => {
  onCartPage = false;
  productContainer.textContent = '';
  displayProducts();
});


displayProducts();


// Displaying the single cart item instead of duplicate.
