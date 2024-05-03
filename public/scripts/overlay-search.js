let inputs = document.querySelectorAll('.inputs');

inputs.forEach(input => {
  input.addEventListener('focus', () => {
    document.getElementById('overlay-search').style.display = 'block';
    document.body.classList.add('darken-body');
    input.classList.add('input-focused');
  });

  input.addEventListener('blur', () => {
    document.getElementById('overlay-search').style.display = 'none';
    document.body.classList.remove('darken-body');
    input.classList.remove('input-focused');
  });
});
