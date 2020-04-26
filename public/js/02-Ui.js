class Ui {
    renderizarDOMLocalStorage() {
        const products = data.obtenerDatosLocalStorage();

        if (products.length > 0) {
            const list = document.getElementById('product-list');

            const fragment = document.createDocumentFragment();
            const div = document.createElement('div');

            let template = '';
            products.forEach((product, index) => {
                template += `
                <div class="card text-center mb-4">
                    <div class="card-body">
                        Nombre: <strong>${product.name}</strong><br />
                        Categoria: <strong>${product.selectedCategory}</strong><br />
                        Precio: <strong>${product.price}</strong><br />
                        Cantidad: <strong>${product.quantity}</strong><br />
                        Correo Electronico: <strong>${product.email}</strong><br />
                        Año Creaciòn: <strong>${product.year}</strong><br />
                        <input class="btn btn-danger btn-block" type="submit" value="Eliminar">
                    </div>
                </div>
            `;
            });

            div.innerHTML = template;
            fragment.appendChild(div);
            list.appendChild(fragment);
            // document.getElementById('product-list').innerHTML = template;
        } else {
            console.log('No tenemos Nada en el Local Storage');
        }
    }

    renderizarDOM(productList) {
        /* Forma Optimizada Para Eliminar Del DOM */
        while (productList.firstElementChild) {
            productList.removeChild(productList.firstElementChild);
        }

        this.renderizarDOMLocalStorage();
    }

    eliminarProductoDOM(e) {
        if (e.target.classList.contains('btn-danger')) {
            console.log(e.target.parentElement.parentElement.remove());
        }
    }
}