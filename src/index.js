import 'bulma/css/bulma.css';
import './style.css';
import { getData, postData } from './data/api';

const table = document.querySelector('#data-body');
const name = document.querySelector('#name');
const score = document.querySelector('#score');
const form = document.querySelector('#submit');
const refresh = document.querySelector('#refresh');

form.addEventListener('click', (e) => {
  e.preventDefault();
  postData(name, score);
  name.value = '';
  score.value = '';
});

refresh.addEventListener('click', (e) => {
  e.preventDefault();
  getData().then((v) => {
    if (table.children.length !== v.length) {
      table.innerHTML = '';
      v.forEach((v) => {
        const dataBody = `
              <th>${v.user}</th>
              <td>${v.score}</td>`;
        const tableRow = document.createElement('tr');
        tableRow.innerHTML = dataBody;
        table.appendChild(tableRow);
      });
    }
  });
});

getData().then((v) => {
  v.forEach((v) => {
    const dataBody = `
      <th>${v.user}</th>
      <td>${v.score}</td>`;
    const tableRow = document.createElement('tr');
    tableRow.innerHTML = dataBody;
    table.appendChild(tableRow);
  });
});
