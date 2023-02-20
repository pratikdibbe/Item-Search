const searchyoutubers = () => {

    let filter = document.getElementById('Myinput').value.toUpperCase();

    let products = document.getElementById('product-list2');


    let oneByone = products.querySelectorAll('.product');

    for (let i = 0; i < oneByone.length; i++) {

        let a = oneByone[i].getElementsByTagName('h2')[0];

        let TextValue = a.innerText;

        if (TextValue.toUpperCase().indexOf(filter) > -1) {
            oneByone[i].style.display = '';
        } else {
            oneByone[i].style.display = 'none';

        }
    }
}




