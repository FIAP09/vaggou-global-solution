// Contador de caracteres na textarea
const textarea = document.getElementById('mensagem');
const contador = document.getElementById('contador');

textarea.addEventListener('input', function () {
  const tamanhoAtual = this.value.length;
  contador.textContent = `${tamanhoAtual}/1000`;
});

// Alert de envio de formulário
document.getElementById('form-contato').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
  this.reset();
  contador.textContent = '0/1000';
});