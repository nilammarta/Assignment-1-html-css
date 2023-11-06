///////////////////////////////////////////////////////////
// Membuat mobile navigation
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  // untuk menambahkan class nav-open pada bagian header agar dapat memperlihatkan menu navigasi jika nav tidak ada
  headerEl.classList.toggle("nav-open");
});

// const sectionHeroEL = document.querySelector(".header");

// const obs = new IntersectionObserver(
//   function (entries) {
//     const ent = entries[0];
//     console.log(ent);

//     // lakukan pengecekan apabila halaman sudah memasuki section SELAIN hero-section maka tambahkan sticky nya
//     if (ent.isIntersecting === false) {
//       document.body.classList.add("sticky");
//     }

//     // jika sudah berada pada hero-section hapus bagian sticky nya
//     if (ent.isIntersecting === true) {
//       document.body.classList.remove("sticky");
//     }
//   },
//   {
//     // in the view port
//     root: null,
//     // untuk memulai dari mana elemen akan muncul
//     threshold: 0,
//     // bagian ini untuk memulai menu nav pada bagian akhir dari hero section sesuai dengan ukuran height sticky nya
//     rootMargin: "-80px",
//   }
// );
// obs.observe(sectionHeroEL);
