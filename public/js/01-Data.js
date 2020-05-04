class Data {
    obtenerDatosFormulario(elementos) {
        /* Campos de tipo text, number, email */
        const vName = elementos[0].value;
        const vPrice = elementos[1].value;
        const vYear = elementos[2].value;
        const vEmail = elementos[3].value;

        /* Campos de tipo select */
        const category = elementos[4];
        const vSelectedCategory = category.options[category.selectedIndex].value;

        /* Deben Ser Pedidos Aqui Y Directamente Del DOM, Para Que Su Valor Sea Leido Correctamente */
        /* Campos de tipo radio */
        const vQuantity = document.querySelector('input[type="radio"]:checked').value;

        /* Campos de tipo checkbox */
        const vTerms = document.querySelector('input[type="checkbox"]:checked').value;

        /* Campo de tipo Imagen */
        const vImg = document.getElementById('image').files[0];

        return {
            vName,
            vPrice,
            vYear,
            vEmail,
            vSelectedCategory,
            vQuantity,
            vTerms,
            vImg
        }
    }
}