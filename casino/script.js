// Arreglo de símbolos para el juego de tragamonedas
const symbols = ['🍒', '🍊', '🍇', '🍓', '🍉'];

// Obtener referencias a los elementos del DOM
const slot1 = document.getElementById('slot1');
const slot2 = document.getElementById('slot2');
const slot3 = document.getElementById('slot3');
const spinButton = document.getElementById('spinButton');

// Función para generar un símbolo aleatorio
function getRandomSymbol() {
  const randomIndex = Math.floor(Math.random() * symbols.length);
  return symbols[randomIndex];
}

// Función para iniciar el giro de los slots
function spinSlots() {
  // Deshabilitar el botón mientras los slots están girando
  spinButton.disabled = true;

  // Agregar la clase 'spin' a los slots para activar la animación
  slot1.classList.add('spin');
  slot2.classList.add('spin');
  slot3.classList.add('spin');

  // Generar símbolos aleatorios y asignarlos a los slots después de un retraso
  setTimeout(function() {
    const symbol1 = getRandomSymbol();
    const symbol2 = getRandomSymbol();
    const symbol3 = getRandomSymbol();

    slot1.textContent = symbol1;
    slot2.textContent = symbol2;
    slot3.textContent = symbol3;

    // Detener la animación y verificar si hay coincidencia de símbolos
    setTimeout(function() {
      slot1.classList.remove('spin');
      slot2.classList.remove('spin');
      slot3.classList.remove('spin');

      if (symbol1 === symbol2 && symbol2 === symbol3) {
        alert('¡Ganaste!');
      } else {
        alert('No hay coincidencia. ¡Inténtalo de nuevo!');
      }

      // Habilitar el botón después de finalizar el giro
      spinButton.disabled = false;
    }, 1000);
  }, 1000);
}

// Asociar la función spinSlots al evento click del botón Girar
spinButton.addEventListener('click', spinSlots);
