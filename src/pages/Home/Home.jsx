import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import productosData from '../../product.json';
import '../Home/Home.css'
function Home() {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        setProductos(productosData.productos);
    }, []);

    return (
        <div className='backg'>
            <h2 className='title'>NUESTROS PRODUCTOS</h2>
            <ul className='liste-product'>
                {productos.map(producto => (
                    <li className='producto' key={producto.id} >
                        <Link className='link-product' to={`/producto/${producto.id}`}><p className='product-name'>{producto.title}</p> <img className='img-cover' src={producto.cover} alt="" /> </Link>
                        
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home;