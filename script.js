//OBJETO ------ 
class Product {
    constructor(img, wear, color, size, price){
        this.img = img;
        this.wear = wear;
        this.color = color;
        this.size = size;
        this.price = price;
    }
}

//FUNCIONES ------ 
function subtotal(wearPrice){
    total = parseInt(total);

    total = total + parseInt(wearPrice);

    return total;
}

//ALMACENAMOS VALORES SELECCIONADOS PARA EL CARRITO ------ 
function respuestaClick(num){
    if (num === -1) {
        upCart();
    }else{
        cart_product.push(new Product(product_list[num].img, product_list[num].wear, product_list[num].color, product_list[num].size, product_list[num].price));
        upCart();
        c++;
    }
}

//COLOCAMOS VALORES EN CARRITO ------ 
function upCart(){ 
    if(flag){
        $('#dropDM').prepend(`<h3 style="font-size: 0.5rem;" class="del">El carrito está vacío.</h3>`);
    }else{
        $('.del').remove();
        $('#dropDM').prepend(`<h3 style="font-size: 0.5rem; display : none;" class="del">Usted seleccionó las siguientes prendas:</h3>`);
        $('#dropDM').append(`
            <li>
                <div class="card" style="width: 6rem; height: 10rem; display : none;">
                    <img src="./Imagenes/productos/${cart_product[c].img}" class="card-img-top">
                    <div class="card-body">
                        <p style="font-size: 0.5rem;">${cart_product[c].wear}<br>$${cart_product[c].price}</p>
                    </div>
                </div>
            </li>
        `);
        resultado = subtotal(cart_product[(c)].price);
        $('#dropDM').append(`<h3 style="font-size: 0.5rem; display : none;" class="del">El total a abonar es de: <strong>$${resultado}</strong></h3>
        <button class="btn btn-primary m-3 px-3 del" id="clear"><h3 style="font-size: 0.5rem;">Vaciar Carrito</h3></buttonclass=>
        `);
        $('#dropdownMenuButton1').click(function(){
            $('.card').fadeIn();
            $('.del').fadeIn();
        });
    }
    flag = false;
    resCart();
}

//VACIAMOS CARRITO ------ 
function resCart(){
    $('#clear').click(function(){
        $('#dropDM').empty();
        for (let i = cart_product.length; i > 0; i--) {
            cart_product.pop();
        }
        flag = true;
        total = 0;
        c = 0;
        respuestaClick(-1);
    });
}

//VARIABLES ------ 
let product_list = [], cart_product = [];
let c = 0, j = 0, resultado, flag = true, total = 0, wearPrice;


product_list.push(new Product("buzoBordo.jpg","Buzo","Bordo","L",2990));
product_list.push(new Product("remeC.jpg","Remera c++","Negra","L",990));
product_list.push(new Product("jeans.jpg","Jean","Azul marino","48",2690));

c = parseInt(c);

//PROGRAMA PRINCIPAL ------ 
$(document).ready(() => {
    respuestaClick(-1);
    $('#btn1').click(function(){respuestaClick(0)});
    $('#btn2').click(function(){respuestaClick(1)});
    $('#btn3').click(function(){respuestaClick(2)});
});
