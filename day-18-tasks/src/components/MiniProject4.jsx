import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MiniProject4 = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const fetchImages = async () => {
        setLoading(true);
        setError('');
        try {
            const res = await axios.get('https://picsum.photos/v2/list?page=1&limit=15');
            setImages(res.data);
        } catch (err) {
            console.error(err);
            setError('Failed to load images. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchImages();
    }, []);

    return (
        <div className="gallery-container">
            {loading && <p className="status">Loading images...</p>}
            {error && <p className="status error">{error}</p>}

            <div className="gallery-grid">
                {images.map((img) => (
                    <div key={img.id} className="gallery-item">
                        <img src={img.download_url} alt={`by ${img.author}`} />
                        <p className="caption">By {img.author}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MiniProject4;
