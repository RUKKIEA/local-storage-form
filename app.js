
const myForm = document.querySelector('form');
myForm.addEventListener('submit', (e) => {
    e.preventDefault();
  let fd = new FormData(myForm);
 const obj = Object.fromEntries(fd);

 const json = JSON.stringify(obj);
 localStorage.setItem('myForm', json);

 window.location.href = "confirm.html";


}
)



















// const nameInput = document.querySelector('#name');
// const emailInput = document.querySelector('#email');
// const phoneInput = document.querySelector('#phone');
// const addressInput = document.querySelector('#address');
// const sexInput = document.querySelector('#sex');
// const occupationInput = document.querySelector('#occupation');
// const hobbiesInput = document.querySelector('#hobbies');
// const resultContainer = document.querySelector('#result-container');

// myForm.addEventListener('submit', function(event) {
//     event.preventDefault();
    
//     if (nameInput.value === "" || emailInput.value === "") {
//         const msg = document.createElement('p');
//         msg.classList.add('error');
//         msg.innerHTML = "Please fill out all required fields";
//         document.body.appendChild(msg);
//         setTimeout(() => msg.remove(), 3000);
//     } else {
//         const ul = document.createElement('ul');
        
//         ul.innerHTML = `
//             <li>Name: ${nameInput.value}</li>
//             <li>Email: ${emailInput.value}</li>
//             <li>Phone: ${phoneInput.value}</li>
//             <li>Address: ${addressInput.value}</li>
//             <li>Sex: ${sexInput.value}</li>
//             <li>Occupation: ${occupationInput.value}</li>
//             <li>Hobbies: ${hobbiesInput.value}</li>
//         `;
        
//         resultContainer.appendChild(ul);
//         myForm.reset();
//     }
// });
