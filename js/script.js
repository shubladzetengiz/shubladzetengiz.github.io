
// === Age Counter ===
function calculateAge() {
    const birthDate = new Date('1998-06-01');
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    document.getElementById('ageCounter').textContent = age;
}
calculateAge();

// === QR Code Modal ===
const qrBtn = document.getElementById('qrBtn');
const qrModal = document.getElementById('qrModal');
const qrClose = document.getElementById('qrClose');
const qrImg = document.getElementById('qrImg');
const qrUrl = document.getElementById('qrUrl');

function generateQR() {
    const pageUrl = window.location.href;
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(pageUrl)}&margin=10`;
    qrImg.alt = `QR Code pour ${pageUrl}`;
    qrUrl.textContent = pageUrl.length > 50 ? pageUrl.substring(0, 47) + '...' : pageUrl;
}

qrBtn.addEventListener('click', () => {
    generateQR();
    qrModal.classList.add('active');
    document.body.style.overflow = 'hidden';
});

function closeQR() {
    qrModal.classList.remove('active');
    document.body.style.overflow = '';
}

qrClose.addEventListener('click', closeQR);
qrModal.addEventListener('click', (e) => {
    if (e.target === qrModal) closeQR();
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeQR();
});

// === Scroll Animation ===
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// === Smooth Scroll ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// === Active Navigation ===
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href') === `#${current}`) {
            link.style.color = 'var(--primary)';
        }
    });
});
