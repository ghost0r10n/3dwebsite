"<div style='	text-align:center;'></div>"


let posizione = document.getElementsByClassName('w-commerce-commercecartfooter cart-footer')[0];
const div = document.createElement('div');

div.className = 'row';
div.style = `
  text-align:center;
  max-height:30px;

`
div.innerHTML = `
<p style='	top:0;  width:100%;  margin-top:10px;' id='text-progress'>Ti mancano<b> €119 per la spedizione gratuita</b></p>
`;

posizione.appendChild(div)
let test = setTimeout(function() {
    var total = parseFloat(document.getElementsByClassName('w-commerce-commercecartordervalue cart-product-details')[0].innerText.replace('€', '').replace('EUR', '').replace('.', '').replace(',', '.'))
    var maxValue = 150

    let text = document.getElementById('text-progress')

    if (total < maxValue) {
        text.innerHTML = "Ti mancano<b> €" + (maxValue - total).toString() + " per la spedizione gratuita</b>"
    } else {
        text.innerHTML = "Complimenti hai raggiunto la <b>spedizione gratuita!</b>"
    }


}, 3000)

document.getElementsByClassName('w-commerce-commercecartquantity quantity small-quantity').forEach((element) => {
    element.onChange(() => {
        var total = parseFloat(document.getElementsByClassName('w-commerce-commercecartordervalue cart-product-details')[0].innerText.replace('€', '').replace('EUR', '').replace('.', '').replace(',', '.'))
        var maxValue = 150

        let text = document.getElementById('text-progress')

        if (total < maxValue) {
            text.innerHTML = "Ti mancano<b> €" + (maxValue - total).toString() + " per la spedizione gratuita</b>"
        } else {
            text.innerHTML = "Complimenti hai raggiunto la <b>spedizione gratuita!</b>"
        }


    })
})