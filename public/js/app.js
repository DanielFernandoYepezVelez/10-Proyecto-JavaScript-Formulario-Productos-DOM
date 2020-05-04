/* Instanciando Las Clases Para Tener Acceso A la Informaciòn De Ambas */
/* Data Tiene Parametros por defecto, No tengo listos los valores reales, pero Necesito la instacia de los datos para mas adelante Utilizar la clase UI */
let data = new Data();
const ui = new Ui();

/* Funcionalidad Para Enviar Formulario */
const enviarFormulario = (e) => {
    e.preventDefault();

    const elementos = ui.entregandoElementosDOM();
    const valores = data.obtenerDatosFormulario(elementos);
    ui.renderizandoDOM(valores);

    /* Limpiar El formulario */
    ui.limpiarFormulario();
}

const eliminarDOM = (e) => {
    ui.eliminarImagenDOM(e);
}

/* Eventos Del Sistema Y Del Usuario */
form.addEventListener('submit', enviarFormulario);
productList.addEventListener('click', eliminarDOM);