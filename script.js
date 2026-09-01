'use strit';
console.log("java script ini berhasil di jalankan");

// AKTIFKAN TOGGLE NAVBAR
const navbar = document.getElementById("ulNavbar");
const hamburger = document.getElementById("hamburgerBar");

hamburger.addEventListener("click", () => {
    navbar.classList.toggle("active");
});
document.querySelectorAll("#ulNavbar a").forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.toggle("active");
    });
});

// ANIMASI BAGIAN NAVBAR 
// ANIMASI BAGIAN NAVBAR
const navbar2 = document.getElementById("navbar");

if (navbar2) {

    window.addEventListener("scroll", () => {

        if (window.scrollY >= 80) {
            navbar2.classList.add("scrolled");
        } else {
            navbar2.classList.remove("scrolled");
        }

    });

}

// AKTIFKAN PREVIEW PADA TAMPILAN BERANDA PORTOFOLIO
const previewModal = document.getElementById("previewModal");
const previewImage = document.getElementById("previewImage");
const previewTittle = document.getElementById("previewTittle");
let currentDesktop = "";
let currentMobile = "";
document.querySelectorAll(".card-porto").forEach(card => {

    card.addEventListener("click", () => {
        const title = card.dataset.title;
        const desktop = card.dataset.desktop;
        const mobile = card.dataset.mobile;

        currentDesktop = desktop;
        currentMobile = mobile;

        previewTittle.textContent = title;
        previewImage.src = desktop;
        previewImage.alt = title;

        previewModal.showModal();
    });

});
// AKTIFKAN BUTTON PORTFOLIO 
const previewButtons = document.querySelectorAll(".portfolio-modal");

if (previewButtons.length > 0) {

    previewButtons.forEach(button => {

        button.addEventListener("click", () => {

            const mode = button.dataset.previewMode;


            previewButtons.forEach(btn => {
                btn.classList.remove("is-active");
                btn.setAttribute("aria-pressed", "false");
            });


            button.classList.add("is-active");
            button.setAttribute("aria-pressed", "true");


            if (mode === "desktop") {
                previewImage.src = currentDesktop;
                previewImage.classList.remove("mobile-mode");
                previewImage.classList.add("desktop-mode");

            } else if (mode === "mobile") {
                previewImage.src = currentMobile;
                previewImage.classList.remove("desktop-mode");
                previewImage.classList.add("mobile-mode");
            }

        });

    });

}

// TAMBAHKAN LOGIKA TUTUP CARD

if (previewModal) {

    previewModal.addEventListener("click", (e) => {

        const rect = previewModal.getBoundingClientRect();

        const isOutside =
            e.clientX < rect.left ||
            e.clientX > rect.right ||
            e.clientY < rect.top ||
            e.clientY > rect.bottom;

        if (isOutside) {
            previewModal.close();
        }

    });

}

// SETTING UKURAN ISI PORTFOLIO
document.querySelectorAll("[data-preview-mode]").forEach(btn => {
    btn.addEventListener("click", () => {
        if (btn.dataset.previewMode === "mobile") {
            previewImage.src = currentMobile;
            previewImage.classList.remove("desktop-mode");
            previewImage.classList.add("mobile-mode");
        } else {
            previewImage.src = currentDesktop;
            previewImage.classList.remove("mobile-mode");
            previewImage.classList.add("desktop-mode");
        }
    });
});

// MENGHUBUNGKAN TIAP KATEGORI
const buttons = document.querySelectorAll(".porto-tab");
if (buttons.length > 0) {
    const panels = document.querySelectorAll(".porto-panel");
    const mapping = {
        WebApps: "panelWebapp",
        undanganDigital: "panelUndangan",
        website: "panelWebsite"
    };

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            buttons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
            panels.forEach(panel => panel.classList.remove("active"));
            const panelId = mapping[button.dataset.tab];
            const panel = document.getElementById(panelId);
            if (panel) {
                panel.classList.add("active");
            }
        });
    });
}

// MENGHUBUNGKAN TIAP KATEGORI DI HALAMAN PRODUKDIGITAL.HTML
const btnProduk = document.querySelectorAll(".btn-produk");
if(btnProduk.length > 0){
    const panels2 = document.querySelectorAll(".porto-produk2");
    const mapping2 = {
        temafoto: "panelTemafoto",
        tanpafoto: "panelTanpafoto",
        nonwedding: "panelNonwedding"
    };

    btnProduk.forEach(button => {
        button.addEventListener("click", () => {
            btnProduk.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
            panels2.forEach(panel => panel.classList.remove("active"));
            const panelId2 = mapping2[button.dataset.tab];
            const panel2 = document.getElementById(panelId2);
            if(panel2){
                panel2.classList.add("active");
            }
        });
    });
}

// CARD HALAMAN PORTOFOLIO
const modal = document.getElementById("portfolioModal");
const close = document.getElementById("closeCard");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalWhasapp = document.getElementById("modalWhatsapp");

if (modal && close) {
    close.addEventListener("click", () => {
        modal.close();
    });
};

document.querySelectorAll(".galleri-porto").forEach(card => {
    card.addEventListener("click", () => {
        console.log("card di klik");
        modalImage.src = card.dataset.image;
        modalTitle.textContent = card.dataset.title;
        modalDescription.textContent = card.dataset.description;
        modalWhatsapp.href = card.dataset.whatsapp;

        console.log(modalTitle.textContent);
        console.log(modalDescription.textContent);

        modal.showModal();
        card.blur();
    });
});

// AKTIFKAN ANIMASI KONTEN
const animasiElement = document.querySelectorAll(
    '.fade-up, .fade-left, .fade-right, .zoom-in'
);
const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
});

animasiElement.forEach((el) =>{
    observer.observe(el);
});
