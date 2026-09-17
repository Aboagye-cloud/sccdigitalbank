document.addEventListener('DOMContentLoaded', function () {
    var btnSubmit = document.getElementById('btnSubmit');
    var statusMessage = document.getElementById('lblStatusMessage');
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    var fields = {
        txtFullName: { required: true, errorId: 'errFullName', label: 'Full name' },
        txtEmail: { required: true, email: true, errorId: 'errEmail', label: 'Email address' },
        txtSubject: { required: true, errorId: 'errSubject', label: 'Subject' },
        txtMessage: { required: true, errorId: 'errMessage', label: 'Message' }
    };

    function showError(inputId, message) {
        var input = document.getElementById(inputId);
        var errorEl = document.getElementById(fields[inputId].errorId);
        input.classList.add('invalid');
        if (errorEl) {
            errorEl.textContent = message;
            errorEl.classList.add('show');
        }
    }

    function clearError(inputId) {
        var input = document.getElementById(inputId);
        var errorEl = document.getElementById(fields[inputId].errorId);
        input.classList.remove('invalid');
        if (errorEl) {
            errorEl.classList.remove('show');
        }
    }

    function validateField(inputId) {
        var rule = fields[inputId];
        var input = document.getElementById(inputId);
        var value = input.value.trim();

        if (rule.required && value === '') {
            showError(inputId, rule.label + ' is required.');
            return false;
        }
        if (rule.email && !emailPattern.test(value)) {
            showError(inputId, 'Please enter a valid email address.');
            return false;
        }
        clearError(inputId);
        return true;
    }

    // Validate a field as soon as the user leaves it
    Object.keys(fields).forEach(function (inputId) {
        document.getElementById(inputId).addEventListener('blur', function () {
            validateField(inputId);
        });
    });

    btnSubmit.addEventListener('click', function () {
        var isValid = true;

        Object.keys(fields).forEach(function (inputId) {
            if (!validateField(inputId)) {
                isValid = false;
            }
        });

        if (!isValid) {
            statusMessage.style.display = 'none';
            // Focus the first invalid field for convenience
            var firstInvalid = document.querySelector('.form-control.invalid');
            if (firstInvalid) firstInvalid.focus();
            return;
        }

        statusMessage.textContent = 'Thank you! Your message has been sent successfully.';
        statusMessage.style.display = 'block';

        Object.keys(fields).forEach(function (inputId) {
            document.getElementById(inputId).value = '';
        });
    });
});