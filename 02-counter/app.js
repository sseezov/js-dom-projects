let count = 0;

const value = document.querySelector('#value');
const buttons = document.querySelectorAll('.btn');

buttons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const styles = e.target.classList;
    if (styles.contains('decrease')) {
      count -= 1;
    }
    else if (styles.contains('increase')) {
      count += 1;
    }
    else {
      count = 0;
    }
    if (count > 0) {
      value.style.color = 'green';
    }
    else if (count <= 0) {
      value.style.color = 'red';
    }
    value.textContent = count;
  })
})