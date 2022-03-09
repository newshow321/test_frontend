import React, {useEffect, useState} from "react";
import "./index.css";
import {FaSearch, FaUtensils, FaLocationArrow} from 'react-icons/fa';
import {api} from "../../bootstrap/bootstrapApis";

const Beranda = () => {
    const [categories, setCategories] = useState([]);
    const [merchants, setMerchants] = useState([]);
    const [dataFilter, setDataFilter] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        api.get('/api/kategoris').then((res) => {
            setCategories(res.data.data);
        }).catch((e) => console.log(e));
    }, []);

    useEffect(() => {
        api.get('/api/restorans').then((res) => {
            setMerchants(res.data.data);
        }).catch((e) => console.log(e));
    }, []);

    const onChangeSearch = (e) => {
        let text = e.target.value;
        setSearch(text);
        if (merchants.length > 0) {
            const condition = new RegExp(text, 'i');
            const resultTitle = merchants.filter((el) => {
                const { nama_restoran } = el;
                return condition.test(nama_restoran);
            });

            if (resultTitle.length > 0) {
                setDataFilter([...resultTitle]);
            } else {
                dataFilter.splice(0, dataFilter.length);
                setDataFilter(dataFilter);
            }
        }
    }

    const dataMerchant = () => {
        if (dataFilter.length > 0) {
            return dataFilter.map((x) => (
                <div className="box-merchant">
                    <div className="sub-box-merchant-l">
                        <FaUtensils />
                    </div>
                    <div className="sub-box-merchant-r">
                        <div className="text-merchant-name">{x.nama_restoran}</div>
                        <div className="text-merchant-desc">Kami menyediakan makanan dengan olahan...</div>
                        <div className="line-merchant" />
                        <div className="box-rating">
                            <div>⭐<span className="text-rating">{x.rate_restoran}</span></div>
                            <div>
                            <span>
                                <FaLocationArrow />
                                <span className="text-address">{x.alamat}</span>
                            </span>
                            </div>
                        </div>
                    </div>
                </div>
            ));
        } else {
            return merchants.map((x) => (
                <div className="box-merchant">
                    <div className="sub-box-merchant-l">
                        <FaUtensils />
                    </div>
                    <div className="sub-box-merchant-r">
                        <div className="text-merchant-name">{x.nama_restoran}</div>
                        <div className="text-merchant-desc">Kami menyediakan makanan dengan olahan...</div>
                        <div className="line-merchant" />
                        <div className="box-rating">
                            <div>⭐<span className="text-rating">{x.rate_restoran}</span></div>
                            <div>
                            <span>
                                <FaLocationArrow />
                                <span className="text-address">{x.alamat}</span>
                            </span>
                            </div>
                        </div>
                    </div>
                </div>
            ))
        }
    }

    return (
        <div className="box-container">
            <div className="box-header-component">
                <div className="box-input">
                    <div className="sub-box-l-input">
                        <FaSearch />
                    </div>
                    <div className="sub-box-r-input">
                        <input
                            className="input-style"
                            placeholder="Cari Merchant"
                            value={search}
                            onChange={onChangeSearch}
                        />
                    </div>
                </div>
                <div className="box-categories">
                    {categories.map((x) => (
                        <span className="child-category">
                            <span className="text-category">{x.nama_kategori}</span>
                        </span>
                    ))}
                </div>
            </div>
            <div className="box-container-merchant">
                {dataMerchant()}
            </div>
        </div>
    );
};

export default Beranda;
