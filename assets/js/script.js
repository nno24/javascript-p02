function sendEmail(event){
    event.preventDefault();
    var msgForm = {
        subject: document.getElementById('subject').value,
        visitorEmail: document.getElementById('visitor-email').value,
        message: document.getElementById('message').value,
    };
    emailjs.send('service_oos6518','template_pvbbqr9',msgForm,'user_kiqzH3B0iil4Aqd5GL188');
    contactForm.reset();
    greetingSummary(msgForm.subject,msgForm.message);

}

function greetingSummary(subj,msg) {
    let msgSummary = `
        <h2>Success!</h2>
        <h2>Thank you for reaching out</h2>
        <p style="text-align: center;">Subject: <i>${subj}</i></p>
        <p style="text-align: center;"><i>${msg}</i></p>
    `;
        //Add a greeting message
        let contactDiv = document.getElementById('contact-div');
        contactDiv.remove();
    
        let summary = document.createElement("div");
        summary.style.textAlign = "center";
        summary.innerHTML=msgSummary;
        let contactSection = document.getElementById('contact');
        contactSection.appendChild(summary);
        console.log(summary);
    
}

/*Event listener for the submit event*/
let contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit' , sendEmail);

