import React from 'react';

import './Header.scss';
import { Link } from 'react-router-dom';
export default class Header extends React.Component {
    render() {
        return (
            <header>
                <Link to="products">Products</Link>
                <Link to="basket">Basket</Link>
            </header>
        );
    }
}