

// Render cart items
const checkoutItemsContainer = document.querySelector('.checkout-items');
checkoutItemsContainer.innerHTML = '';

cart.forEach(item => {
    const div = document.createElement('div');
    div.className = 'checkout-item';
    div.innerHTML = `
        <p>${item.name} x ${item.quantity} - $${(item.price * item.quantity).toFixed(2)}</p>
    `;
    checkoutItemsContainer.appendChild(div);
});

// Render totals
document.getElementById('checkout-total-items').textContent = getCartItemCount();
document.getElementById('checkout-total-amount').textContent = getCartTotal().toFixed(2);

// Handle form submission
const checkoutForm = document.getElementById('checkout-form');
checkoutForm.addEventListener('submit', function(e) {
    e.preventDefault();

    if (cart.length === 0) {
        alert('Your cart is empty');
        return;
    }

    const formData = new FormData(checkoutForm);
    const order = {
        name: formData.get('name'),
        email: formData.get('email'),
        address: formData.get('address'),
        phone: formData.get('phone'),
        items: cart,
        total: getCartTotal()
    };

    console.log('Order placed:', order);

    document.getElementById('order-message').textContent = '✅ Order placed successfully!';

    // Clear cart after order
    clearCart();

});



document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("checkout-form");
  if (!form) return;

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const addressInput = document.getElementById("address");
  const phoneInput = document.getElementById("phone");

  const nameError = document.getElementById("name-error");
  const emailError = document.getElementById("email-error");
  const addressError = document.getElementById("address-error");
  const phoneError = document.getElementById("phone-error");

  function validateName() {
    const value = nameInput.value.trim();
    if (!value) {
      nameError.textContent = "Full name is required.";
      return false;
    }
    nameError.textContent = "";
    return true;
  }

  function validateEmail() {
    const value = emailInput.value.trim();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value) {
      emailError.textContent = "Email is required.";
      return false;
    }
    if (!regex.test(value)) {
      emailError.textContent = "Enter a valid email.";
      return false;
    }
    emailError.textContent = "";
    return true;
  }

  function validateAddress() {
    const value = addressInput.value.trim();
    if (!value) {
      addressError.textContent = "Address is required.";
      return false;
    }
    addressError.textContent = "";
    return true;
  }

  function validatePhone() {
    const value = phoneInput.value.trim();
    const regex = /^[0-9]{8,15}$/;
    if (!value) {
      phoneError.textContent = "Phone number is required.";
      return false;
    }
    if (!regex.test(value)) {
      phoneError.textContent = "Enter a valid phone number.";
      return false;
    }
    phoneError.textContent = "";
    return true;
  }

  nameInput.addEventListener("input", validateName);
  emailInput.addEventListener("input", validateEmail);
  addressInput.addEventListener("input", validateAddress);
  phoneInput.addEventListener("input", validatePhone);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const valid =
      validateName() &&
      validateEmail() &&
      validateAddress() &&
      validatePhone();

    if (!valid) return;

    // Process order (example)
    console.log("Order placed:", {
      name: nameInput.value,
      email: emailInput.value,
      address: addressInput.value,
      phone: phoneInput.value,
    });

    alert(`Thank you, ${nameInput.value}. Your order has been placed!`);
    form.reset();
  });
});
