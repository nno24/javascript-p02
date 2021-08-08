function sendEmail(event){
    event.preventDefault();
    var msgForm = {
        subject: document.getElementById('subject').value,
        visitorEmail: document.getElementById('visitor-email').value,
        message: document.getElementById('message').value,
    };
    let validate = validateForm(msgForm.subject,msgForm.visitorEmail,msgForm.message);
    if ( validate == false) {
        return false;
    }
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

function validateForm(subj,addr,msg) {
    //Make sure the subject field is not only spaces
    if ( !subj.trim().length ) {
        alert("Your subject can't be empty..");
        return false;
    }

    //Make sure message field is not only spaces
    if ( !msg.trim().length ) {
        alert("Your message can't be empty..");
        return false;
    }

    //Simple email dot validation
    if ( !addr.includes('.')) {
        alert("Please fill out your email correctly..");
        return false;
    }


}

/*Event listener for the submit event*/
let contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit' , sendEmail);

