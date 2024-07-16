document.getElementById('input-area').addEventListener('input', function(event) {
  const value = event.target.value;
  const acentos = /[À-ÖØ-öø-ÿ]/;
  const maiusculas = /[A-Z]/;

  if (acentos.test(value) || maiusculas.test(value)) {
      alert('Palavras com acentos ou letras maiúsculas não são permitidas!');
      speakMessage('Palavras com acentos ou letras maiúsculas não são permitidas!');
      event.target.value = value.replace(acentos, '').replace(maiusculas, '');
  }
});

function speakMessage(message) {
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(message);
  utterance.lang = 'pt-BR'; // Define o idioma para português do Brasil
  synth.speak(utterance);
}

const buttonEncrypt = document.getElementById('button-encrypt')
const buttonDecrypt = document.getElementById('button-decrypt')

buttonEncrypt.onclick = () => {
  const textEntry = document.getElementById('input-area').value
  const outputArea = document.getElementById('output-area')
  const outputAreaText = document.getElementById('output-area-text')
  const hideArea = document.getElementById('hide-area')
  const hideArea2 = document.getElementById('hide-area2')
  const arrayListText = textEntry.split('')
  const arrayListEncrypt = []

  for (let i = 0; i < arrayListText.length; i++) {
    if (arrayListText[i] === 'a') {
      arrayListEncrypt.push('ai')
    } else if (arrayListText[i] === 'e') {
      arrayListEncrypt.push('enter')
    } else if (arrayListText[i] === 'i') {
      arrayListEncrypt.push('imes')
    } else if (arrayListText[i] === 'o') {
      arrayListEncrypt.push('ober')
    } else if (arrayListText[i] === 'u') {
      arrayListEncrypt.push('ufat')
    } else {
      arrayListEncrypt.push(arrayListText[i])
    }
  }

  hideArea.style.display = 'none'
  hideArea2.style.display = 'none'
  outputArea.style.justifyContent = 'start'

  outputAreaText.innerHTML = arrayListEncrypt.join('')
}

buttonDecrypt.onclick = () => {
  const textEntry = document.getElementById('input-area').value
  const outputArea = document.getElementById('output-area')
  const outputAreaText = document.getElementById('output-area-text')
  const hideArea = document.getElementById('hide-area')
  const hideArea2 = document.getElementById('hide-area2')

  const decrypt = textEntry.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u')

  hideArea.style.display = 'none'
  hideArea2.style.display = 'none'
  outputArea.style.justifyContent = 'start'

  outputAreaText.innerHTML = decrypt
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('botao').addEventListener('click', async function() {
      // Obtém a seleção de texto do usuário
      var selecao = window.getSelection();
      var textoSelecionado = selecao.toString();
      
      if (textoSelecionado) {
          try {
              // Usa a API Clipboard para copiar o texto
              await navigator.clipboard.writeText(textoSelecionado);
              // Alerta o usuário que o texto foi copiado
              alert('Texto selecionado copiado para a área de transferência!');
          } catch (err) {
              console.error('Erro ao copiar texto: ', err);
              alert('Falha ao copiar texto para a área de transferência.');
          }
      } else {
          alert('Nenhum texto selecionado. Por favor, selecione o texto que deseja copiar.');
      }
  });
});