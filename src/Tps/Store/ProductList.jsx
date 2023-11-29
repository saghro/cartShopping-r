import React, { useEffect, useState } from "react";
import Product from "./Product";

export default function ProductList() {
    const [productList, setProductList] = useState([]);

    const displayProduct = () => {
        if (productList.length > 0) {
            return productList.map((product, key) => {
                return <Product product={product} key={key} />;
            });
        }
        return (
            <tr>
                <td colSpan={7}>no Items</td>
            </tr>
        );
    };

    const getProduct = () => {
        fetch("https://fakestoreapi.com/products")
            .then((response) => response.json())
            .then((response) => setProductList(response));
    };

    useEffect(() => {
        getProduct();
    }, []);

    return (
        <div className="container-fluid mx-auto w-75 my-3">
            <h1>Liste des produits :</h1>
            <table className="table">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Image</th>
                    <th>Rating</th>
                </tr>
                </thead>
                <tbody>{displayProduct()}</tbody>
            </table>
        </div>
    );
}