function sendEmail(event){
    event.preventDefault();
    var msgForm = {
        subject: document.getElementById('subject').value,
        visitorEmail: document.getElementById('visitor-email').value,
        message: document.getElementById('message').value,
    };
    emailjs.send('service_oos6518','template_pvbbqr9',msgForm,'user_kiqzH3B0iil4Aqd5GL188');
    contactForm.reset();
    contactForm.remove();
    greetingSummary(msgForm.subject,msgForm.message);

}

function greetingSummary(subj,msg) {
    let msgSummary = `
        <p><i>${subj}</i></p>
        <br>
        <p><i>${msg}</i></p>
    `;
        //Add a greeting message
        let greeting = document.getElementById('contact-heading');
        greeting.textContent = "Thank you for reaching out!!";
    
        let summary = document.createElement("div");
        summary.innerHTML=msgSummary;
        let contactSection = document.getElementById('contact');
        contactSection.appendChild(summary);
        console.log(summary);
    
}

/*Event listener for the submit event*/
let contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit' , sendEmail);

