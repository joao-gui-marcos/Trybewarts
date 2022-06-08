const emailCheck = document.getElementById('email');
const loginCheck = document.getElementById('senha');
const buttonCheck = document.getElementById('buttonLogin');
const checkBoxCheck = document.getElementById('agreement');
const buttonStart = document.querySelector('#submit-btn');
const data = document.querySelectorAll('.data');
const subjectArray = document.getElementsByClassName('subject');
const familyArray = document.getElementsByClassName('family');
const rateArray = document.getElementsByClassName('rate');

function clickLogin() {
  if (emailCheck.value === 'tryber@teste.com' && loginCheck.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

buttonCheck.addEventListener('click', clickLogin);

function checkBoxSelected() {
  if (checkBoxCheck.checked) {
    buttonStart.removeAttribute('disabled');
  }
}
checkBoxCheck.addEventListener('click', checkBoxSelected);

const counter = document.getElementById('counter');
const textArea = document.getElementById('textarea');

function updateCounter() {
  counter.innerText = 500 - textArea.value.length;
}
function setData4() {
  for (let i = 0; i < subjectArray.length; i += 1) {
    if (subjectArray[i].checked) {
      data[4].innerHTML += subjectArray[i].value;
      data[4].innerHTML += ', ';
    }
  }
}

function setData5() {
  for (let i = 0; i < rateArray.length; i += 1) {
    if (rateArray[i].checked) {
      data[5].innerHTML += rateArray[i].value;
    }
  }
}

function setData3() {
  for (let i = 0; i < familyArray.length; i += 1) {
    if (familyArray[i].checked) {
      data[3].innerHTML += familyArray[i].value;
    }
  }
}

function fillForm(event) {
  data[0].innerHTML += document.getElementById('input-name').value;
  data[0].innerHTML += ' ';
  data[0].innerHTML += document.getElementById('input-lastname').value;
  data[1].innerHTML += document.getElementById('input-email').value;
  data[2].innerHTML += document.getElementById('house').value;
  setData3();
  setData4();
  setData5();
  data[4].innerText = data[4].innerText.slice(0, -1);
  data[6].innerHTML += document.getElementById('textarea').value;
  document.getElementById('evaluation-form').style.display = 'none';
  document.getElementById('form-data').style.display = 'block';
  event.preventDefault();
}

textArea.addEventListener('keyup', updateCounter);
buttonStart.addEventListener('click', fillForm);
