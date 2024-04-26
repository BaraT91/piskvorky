import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4';

let currentPlayer = 'circle';
const pole = document.querySelectorAll('button');

const selectButton = async (event) => {
  event.target.disabled = true;
  if (currentPlayer === 'circle') {
    event.target.classList.add('board__field--circle');
    currentPlayer = 'cross';
    document
      .getElementById('current-player')
      .setAttribute('src', 'Images/cross.svg');
  } else {
    event.target.classList.add('board__field--cross');
    currentPlayer = 'circle';
    document
      .getElementById('current-player')
      .setAttribute('src', 'Images/circle.svg');
  }

  // Úkol č. 4

  const changeSymbol = [...pole].map((button) => {
    if (button.classList.contains('board__field--circle')) {
      return 'o';
    } else if (button.classList.contains('board__field--cross')) {
      return 'x';
    } else {
      return '_';
    }
  });

  const winner = findWinner(changeSymbol);
  if (winner === 'o' || winner === 'x') {
    setTimeout(() => {
      alert(`Vyhrál hráč se symbolem ${winner} !`);
      location.reload();
    }, 550);
  } else if (winner === 'tie') {
    setTimeout(() => {
      alert(`Hra skončila remízou!`);
      location.reload();
    }, 550);
  }
  if (winner === null && currentPlayer === 'cross') {
    console.log('křížek');

    const response = await fetch(
      'https://piskvorky.czechitas-podklady.cz/api/suggest-next-move',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          board: changeSymbol,
          player: 'x',
        }),
      },
    );
    const data = await response.json();
    const { x, y } = data.position;
    const index = pole[x + y * 10];
    index.click();
  }
};

// Tlačítko restart

document
  .querySelector('.restart__symbol')
  .addEventListener('click', (event) => {
    if (!confirm('Opravdu chceš začít znovu?')) {
      event.preventDefault();
    }
  });

// Označení všech políček
const buttons = document.querySelectorAll('.game__square');
buttons.forEach((button) => {
  button.addEventListener('click', selectButton);
});
