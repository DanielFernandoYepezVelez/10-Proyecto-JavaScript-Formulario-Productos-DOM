class Data {
    constructor(name = '', selectedCategory = '', price = 0, quantity = 0, email = '', year = 0, terms = '') {
        this.name = name;
        this.selectedCategory = selectedCategory;
        this.price = price;
        this.quantity = quantity;
        this.email = email;
        this.year = year;
        this.terms = terms;
        this.init();
    }

    init() {
        document.addEventListener('DOMContentLoaded', this.obtenerDatosLocalStorage);
    }

    obtenerDatosLocalStorage() {
        let products;

        if (localStorage.getItem('products') === null) {
            products = [];
        } else {
            products = JSON.parse(localStorage.getItem('products'));
        }

        return products;
    }

    saveLocalStorage(product) {
        this.name = product.name;
        this.selectedCategory = product.selectedCategory;
        this.price = Number(product.price);
        this.quantity = Number(product.quantity);
        this.email = product.email;
        this.year = Number(product.year);
        this.terms = product.terms;

        /* VALIDACIONES PENDIENTES (EXPRESIONES REGULARES)*/

        const products = this.obtenerDatosLocalStorage();
        products.push(product);

        localStorage.setItem('products', JSON.stringify(products))
    }
}