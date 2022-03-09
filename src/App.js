import React, {useState} from 'react';
import "./App.css";
import {FaHome, FaSearch, FaTag, FaHistory} from 'react-icons/fa';
import Beranda from "./pages/Beranda";
import Explore from "./pages/Explore";
import Promo from "./pages/Promo";
import Riwayat from "./pages/Riwayat";

const App = () => {
    const [pages, setPages] = useState('beranda');
    const active = {
        color: 'rgb(252 97 0)'
    };

    const BottomNav = () => {
        return (
            <div className="box-bottom-nav">
                <div className="sub-box-nav" onClick={() => {
                    if (pages !== "beranda") {
                        setPages("beranda");
                    }
                }}>
                    <FaHome className="icon-nav" style={pages === 'beranda' ? active : null} />
                    <div className="text-nav" style={pages === 'beranda' ? active : null}>Beranda</div>
                </div>
                <div className="sub-box-nav" onClick={() => {
                    if (pages !== "explore") {
                        setPages("explore");
                    }
                }}>
                    <FaSearch className="icon-nav" style={pages === 'explore' ? active : null} />
                    <div className="text-nav" style={pages === 'explore' ? active : null}>Eksplor</div>
                </div>
                <div className="sub-box-nav" onClick={() => {
                    if (pages !== "promo") {
                        setPages("promo");
                    }
                }}>
                    <FaTag className="icon-nav" style={pages === 'promo' ? active : null} />
                    <div className="text-nav" style={pages === 'promo' ? active : null}>Promo</div>
                </div>
                <div className="sub-box-nav" onClick={() => {
                    if (pages !== "riwayat") {
                        setPages("riwayat");
                    }
                }}>
                    <FaHistory className="icon-nav" style={pages === 'riwayat' ? active : null} />
                    <div className="text-nav" style={pages === 'riwayat' ? active : null}>Riwayat</div>
                </div>
            </div>
        )
    }

    const showPages = () => {
        switch (pages) {
            case "beranda":
                return <Beranda />;
                break;
            case "explore":
                return <Explore />;
                break;
            case "promo":
                return <Promo />;
                break;
            case "riwayat":
                return <Riwayat />;
                break;
            default:
                return <Beranda />;
        }
    }

    return (
        <div className="base-app">
            {showPages()}
            <BottomNav/>
        </div>
    );
};

export default App;
