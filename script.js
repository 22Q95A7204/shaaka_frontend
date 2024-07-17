/*document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { id: 1, name: 'Tomatoes', price: 2.99 },
        { id: 2, name: 'Cucumbers', price: 1.99 },
        { id: 3, name: 'Carrots', price: 3.49 },
    ];

    const productList = document.getElementById('product-list');

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: $${product.price.toFixed(2)}</p>
            <button>Add to Cart</button>
        `;
        productList.appendChild(productDiv);
    });

    document.getElementById('contact-form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Message sent!');
    });
//});*/
// employment

// Get the register form and sign in form
// script.js

// Get the forms
const registerForm = document.getElementById('registerForm');
const loginform = document.getElementById('loginForm');

// Add event listeners to the forms
registerForm.addEventListener('submit', validateRegisterForm);
loginForm.addEventListener('submit', validateLoginForm);

// Function to validate the register form
function validateRegisterForm(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const mobileNumber = document.getElementById('mobile_number').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const foodType = document.querySelector('input[name="foodType"]:checked').value;

    // Validate form data
    if (name === '' || mobileNumber === '' || email === '' || password === '' || confirmPassword === '' || foodType === '') {
        alert('Please fill in all fields');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    // Submit the form
    registerForm.submit();
}

// Function to validate the login form
function validateLoginForm(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validate form data
    if (email === '' || password === '') {
        alert('Please fill in all fields');
        return;
    }

    // Submit the form
    loginForm.submit();
}

//employment

//customer.html

// Get the forms and login status element
const signUpForm = document.getElementById('sign-up-form');
const signinForm = document.getElementById('sign-in-form');
const loginStatus = document.getElementById('login-status');

// Add event listeners to the forms
signUpForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    // You can add code here to send the form data to a server or perform some other action
    alert(`Thank you for signing up, ${name}!`);
});

signInForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    // You can add code here to send the form data to a server or perform some other action
    alert(`Welcome back, ${email}!`);
});

// Update the login status element
loginStatus.innerHTML = 'Not logged in';

//customer.html

//farmer.html

// Get the forms
const registrationForm = document.getElementById('registration-form');
const loginForm = document.getElementById('login-form');
const productForm = document.getElementById('product-form');

// Add event listeners to the forms
registrationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    // You can add code here to send the form data to a server or perform some other action
    alert(`Registration successful! Name: ${name}, Email: ${email}`);
});

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    // You can add code here to send the form data to a server or perform some other action
    alert(`Login successful! Email: ${email}`);
});

productForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const productName = document.getElementById('product-name').value;
    const productDescription = document.getElementById('product-description').value;
    const productPrice = document.getElementById('product-price').value;
    // You can add code here to send the form data to a server or perform some other action
    alert(`Product submitted! Name: ${productName}, Description: ${productDescription}, Price: ${productPrice}`);
});
//farmer.html

//product.html

// script.js

const form = document.getElementById('add-product-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const productName = document.getElementById('product_name').value;
  const productDescription = document.getElementById('product_description').value;
  const price = document.getElementById('price').value;
  const quantity = document.getElementById('quantity').value;
  const productImage = document.getElementById('product_image').files[0];

  if (productName === '' || productDescription === '' || price === '' || quantity === '') {
    alert('Please fill in all fields');
    return;
  }

  // Create a new FormData object
  const formData = new FormData();

  formData.append('product_name', productName);
  formData.append('product_description', productDescription);
  formData.append('price', price);
  formData.append('quantity', quantity);
  formData.append('product_image', productImage);

  // Send the form data to the server using XMLHttpRequest
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'add_product.php', true);
  xhr.send(formData);

  xhr.onload = function() {
    if (xhr.status === 200) {
      alert('Product added successfully!');
    } else {
      alert('Error adding product: ' + xhr.statusText);
    }
  };
});

//product.html