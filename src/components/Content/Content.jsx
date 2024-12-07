import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Content.css';
import productosData from '../../product.json';

function Content() {
    const { id } = useParams();
    const [producto, setProducto] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            try {
                const foundProducto = productosData.productos.find(p => p.id === id);
                if (foundProducto) {
                    setProducto(foundProducto);
                } else {
                    setError('Producto no encontrado');
                }
                setLoading(false);
            } catch (err) {
                setError('Error al cargar los datos');
                setLoading(false);
            }
        }, 1000);
    }, [id]);

    if (loading) {
        return <div>Cargando...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!producto) {
        return <div>Producto no encontrado</div>;
    }

    return (
        <section className='content-product'>
            <div className='info-product'>
                <h1 className='product-name'>{producto.title.toUpperCase()}</h1>
                <p>{producto.description}</p>
                <p>Cantidad: {producto.cantidad}</p>
                <h3>Ingredientes:</h3>
                <ul>
                    {producto.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
            </div>
            {producto.cover && <img className='img-home' src={producto.cover} alt={producto.title} />}
        </section>
    );
}

export default Content;