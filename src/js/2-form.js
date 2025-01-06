document.addEventListener('DOMContentLoaded', () => {
  const localStorageKey = 'feedback-form-state';
  const formData = {
    email: '',
    message: '',
  };
  const form = document.querySelector('.feedback-form');
  const savedData = localStorage.getItem(localStorageKey);
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    formData.email = parsedData.email;
    formData.message = parsedData.message;

    form.querySelector('input[name="email"]').value = formData.email;
    form.querySelector('textarea[name="message"]').value = formData.message;
  }
  form.addEventListener('input', evt => {
    if (evt.target.name === 'email') {
      formData.email = evt.target.value.trim();
    } else if (evt.target.name === 'message') {
      formData.message = evt.target.value.trim();
    }
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
  });
  form.addEventListener('submit', evt => {
    evt.preventDefault();
    if (!formData.email || !formData.message) {
      alert('fill out all fields');
      return;
    } else {
      console.log(formData);
      form.reset();
      localStorage.removeItem(localStorageKey);
      formData.email = '';
      formData.message = '';
    }
  });
});
