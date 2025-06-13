import React, { useState } from 'react';
import weatherAxios from '../api/weatherAxios';

const MiniProject3 = () => {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const API_KEY = '2d55ea157f63c1a4a8c986c41245b47d'; 

    const getWeather = async () => {
        if (!city) return;

        setLoading(true);
        setError('');
        setWeather(null);

        try {
            const res = await weatherAxios.get(`weather?q=${city}&units=metric&appid=${API_KEY}`);
            setWeather(res.data);
        } catch (err) {
            setError('City not found. Please enter a valid city.');
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        getWeather();
    };

    return (
        <div className="weather-container">
            <form onSubmit={handleSubmit} className="weather-form">
                <input
                    type="text"
                    placeholder="Enter city name"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <button type="submit">Get Weather</button>
            </form>

            {loading && <p className="status">Loading weather...</p>}
            {error && <p className="status error">{error}</p>}

            {weather && (
                <div className="weather-card">
                    <h2>{weather.name}, {weather.sys.country}</h2>
                    <p><strong>Temperature:</strong> {weather.main.temp}°C</p>
                    <p><strong>Weather:</strong> {weather.weather[0].description}</p>
                    <p><strong>Humidity:</strong> {weather.main.humidity}%</p>
                    <p><strong>Wind Speed:</strong> {weather.wind.speed} m/s</p>
                </div>
            )}
        </div>
    );
};

export default MiniProject3;
