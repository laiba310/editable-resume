var editableContents = document.querySelectorAll('.editable-content');
var submitButton = document.getElementById('submitButton');
var isEdited = false;
// Add event listener to each editable content area
editableContents.forEach(function (content) {
    content.addEventListener('input', function () {
        isEdited = true;
        submitButton.disabled = false; // Enable submit button after any edit
    });
});
function submitForm() {
    if (isEdited) {
        window.location.href = 'nextpage.html'; // Navigate to the next page if fields have been edited
    }
    else {
        alert('Please make some changes before submitting.');
    }
}
