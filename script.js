///////////////////////////////////////////////////////////
// Membuat mobile navigation
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  // untuk menambahkan class nav-open pada bagian header agar dapat memperlihatkan menu navigasi jika nav tidak ada
  headerEl.classList.toggle("nav-open");

  // const href = link.getAttribute("href");
  // console.log(href);
  // if (href === "#") {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // }
});
