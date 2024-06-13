
// ON SCROLL ANIMATION
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 10;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);



// const header = document.querySelector('#NavBar');

// window.addEventListener('scroll', () => {
//   if (window.scrollY > 0) {
//     header.classList.add('sticky');
//   } else {
//     header.classList.remove('sticky');
//   }
// });

// // ON SCROLL ANIMATION
// function reveal() {
//   var reveals = document.querySelectorAll(".reveal");

//   for (var i = 0; i < reveals.length; i++) {
//     var windowHeight = window.innerHeight;
//     var elementTop = reveals[i].getBoundingClientRect().top;
//     var elementVisible = 10;

//     if (elementTop < windowHeight - elementVisible) {
//       reveals[i].classList.add("active");
//     } else {
//       reveals[i].classList.remove("active");
//     }
//   }
// }

// window.addEventListener("scroll", reveal);

// // OWL SLIDER
// $(".owl-carousel").owlCarousel({
//   autoplay: true,
//   center: true,
//   loop: true,
//   nav: true,
// });


// // PAGINATION

// const cardsPerPage = 4; // Number of cards to show per page
// const dataContainer = document.getElementById("data-container");
// const pagination = document.getElementById("pagination");
// const prevButton = document.getElementById("prev");
// const nextButton = document.getElementById("next");
// const pageNumbers = document.getElementById("page-numbers");
// const pageLinks = document.querySelectorAll(".page-link");

// const cards = Array.from(dataContainer.getElementsByClassName("card"));

// // Calculate the total number of pages
// const totalPages = Math.ceil((cards.length + 1) / cardsPerPage);
// let currentPage = 1;

// // Function to display cards for a specific page
// function displayPage(page) {
//   const startIndex = (page - 1) * cardsPerPage;
//   const endIndex = startIndex + cardsPerPage;
//   cards.forEach((card, index) => {
//     if (index >= startIndex && index < endIndex) {
//       card.style.display = "block";
//     } else {
//       card.style.display = "none";
//     }
//   });
// }

// // Function to update pagination buttons and page numbers
// function updatePagination() {
//   pageNumbers.textContent = `Page ${currentPage} of ${totalPages}`;
//   prevButton.disabled = currentPage === 1;
//   nextButton.disabled = currentPage === totalPages;
//   pageLinks.forEach((link) => {
//     const page = parseInt(link.getAttribute("data-page"));
//     link.classList.toggle("active", page === currentPage);
//   });
// }

// // Event listener for "Previous" button
// prevButton.addEventListener("click", () => {
//   if (currentPage > 1) {
//     currentPage--;
//     displayPage(currentPage);
//     updatePagination();
//   }
// });

// // Event listener for "Next" button
// nextButton.addEventListener("click", () => {
//   if (currentPage < totalPages) {
//     currentPage++;
//     displayPage(currentPage);
//     updatePagination();
//   }
// });

// // Event listener for page number buttons
// pageLinks.forEach((link) => {
//   link.addEventListener("click", (e) => {
//     e.preventDefault();
//     const page = parseInt(link.getAttribute("data-page"));
//     if (page !== currentPage) {
//       currentPage = page;
//       displayPage(currentPage);
//       updatePagination();
//     }
//   });
// });

// // Initial page load
// displayPage(currentPage);
// updatePagination();
