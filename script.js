// =====================================================
// SÉRGIO PESCADOS — CONFIGURAÇÃO RÁPIDA
// Troque apenas o número abaixo pelo WhatsApp da peixaria.
// Use DDI + DDD + número, sem espaços, sinais ou parênteses.
// Exemplo: 5547999999999
// =====================================================
const WHATSAPP_NUMBER = "5548991517140";

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector("#navLinks");

menuToggle?.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.innerHTML = isOpen
    ? '<i class="fa-solid fa-xmark"></i>'
    : '<i class="fa-solid fa-bars"></i>';
});

document.querySelectorAll("#navLinks a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
    if (menuToggle) menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
  });
});

document.querySelectorAll(".js-whatsapp").forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();

    const message = link.dataset.message || "Olá! Vim pelo site da Sérgio Pescados.";
    const cleanNumber = WHATSAPP_NUMBER.replace(/\D/g, "");

    if (cleanNumber === "5500000000000") {
      alert("Configure o número do WhatsApp da Sérgio Pescados no arquivo script.js.");
      return;
    }

    const url = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

document.querySelector("#year").textContent = new Date().getFullYear();
