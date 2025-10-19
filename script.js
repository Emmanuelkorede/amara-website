const toggleBtn = document.getElementById('theme-toggle');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');

  const isDark = document.body.classList.contains('dark');
  toggleBtn.innerHTML = isDark
    ? '<i class="fas fa-sun"></i>'
    : '<i class="fas fa-moon"></i>';
});




const dropDownBtn = document.querySelector('.dropdown-btn');
const dropDownContent = document.querySelector('.dropdown-content');

dropDownBtn.addEventListener('click', () => {
  dropDownContent.classList.toggle('show');

  const icon = dropDownBtn.querySelector('i');

  if (dropDownContent.classList.contains('show')) {
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-times');
  } else {
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
  }
});


document.getElementById('year').textContent = new Date().getFullYear();
