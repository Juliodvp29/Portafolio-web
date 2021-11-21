/*===== MENU SHOW =====*/ 

const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
            nav = document.getElementById(navId)
    
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
        nav.classList.toggle('show')
        })
    }
}


showMenu('nav-toggle', 'nav-menu')

/*===== ACTIVE AND  REMOVE MENU=====*/ 

const navLink = document.querySelectorAll('.nav__link')

function linkAction() { 
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

        
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/*===== ANIMATION =====*/ 

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

/* ---- HOME ---*/
sr.reveal('.home__title', {})
sr.reveal('.button', {delay: 200})
sr.reveal('.home_img', {delay: 200})

/* ---- ABOUT ---*/
sr.reveal('.about__img', {delay: 100})

/* ---- SKILLS ---*/
sr.reveal('.skills__subtitle', {})
sr.reveal('.skills__text', {delay: 200})
sr.reveal('.skills__data', {delay: 100})





