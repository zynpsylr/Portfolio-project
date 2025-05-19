import React from 'react';
import { Link } from 'react-router-dom'; // React Router kullanarak sayfalar arasında geçiş
import '../styles/Home.css';
import Foto from '../images/Foto.jpeg'
export function Home() {

    return (
        <div className="home">
            <div className="home-content">
                <h1>Merhaba, ben <span>Zeynep</span></h1>
                <p>Balıkesir Üniversitesinde bilgisayar mühendisliği 2. sınıf öğrencisiyim.</p>


                <div className="home-buttons">
                    <Link to="/contact">
                        <button>İletişime Geç</button>
                    </Link>
                    <Link to="/projects">
                        <button>Projeleri Gör</button>
                    </Link>
                </div>
            </div>

            <div className="home-image">
                <img src={Foto} alt="Profile" className="profile-image" />
            </div>
        </div>
    );
}

export default Home;
