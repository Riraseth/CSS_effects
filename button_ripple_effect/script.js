const buttons = document.querySelectorAll('a');

buttons.forEach(button => {
  button.addEventListener('click', e => {
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;
    let ripples = document.createElement('span');
    ripples.style.left = x + 'px';
    ripples.style.top = y + 'px';
    e.target.appendChild(ripples);
    setTimeout(() => {
      ripples.remove();
    }, 1000);
  });
});
