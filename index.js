var editableContents = document.querySelectorAll('.editable-content');
editableContents.forEach(function (content) {
    content.addEventListener('input', function () {
        var newContent = content.textContent;
    });
});
