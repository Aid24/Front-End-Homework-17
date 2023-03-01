const table = document.querySelector('table');
const tbody = table.querySelector('tbody');


for (let i = 1; i <= 10; i++) {
    const tr = document.createElement('tr');
    for (let j = 1; j <= 10; j++) {
      const td = document.createElement('td');
      td.textContent = (i - 1) * 10 + j;
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
}

