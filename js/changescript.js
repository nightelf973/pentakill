  function handleAvatarChange(selectEl) {
    const selectedValue = selectEl.value;

    // Change avatar image
    document.getElementById('changeable').src = selectedValue;

    // Remove the 'Choose your avatar' option if a different one is selected
    const firstOption = selectEl.options[0];
    if (firstOption.text === 'Choose your avatar' && selectedValue !== firstOption.value) {
      selectEl.remove(0);
    }
  }

  function validateAvatarSelection() {
    const selectEl = document.getElementById('avatarSelect');
    const selectedValue = selectEl.value;

    if (selectedValue === "images/white.png") {
      alert("Please select a valid avatar before submitting.");
      return false;
    }

    return true;
  }
