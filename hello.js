const content = document.querySelector('label[for="checkbox"]');
const checkbox = document.getElementById('checkbox');

content.addEventListener('click', () => {
  checkbox.click();
});
