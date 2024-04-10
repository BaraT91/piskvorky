let currentPlayer = 'circle';

const selectButton = (event) => {
  event.target.disabled = true;
  if (currentPlayer === 'circle') {
    event.target.classList.add('board__field--circle');
    currentPlayer = 'cross';
    document.getElementById('current-player').src = 'image/cross2.svg';
  } else {
    event.target.classList.add('board__field--cross');
    currentPlayer = 'circle';
    document.getElementById('current-player').src = 'image/circle2.svg';
  }
};

document
  .querySelector('button:nth-child(1)')
  .addEventListener('click', selectButton);

document
  .querySelector('button:nth-child(2)')
  .addEventListener('click', selectButton);

document
  .querySelector('button:nth-child(3)')
  .addEventListener('click', selectButton);

document
  .querySelector('button:nth-child(4)')
  .addEventListener('click', selectButton);

document
  .querySelector('button:nth-child(5)')
  .addEventListener('click', selectButton);

document
  .querySelector('button:nth-child(6)')
  .addEventListener('click', selectButton);

document
  .querySelector('button:nth-child(7)')
  .addEventListener('click', selectButton);

document
  .querySelector('button:nth-child(8)')
  .addEventListener('click', selectButton);

document
  .querySelector('button:nth-child(9)')
  .addEventListener('click', selectButton);

document
  .querySelector('button:nth-child(10)')
  .addEventListener('click', selectButton);

document
  .querySelector('.restart__symbol')
  .addEventListener('click', function () {
    if (!confirm('Opravdu chceš začít znovu?')) {
      e.preventDefault();
    }
  });
