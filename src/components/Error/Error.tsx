import React from 'react';
import './Error.scss';
import {useRouteError} from "react-router-dom";

export default class Products extends React.Component {
    error = useRouteError();

    isError(error: any): error is { statusText: string } {
        return 'statusText' in error;
    }

    render() {
        return (
            <div className="wrapper-error">
                {this.isError(this.error) && <p>{this.error.statusText}</p>}
                {/*<p>Call Products-Site: <a href="Home">Products</a></p>*/}
            </div>
        )
    }
}