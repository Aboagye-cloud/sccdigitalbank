document.addEventListener('DOMContentLoaded', function () {
    var btnSubmit = document.getElementById('btnSubmit');
    var successMessage = document.getElementById('successMessage');
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    var fields = {
        fullName: { required: true, errorId: 'errFullName', label: 'Full name' },
        email: { required: true, email: true, errorId: 'errEmail', label: 'Email address' }
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
            successMessage.style.display = 'none';
            var firstInvalid = document.querySelector('.form-control-input.invalid');
            if (firstInvalid) firstInvalid.focus();
            return;
        }

        var accountTypeSelect = document.getElementById('accountType');
        var selectedAccountText = accountTypeSelect.options[accountTypeSelect.selectedIndex].text;
        var fullName = document.getElementById('fullName').value.trim();

        successMessage.textContent = 'Thank you, ' + fullName + '! Your request for ' + selectedAccountText + ' solutions has been received.';
        successMessage.style.display = 'block';

        document.getElementById('fullName').value = '';
        document.getElementById('email').value = '';
    });
});