

// SELETORES
const inputText = document.querySelector("#input-text");
const inputCheckbox = document.querySelector("#input-checkbox");
const hrefLink = document.querySelector("#href");

hrefLink.addEventListener('click', (event) => {
    event.preventDefault()
})
;
inputCheckbox.addEventListener('click', (event) => {
    event.preventDefault()
})
inputText.addEventListener('keypress', (event) => {
    const caractere = event.key
    if(caractere !== 'a') {
        event.preventDefault()}
    })