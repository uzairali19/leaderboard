import 'bulma/css/bulma.css';
import './style.css';
import { getData } from './data/api';

const table = document.querySelector('#data-body');

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
