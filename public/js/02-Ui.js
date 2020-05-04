/* Accediendo Al DOM */
const form = document.getElementById('form');
const name = document.getElementById('name');
const price = document.getElementById('price');
const year = document.getElementById('year');
const email = document.getElementById('email');
const category = document.getElementById('selectCategory');
const productList = document.getElementById('product-list');

/* Creando La Clase De La Interface */
class Ui {
    entregandoElementosDOM() {
        const elementos = [name, price, year, email, category, productList];
        return elementos;
    }

    renderizandoDOM(valores) {
        const arrayProducto = [];
        arrayProducto.push(valores);

        const list = document.getElementById('product-list');
        const fragment = document.createDocumentFragment();
        const div = document.createElement('div');
        const image = document.createElement('img');
        let template = '';

        /* Valor De La Imagen Se Convierte En Un Objeto De URL, Para Renderizar Path De La Imagen */
        image.src = URL.createObjectURL(valores.vImg);
        image.classList.add('imagenes');

        fragment.appendChild(image);
        list.appendChild(fragment);

        arrayProducto.forEach((product) => {
            template += `
                <div class="card text-center mb-4">
                    <div class="card-body">
                        Nombre: <strong>${product.vName}</strong><br />
                        Categoria: <strong>${product.vSelectedCategory}</strong><br />
                        Precio: <strong>${product.vPrice}</strong><br />
                        Cantidad: <strong>${product.vQuantity}</strong><br />
                        Correo Electronico: <strong>${product.vEmail}</strong><br />
                        Año Creaciòn: <strong>${product.vYear}</strong><br />
                        <input class="btn btn-danger btn-block" type="submit" value="Eliminar">
                    </div>
                </div>
            `;
        });

        div.innerHTML = template;
        fragment.appendChild(div);
        list.appendChild(fragment);
    }

    limpiarFormulario() {
        form.reset();
    }

    eliminarImagenDOM(e) {
        if (e.target.classList.contains('btn-danger')) {
            e.target.parentElement.parentElement.parentElement.previousElementSibling.remove();
            this.eliminarProductoDOM(e);
        }
    }

    eliminarProductoDOM(e) {
        e.target.parentElement.parentElement.remove();
    }
}