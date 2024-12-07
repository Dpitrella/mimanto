import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import productosData from '../../product.json';

function ProductList() {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        setProductos(productosData.productos);
    }, []);

    return (
        <div>
            <h2>Lista de Productos</h2>
            <ul>
                {productos.map(producto => (
                    <li key={producto.id}>
                        <Link to={`/producto/${producto.id}`}>{producto.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductList;