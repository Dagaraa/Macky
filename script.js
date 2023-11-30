document.getElementById("contactButton").addEventListener("click", function() {
    const templateParams = {
        to_email: 'your_email@gmail.com',
        message: 'Someone pressed the button!',
    };

    emailjs.send('default_service', templateID, templateParams)
        .then(function(response) {
            console.log('Email sent successfully:', response);
            alert('Email sent successfully');
        }, function(error) {
            console.error('Error sending email:', error);
            alert('Error sending email');
        });
});
