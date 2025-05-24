//your JS code here. If required.
const inputField = document.getElementById('fname');

    // Add blur event listener
    inputField.addEventListener('blur', function() {
      inputField.value = inputField.value.toUpperCase();
    });