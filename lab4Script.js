document.getElementById('alertForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    alert(`Hi ${name}!`);
});


let isBlue = true;
document.getElementById('changeColorButton').addEventListener('click', function() {
    if (isBlue) {
        document.body.style.backgroundColor = 'pink';
    } else {
        document.body.style.backgroundColor = 'blue';
    }
    isBlue = !isBlue;
});


var validation = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
document.getElementById('textTesterForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const text = document.getElementById('textToValidate').value;
    if (validation.test(text)) {
        alert('Text contains special characters!');
    } else {
        alert('Text is valid, no special characters.');
    }
});

// Add Text Section
document.getElementById('addTextButton').addEventListener('click', function() {
    const heading = document.getElementById('page-heading');
    heading.textContent += ' Add Text';
});