function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
  
    const serviceID = "service_hfiv237";
    const templateID = "template_vrlbu6h";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          alert("Your response sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  
  }










// Initialize EmailJS with your service ID
// emailjs.init('YOUR_USER_ID');

// // Send email function
// function sendEmail() {
//   // Prevent the default form submission
//   event.preventDefault();

//   // Get form values
//   const recipient = document.getElementById("recipient").value;
//   const subject = document.getElementById("subject").value;
//   const message = document.getElement   ById("message").value;

//   // Use EmailJS to send email
//   emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
//     to_email: recipient,
//     subject: subject,
//     message_html: message
//   })
//   .then(function(response) {
//     console.log('SUCCESS!', response.status, response.text);
//     alert('Email sent successfully!');
//     // Optionally reset form fields
//     document.getElementById("emailForm").reset();
//   }, function(error) {
//     console.log('FAILED...', error);
//     alert('Failed to send email!');
//   });
// }

// // Add submit event listener to the form
// document.getElementById("emailForm").addEventListener("submit", sendEmail);