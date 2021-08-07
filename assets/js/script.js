function sendEmail(event){
    event.preventDefault();
    let msgForm = {
        subject: document.getElementById('subject').value,
        visitorEmail: document.getElementById('visitor-email').value,
        message: document.getElementById('message').value,
    };
    emailjs.send('service_oos6518','template_pvbbqr9',msgForm,'user_kiqzH3B0iil4Aqd5GL188');

}

/*Event listener for the submit event*/
let contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit' , sendEmail);

