
/* ===== MENU NAVIGASI HP ===== */
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Tutup menu" : "Buka menu"
    );
    menuToggle.textContent = isOpen ? "✕" : "☰";
  });

  // Tutup menu setelah tautan dipilih
  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Buka menu");
      menuToggle.textContent = "☰";
    });
  });

  // Tutup menu jika layar kembali ke ukuran desktop
  window.addEventListener("resize", () => {
    if (window.innerWidth > 650) {
      navMenu.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Buka menu");
      menuToggle.textContent = "☰";
    }
  });
}

/* ===== TAHUN COPYRIGHT OTOMATIS ===== */
const yearElement = document.querySelector("#year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

/* ===== KONTAK WHATSAPP ===== */
// Ganti dengan nomor WhatsApp bisnis kamu.
// Gunakan kode negara 62 tanpa tanda + atau angka 0 di awal.
const whatsappNumber = "6281234567890";

const contactLink = document.querySelector("#contact-link");
const contactLabel = document.querySelector("#contact-label");

if (contactLink && contactLabel) {
  if (whatsappNumber === "6281234567890") {
    contactLabel.textContent = "Atur Nomor WhatsApp";
  } else {
    const message = encodeURIComponent(
      "Halo Delint Fhotografil, saya ingin bertanya tentang layanan fotografi."
    );

    contactLink.href =
      `https://wa.me/${whatsappNumber}?text=${message}`;

    contactLabel.textContent = "Hubungi via WhatsApp";
  }
}
