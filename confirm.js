const json = localStorage.getItem('myForm');
const obj = JSON.parse(json);

for (key in obj) {
 const markup = `
 <div>
  <span>${key}: ${obj[key]}</span>
 </div>
 `;
 document.getElementById('data').innerHTML += markup;
}