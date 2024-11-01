const editableContents = document.querySelectorAll('.editable-content');

    editableContents.forEach(content => {
      content.addEventListener('input', function () {
        const newContent = content.textContent;
      console.log(editableContents)
      });
    });