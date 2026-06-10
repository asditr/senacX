// script.js - New Member

const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;
const header = document.querySelector('header');

// ===================== TOGGLE DE TEMA =====================
function toggleTheme() {
    body.classList.toggle('dark');
    
    if (body.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
        if (toggleBtn) toggleBtn.innerHTML = '<i class="ti ti-sun"></i>';
    } else {
        localStorage.setItem('theme', 'light');
        if (toggleBtn) toggleBtn.innerHTML = '<i class="ti ti-moon"></i>';
    }
}

// ===================== CARREGAR TEMA SALVO =====================
function loadSavedTheme() {
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark');
        if (toggleBtn) toggleBtn.innerHTML = '<i class="ti ti-sun"></i>';
    } else if (toggleBtn) {
        toggleBtn.innerHTML = '<i class="ti ti-moon"></i>';
    }
}

// ===================== SCROLL HEADER =====================
function handleScroll() {
    if (header) {
        if (window.scrollY > 80) { 
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
}

// ===================== INICIALIZAÇÃO =====================
document.addEventListener('DOMContentLoaded', () => {
    loadSavedTheme();
    
    // Ouvinte do Dark Mode
    if (toggleBtn) {
        toggleBtn.addEventListener('click', toggleTheme);
    }
    
    // Ouvinte do Scroll
    window.addEventListener('scroll', handleScroll);
});