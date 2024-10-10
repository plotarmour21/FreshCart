new Swiper(".category-carousel", {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});

new Swiper(".testimonial-carousel", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  //   pagination: {
  //     el: ".swiper-pagination",
  //     clickable: false,
  //   },
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Simple product sorting (client-side)
document.getElementById("sort-select").addEventListener("change", function () {
  const sortValue = this.value;
  const productGrid = document.querySelector(".product-grid");
  const products = Array.from(productGrid.children);

  products.sort((a, b) => {
    const aPrice = parseFloat(
      a.querySelector(".product-info p").textContent.replace("$", "")
    );
    const bPrice = parseFloat(
      b.querySelector(".product-info p").textContent.replace("$", "")
    );
    const aName = a.querySelector(".product-info h3").textContent;
    const bName = b.querySelector(".product-info h3").textContent;

    switch (sortValue) {
      case "price-low-high":
        return aPrice - bPrice;
      case "price-high-low":
        return bPrice - aPrice;
      case "name-a-z":
        return aName.localeCompare(bName);
      case "name-z-a":
        return bName.localeCompare(aName);
      default:
        return 0;
    }
  });

  productGrid.innerHTML = "";
  products.forEach((product) => productGrid.appendChild(product));
});

// // Mobile menu toggle
// const mobileMenuToggle = document.createElement("button");
// mobileMenuToggle.textContent = "Menu";
// mobileMenuToggle.classList.add("mobile-menu-toggle");
// document.querySelector(".header-content").prepend(mobileMenuToggle);

// mobileMenuToggle.addEventListener("click", () => {
//   document.querySelector("nav").classList.toggle("active");
// });
