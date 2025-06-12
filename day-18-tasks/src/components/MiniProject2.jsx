import React, { useEffect, useState } from 'react';
import productAxios from '../api/productAxios';

const MiniProject2 = () => {
    const [products, setProducts] = useState([]);
    const [form, setForm] = useState({ title: '', price: '', description: '' });
    const [editId, setEditId] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const fetchProducts = async () => {
        setLoading(true);
        try {
            const res = await productAxios.get('/products');
            setProducts(res.data.slice(0, 5)); 
        } catch (err) {
            setError('Failed to fetch products');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!form.title || !form.price) return;

        try {
            if (editId) {
                await productAxios.put(`/products/${editId}`, form);
                setEditId(null);
            } else {
                await productAxios.post('/products', form);
            }
            setForm({ title: '', price: '', description: '' });
            fetchProducts();
        } catch (err) {
            setError('Operation failed');
        }
    };

    const handleEdit = (product) => {
        setForm({ title: product.title, price: product.price, description: product.description });
        setEditId(product.id);
    };

    const handleDelete = async (id) => {
        try {
            await productAxios.delete(`/products/${id}`);
            fetchProducts();
        } catch (err) {
            setError('Delete failed');
        }
    };

    return (
        <div className="crud-container">
            <form className="product-form" onSubmit={handleSubmit}>
                <h2>{editId ? 'Edit Product' : 'Add Product'}</h2>
                <input name="title" value={form.title} onChange={handleChange} placeholder="Title" required />
                <input name="price" value={form.price} onChange={handleChange} placeholder="Price" required />
                <textarea name="description" value={form.description} onChange={handleChange} placeholder="Description" />
                <button type="submit">{editId ? 'Update' : 'Add'}</button>
            </form>

            {loading && <p className="status loading">Loading...</p>}
            {error && <p className="status error">{error}</p>}

            <ul className="product-list">
                {products.map((prod) => (
                    <li key={prod.id} className="product-card">
                        <h3>{prod.title}</h3>
                        <p><strong>Price:</strong> ${prod.price}</p>
                        <p>{prod.description}</p>
                        <div className="actions">
                            <button className="edit-btn" onClick={() => handleEdit(prod)}>Edit</button>
                            <button className="delete-btn" onClick={() => handleDelete(prod.id)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MiniProject2;
