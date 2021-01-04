const navSlid = () => {
    const burgur = document.querySelector('.Burgur');
    const nav = document.querySelector('.Nav-Links')

    burgur.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });
}

navSlid();