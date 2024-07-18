// document.querySelectorAll('.userForm').forEach(form => {
//     form.addEventListener('submit', function(event) {
//         event.preventDefault();
        
//         // Clear previous error messages
//         const inputs = this.querySelectorAll('input');
//         inputs.forEach(input => {
//             input.classList.remove('border-red-600', 'border-green-600');
//             const errorElement = document.getElementById(`${input.id}Error`);
//             if (errorElement) errorElement.classList.add('hidden');
//         });
        
//         let valid = true;
        
//         // Define validation rules based on input IDs
//         inputs.forEach(input => {
//             const value = input.value.trim();
//             let isValid = true;
//             if (!value) {
//                 isValid = false;
//             } else if (input.id === 'number' && !/^\d+$/.test(value)) {
//                 isValid = false;
                
//                 // 
//                 if (!number || !/^\d{10}$/.test(number)) {
//                     valid = false;
//                     document.getElementById('numberError').classList.remove('hidden');
//                     document.getElementById('number').classList.add('border-red-600');
//                 } else {
//                     document.getElementById('number').classList.add('border-green-600');
//                 }
//                 // 
//             } else if (input.id === 'email' && !/\S+@\S+\.\S+/.test(value)) {
//                 isValid = false;
//             } else if (input.id === 'password' && value.length < 6) {
//                 isValid = false;
//             }
            
//             if (!isValid) {
//                 valid = false;
//                 document.getElementById(`${input.id}Error`).classList.remove('hidden');
//                 input.classList.add('border-red-600');
//             } else {
//                 input.classList.add('border-green-600');
//             }
//         });
        
//         // If all validations pass, you can proceed
//         if (valid) {
//             alert('Form submitted successfully!');
//         }
//     });
// });







// document.getElementById('userForm').addEventListener('submit', function(event) {
//     event.preventDefault();
    
//     // Clear previous error messages
//     const inputs = document.querySelectorAll('input');
//     inputs.forEach(input => {
//         input.classList.remove('border-red-600');
//         input.classList.remove('border-green-600');
//         const errorElement = document.getElementById(`${input.id}Error`);
//         if (errorElement) errorElement.classList.add('hidden');
//     });
    
//     // Retrieve form values
//     const name = document.getElementById('name').value.trim();
//     const number = document.getElementById('number').value.trim();
//     const email = document.getElementById('email').value.trim();
//     const password = document.getElementById('password').value.trim();
//     const confirmPassword = document.getElementById('confirmPassword').value.trim();
    
//     let valid = true;

//     // Validate Name
//     if (!name) {
//         valid = false;
//         document.getElementById('nameError').classList.remove('hidden');
//         document.getElementById('name').classList.add('border-red-600');
//     } else {
//         document.getElementById('name').classList.add('border-green-600');
//     }
    
//     // Validate Number
// if (!number || !/^\d{10}$/.test(number)) {
//     valid = false;
//     document.getElementById('numberError').classList.remove('hidden');
//     document.getElementById('number').classList.add('border-red-600');
// } else {
//     document.getElementById('number').classList.add('border-green-600');
// }


//     // Validate Email
//     if (!email || !/\S+@\S+\.\S+/.test(email)) {
//         valid = false;
//         document.getElementById('emailError').classList.remove('hidden');
//         document.getElementById('email').classList.add('border-red-600');
//     } else {
//         document.getElementById('email').classList.add('border-green-600');
//     }
//     // Validate Password
//     if (!password) {
//         valid = false;
//         document.getElementById('passwordError').textContent = "Please fill this field";
//         document.getElementById('passwordError').classList.remove('hidden');
//         document.getElementById('password').classList.add('border-red-600');
//     } else if (password.length < 6) {
//         valid = false;
//         document.getElementById('passwordError').textContent = "Password must be at least 6 characters";
//         document.getElementById('passwordError').classList.remove('hidden');
//         document.getElementById('password').classList.add('border-red-600');
//     } else {
//         document.getElementById('password').classList.add('border-green-600');
//     }

//     // Validate Confirm Password
//     if (!confirmPassword) {
//         valid = false;
//         document.getElementById('confirmPasswordError').textContent = "Please fill this field";
//         document.getElementById('confirmPasswordError').classList.remove('hidden');
//         document.getElementById('confirmPassword').classList.add('border-red-600');
//     } else if (confirmPassword !== password) {
//         valid = false;
//         document.getElementById('confirmPasswordError').textContent = "Passwords do not match";
//         document.getElementById('confirmPasswordError').classList.remove('hidden');
//         document.getElementById('confirmPassword').classList.add('border-red-600');
//     } else {
//         document.getElementById('confirmPassword').classList.add('border-green-600');
//     }



//     // If all validations pass, you can proceed (e.g., submit the form or perform further actions)
//     if (valid) {
//         alert('Form submitted successfully!');
//     }
// });















document.querySelectorAll('.userForm').forEach(form => {
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Clear previous error messages
        const inputs = this.querySelectorAll('input');
        inputs.forEach(input => {
            input.classList.remove('border-red-600', 'border-green-600');
            const errorElement = document.getElementById(`${input.id}Error`);
            if (errorElement) errorElement.classList.add('hidden');
        });
        
        let valid = true;
        
        // Retrieve form values dynamically based on input fields present
        const formValues = {};
        inputs.forEach(input => {
            formValues[input.id] = input.value.trim();
        });

        // Validate fields based on their presence in the form
        if (formValues['name'] !== undefined) {
            if (!formValues['name']) {
                valid = false;
                document.getElementById('nameError').classList.remove('hidden');
                document.getElementById('name').classList.add('border-red-600');
            } else {
                document.getElementById('name').classList.add('border-green-600');
            }
        }

        if (formValues['number'] !== undefined) {
            if (!formValues['number'] || !/^\d{10}$/.test(formValues['number'])) {
                valid = false;
                document.getElementById('numberError').classList.remove('hidden');
                document.getElementById('number').classList.add('border-red-600');
            } else {
                document.getElementById('number').classList.add('border-green-600');
            }
        }

        if (formValues['email'] !== undefined) {
            if (!formValues['email'] || !/\S+@\S+\.\S+/.test(formValues['email'])) {
                valid = false;
                document.getElementById('emailError').classList.remove('hidden');
                document.getElementById('email').classList.add('border-red-600');
            } else {
                document.getElementById('email').classList.add('border-green-600');
            }
        }

        // Password validation regex for a strong password
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

        if (formValues['password'] !== undefined) {
            if (!formValues['password']) {
                valid = false;
                document.getElementById('passwordError').textContent = "Please fill this field";
                document.getElementById('passwordError').classList.remove('hidden');
                document.getElementById('password').classList.add('border-red-600');
            } else if (!passwordRegex.test(formValues['password'])) {
                valid = false;
                document.getElementById('passwordError').textContent = "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character";
                document.getElementById('passwordError').classList.remove('hidden');
                document.getElementById('password').classList.add('border-red-600');
            } else {
                document.getElementById('password').classList.add('border-green-600');
            }
        }

        if (formValues['confirmPassword'] !== undefined) {
            if (!formValues['confirmPassword']) {
                valid = false;
                document.getElementById('confirmPasswordError').textContent = "Please fill this field";
                document.getElementById('confirmPasswordError').classList.remove('hidden');
                document.getElementById('confirmPassword').classList.add('border-red-600');
            } else if (formValues['confirmPassword'] !== formValues['password']) {
                valid = false;
                document.getElementById('confirmPasswordError').textContent = "Passwords do not match";
                document.getElementById('confirmPasswordError').classList.remove('hidden');
                document.getElementById('confirmPassword').classList.add('border-red-600');
            } else {
                document.getElementById('confirmPassword').classList.add('border-green-600');
            }
        }

        // If all validations pass, you can proceed (e.g., submit the form or perform further actions)
        if (valid) {
            alert('Form submitted successfully!');
        }
    });
});
