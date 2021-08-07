function sendEmail(event){
    event.preventDefault();
    let msgForm = {
        subject: document.getElementById('subject').value,
        visitorEmail: document.getElementById('visitor-email').value,
        message: document.getElementById('message').value,
    };
    console.log(msgForm);

}

/*Event listener for the submit event*/
let contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit' , sendEmail);

