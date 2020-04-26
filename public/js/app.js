/* Accediendo Al DOM */
const form = document.getElementById('form');
const name = document.getElementById('name');
const price = document.getElementById('price');
const year = document.getElementById('year');
const email = document.getElementById('email');
const category = document.getElementById('selectCategory');
const productList = document.getElementById('product-list');

/* Instanciando Las Clases Para Tener Acceso A la Informaciòn De Ambas */
/* Data Tiene Parametros por defecto, No tengo listos los valores reales, pero Necesito la instacia de los datos para mas adelante Utilizar la clase UI */
let data = new Data();
const ui = new Ui();

ui.renderizarDOMLocalStorage();

/* Funcionalidad Para Obtener Lo Valores Del DOM */
const obtenerValoresDOM = (e) => {
    e.preventDefault();

    /* Campos de tipo text, number, email */
    const vName = name.value;
    const vPrice = price.value;
    const vYear = year.value;
    const vEmail = email.value;

    /* Campos de tipo select */
    const vSelectedCategory = category.options[category.selectedIndex].value;

    /* Campos de tipo radio */
    const vQuantity = document.querySelector('input[type="radio"]:checked').value;

    /* Campos de tipo checkbox */
    const vTerms = document.querySelector('input[type="checkbox"]:checked').value;

    /* Valores Reales Listos Para enviar Al Constructor */
    data.saveLocalStorage(new Data(vName, vSelectedCategory, vPrice, vQuantity, vEmail, vYear, vTerms));

    /* Renderiza En El DOM Nuevamente */
    ui.renderizarDOM(productList);

    /* Limpiar El formulario */
    form.reset();
}

const eliminarDOM = (e) => {
    ui.eliminarProductoDOM(e);
}

/* Eventos Del Sistema Y Del Usuario */
form.addEventListener('submit', obtenerValoresDOM);
productList.addEventListener('click', eliminarDOM);