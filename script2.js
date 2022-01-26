//FORMULARIO DE CONTACTO ------
function contact(){
    name = $('#name').val();
    lastname = $('#lastname').val();
    inputEmail4 = $('#inputEmail4').val();
    defaultCheck1 = checked();
    inputState = $('#inputState').val();
    inputCity = $('#inputCity').val();
    inputZip = $('#inputZip').val();
    textArea = $('#exampleFormControlTextarea1').val();
    const user_post = {
        "Nombre: " : name,
        "Apellido: " : lastname,
        "Email: " : inputEmail4,
        "¿Newsletter? ": defaultCheck1,
        "Provincia: " : inputCity,
        "Ciudad: " : inputState,
        "Codigo Postal: " : inputZip,
        "Mensaje: " : textArea
    }
    post_form(user_post)
    localStorage.setItem('user', JSON.stringify(user_post))
}

function checked(){
        if ($('#defaultCheck1').is(':checked')) {
            return true;
        } else {
            return false;
        }
}

function post_form(user_post){
    const newPost = {
        title: 'New form user.',
        body: JSON.stringify(user_post),
        userId: 1
    }
    fetch(APIURL, {
        method: 'POST',
        body: JSON.stringify(newPost),
        headers :{
            "Content-type": "application/json"
        },
    })
    .then(res => res.json())
    .then(resP => console.log(resP))
}

//VARIABLES ------ 

const APIURL = "https://jsonplaceholder.typicode.com/posts"
let name, lastname, inputEmail4, defaultCheck1, inputState, inputCity, inputZip, textArea;
let btnSend;

//PROGRAMA PRINCIPAL ------ 
$(document).ready(() => {
    $('#contact_form').submit(() => {
        contact();
        return false;
    })
})


