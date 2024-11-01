const editableContents = document.querySelectorAll('.editable-content');
      const submitButton = document.getElementById('submitButton') as HTMLButtonElement;
      let isEdited = false;

      // Add event listener to each editable content area
      editableContents.forEach(content => {
        content.addEventListener('input', () => {
          isEdited = true;
          submitButton.disabled = false; // Enable submit button after any edit
        });
      });

      function submitForm() {
        if (isEdited) {
          window.location.href = 'nextpage.html'; // Navigate to the next page if fields have been edited
        } else {
          alert('Please make some changes before submitting.');
        }
      }