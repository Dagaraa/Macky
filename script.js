document.getElementById("contactButton").addEventListener("click", function() {
    // Replace with your actual Email.js user ID and template ID
    const emailjsUserID = 'caxMEA9GA3ZLKoV_P';
    const templateID = 'template_76bddq8';

    emailjs.init(emailjsUserID);

    const templateParams = {
        to_email: 'cwhite567@hotmail.com',
        message_html: 'Someone clicked the contact button!'
    };

    emailjs.send('default_service', templateID, templateParams)
        .then(function(response) {
            console.log('Email sent successfully:', response);
        }, function(error) {
            console.log('Email send failed:', error);
        });
});
