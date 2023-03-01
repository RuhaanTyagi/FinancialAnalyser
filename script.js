document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('form').onsubmit = function(event) {
    event.preventDefault();

    const company = document.querySelector('#company').value;
    const years = document.querySelector('#years').value;
    const period = document.querySelector('#period').value;

    fetch(`https://financialmodelingprep.com/api/v3/balance-sheet-statement/${company}?period=${period}&limit=${years}&apikey=e1cb7be9dce4da99c401e736a03080a2`)
      .then(response => response.json())
      .then(balance_sheet => {        
        // Handle the response from Flask app here
        console.log(balance_sheet);
        document.querySelector('#balance-sheet').innerHTML = generateTableHTML(balance_sheet);
      
      });
      fetch(`https://financialmodelingprep.com/api/v3/income-statement/${company}?period=${period}&limit=${years}&apikey=e1cb7be9dce4da99c401e736a03080a2`)
      .then(response => response.json())
      .then(income_statement => {        
        // Handle the response from Flask app here
        console.log(income_statement);
        document.querySelector('#income-statement').innerHTML = generateTableHTML(income_statement);
        
      });
      fetch(`https://financialmodelingprep.com/api/v3/cash-flow-statement/${company}?period=${period}&limit=${years}&apikey=e1cb7be9dce4da99c401e736a03080a2`)
      .then(response => response.json())
      .then(cash_flow => {        
        // Handle the response from Flask app here
        console.log(cash_flow);
        document.querySelector('#cash-flow').innerHTML = generateTableHTML(cash_flow);
        
      });
  };
});

function generateTableHTML(data) {
  let html = '';

  // Generate header row
  html += '<tr>';
  for (const key in data[0]) {
    html += `<th>${key}</th>`;
  }
  html += '</tr>';

  // Generate data rows
  for (const row of data) {
    html += '<tr>';
    for (const key in row) {
      html += `<td>${row[key]}</td>`;
    }
    html += '</tr>';
  }

  return html;
}
