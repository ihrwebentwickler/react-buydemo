import {useEffect, useState} from "react";
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux';

import axios from "axios";
import './home.scss'
import Item from '../Item/Item'
import {Product} from "../../models/product";

function Home() {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const {data: response} = await axios.get('https://jsonplaceholder.typicode.com/users');
                let dataNew:any = [];
                response.forEach((product: Product) => {
                    dataNew.push({
                            id: product.id,
                            title: product.name + " " + product.website,
                            price: 122
                        }
                    );
                });
                setData(dataNew);
            } catch (error: any) {
                console.error(error.message);
            }
        }

        fetchData();
    });

    const navigate = useNavigate()
    const cart = useSelector((state: any) => state.cart)

    const getTotalQuantity = () => {
        let total = 0
        cart.forEach((item: any) => {
            total += item.quantity
        })
        return total
    }

    return (
        <div className="wrapper-home">
            <div className="home__container">
                <div className="home__row">
                    {data.map((product: any) => (
                        <Item
                            id={product.id}
                            title={product.title}
                            price={product.price}
                        />
                    ))};
                </div>
            </div>
            <div className='shopping-cart' onClick={() => navigate('/cart')}>
                <span>Current</span>
                <p>{getTotalQuantity() || 0}</p>
            </div>
        </div>
    )
}

export default Home