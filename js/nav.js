window.addEventListener("load", ()=>{
    // code for hamburger menu
    const toggleBtn = document.querySelector('.toggle_btn')
    const toggleBtnIcon = document.querySelector('.toggle_btn img')
    const linksBg = document.querySelector('.links-bg')
    const linksContainer = document.querySelector('.links')
    
    toggleBtn.onclick = function (){
     linksBg.classList.toggle('open');
    
     const isOpen = linksBg.classList.contains('open');
     linksContainer.classList.toggle('linksPos');
    
     toggleBtnIcon.src = isOpen
      ? 'images/close.svg'
      : 'images/menu.svg'
    }
});


//code for adding active class to the nav links

const navLinks = document.querySelectorAll('.nav .links span');

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    let sectionId = entry.target.getAttribute('id');
    const link = document.querySelector(`.nav .links span a[href="#${sectionId}"]`).parentNode;

    if (sectionId === 'home') {
      link.classList.remove('active');
    } else if (entry.isIntersecting) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}, {
  root: null,
  rootMargin: '0px',
  threshold: 0.5
});

document.querySelectorAll('section').forEach(section => {
  sectionObserver.observe(section);
});

// Additional handling for initial active link
const firstSectionId = document.querySelector('section').getAttribute('id');
const firstLink = document.querySelector(`.nav .links span a[href="#${firstSectionId}"]`).parentNode;
firstLink.classList.add('active');

/*
 // Get all the navigation links
 const navLinks = document.querySelectorAll('.nav .links span');

 // Add a click event listener to each navigation link
 navLinks.forEach(link => {
   link.addEventListener('click', function() {
     // Remove the "active" class from all navigation links
     navLinks.forEach(link => link.classList.remove('active'));

     // Add the "active" class to the clicked navigation link
     this.classList.add('active');
   });
 });*/






