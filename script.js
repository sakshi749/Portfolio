const menuIcon = document.querySelector(".menu-icon");
const navMenu = document.querySelector(".navbar ul");
const form = document.getElementById('form');
const submitBtn = form.querySelector('button[type="submit"]');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    formData.append("access_key", "46ecef70-cd5e-4000-a0f2-c58ca7f6cc81");

    const originalText = submitBtn.textContent;

    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (response.ok) {
            alert("Success! Your message has been sent.");
            form.reset();
        } else {
            alert("Error: " + data.message);
        }

    } catch (error) {
        alert("Something went wrong. Please try again.");
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
});

menuIcon.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});


    let sections = document.querySelectorAll('section');
    let navlinks = document.querySelectorAll('header nav a'); 
    
    window.onscroll= () => {
       sections.forEach(sec => { 
        let top = window.scrollY; 
        let offset = sec.offsetTop - 150; 
        let height = sec.offsetHeight;
         let id = sec.getAttribute('id'); 
    
         if(top >= offset && top< offset+ height)
      { navlinks.forEach(links => { links.classList.remove('active'); 
        document.querySelector('header nav a[href*=' +id+ "]").classList.add('active'); }); }; });
     

     let header = document.querySelector('header');
     header.classList.toggle('sticky', window.scrollY > 100);
   

   menuIcon.classList.remove('bx-x');
   navbar.classList.remove('active');
};

/*scroll reveal*/
 ScrollReveal({ 
   //reset: true,
   distance: '80px',
   duration: 2000,
   delay: 200
  });

  ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
    ScrollReveal().reveal('.home-img, .skills-container, .portfolio-box, .contact form', { origin: 'bottom' });
   ScrollReveal().reveal('.home-content h1, .about-img', {origin:'left'});
         ScrollReveal().reveal('.home-content p, .about-content', {origin:'right'});
