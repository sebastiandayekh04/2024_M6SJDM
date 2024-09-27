console.log("Calculadora inicialitzada!");

let entradaActual = '';
  
document.getElementById('btn1').addEventListener('click', function() {
    document.getElementById('pantalla').textContent = '1';
    console.log('1');
    entradaActual += '1';
    document.getElementById('pantalla').textContent = entradaActual;
  });
  
document.getElementById('btn2').addEventListener('click', function() {
    document.getElementById('pantalla').textContent = '2';
    console.log('2');
    entradaActual += '2';
    document.getElementById('pantalla').textContent = entradaActual;
  });
  
document.getElementById('btn3').addEventListener('click', function() {
    document.getElementById('pantalla').textContent = '3';
    console.log('3');
    entradaActual += '3';
    document.getElementById('pantalla').textContent = entradaActual;
  });
  
document.getElementById('btn4').addEventListener('click', function() {
    document.getElementById('pantalla').textContent = '4';
    console.log('4');
    entradaActual += '4';
    document.getElementById('pantalla').textContent = entradaActual;
  });
  
document.getElementById('btn5').addEventListener('click', function() {
    document.getElementById('pantalla').textContent = '5';
    console.log('5');
    entradaActual += '5';
    document.getElementById('pantalla').textContent = entradaActual;
  });
  
document.getElementById('btn6').addEventListener('click', function() {
    document.getElementById('pantalla').textContent = '6';
    console.log('6');
    entradaActual += '6';
    document.getElementById('pantalla').textContent = entradaActual;
  });

  document.getElementById('btn7').addEventListener('click', function() {
    document.getElementById('pantalla').textContent = '7';
    console.log('7');
    entradaActual += '7';
    document.getElementById('pantalla').textContent = entradaActual;
  });

  document.getElementById('btn8').addEventListener('click', function() {
    document.getElementById('pantalla').textContent = '8';
    console.log('8');
    entradaActual += '8';
    document.getElementById('pantalla').textContent = entradaActual;
  });

  document.getElementById('btn9').addEventListener('click', function() {
    document.getElementById('pantalla').textContent = '9';
    console.log('9');
    entradaActual += '9';
    document.getElementById('pantalla').textContent = entradaActual;
  });

  document.getElementById('btn0').addEventListener('click', function() {
    document.getElementById('pantalla').textContent = '0';
    console.log('0');
    entradaActual += '0';
    document.getElementById('pantalla').textContent = entradaActual;
  });

  function actualizarPantalla() {
    document.getElementById('pantalla').textContent = entradaActual || '0';
}
  
  document.getElementById('btnSuma').addEventListener('click', function() {
    entradaActual += '+';
    actualizarPantalla();
});

document.getElementById('btnResta').addEventListener('click', function() {
    entradaActual += '-';
    actualizarPantalla();
});

document.getElementById('btnIgual').addEventListener('click', function() {
    try {
        const resultado = eval(entradaActual);
        entradaActual = String(resultado);
        actualizarPantalla();
    } catch (error) {
        document.getElementById('pantalla').textContent = 'Error';
        entradaActual = '';
    }
});

document.getElementById('btnBorrar').addEventListener('click', function() {
    entradaActual = '';
    actualizarPantalla();
});