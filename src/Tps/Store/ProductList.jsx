import React, { useEffect, useState } from "react";
import Product from "./Product";

export default function ProductList() {
    const [productList, setProductList] = useState([]);
    const [searchInput , setSearchInput]=useState('')
    const [categories , setCategories]=useState('')

    const displayProduct = () => {
        const productTemp = productList.filter(product => {
            const idString = String(product.id); // Convert id to string
            return (
                idString.includes(searchInput) ||
                product.title.includes(searchInput) ||
                product.description.includes(searchInput)
            );
        });

        if (productTemp.length > 0) {
            return productTemp.map((product, key) => {
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
    const getCategories = () => {
        fetch("https://fakestoreapi.com/products/categories")
            .then((response) => response.json())
            .then((response) => setCategories(response));
    };

    useEffect(() => {
        getProduct();
        getCategories();
    }, []);

    const handleSearch = (e) => {
        e.preventDefault()
        const searchValue = document.querySelector('#Search').value;
        setSearchInput(searchValue)
    };

    const displayCategories = () => {
        if (Array.isArray(categories)) {
            return categories.map(category =>
                <button className="btn btn-secondary">
                    {category}
                </button>
            );
        } else {
            return <div>No categories available</div>;
        }
    };

    return (
        <div className="container-fluid mx-auto w-75 my-3">
            <h2>Search :</h2>
              <form>
                  <div className="row g-3 align-items-center">
                      <div className="col-auto">
                      <label className="col-form-label">Search</label>
                       </div>
                      <div className="col-auto">
                      <input type="text"  id="Search" className="form-control"/>
                      </div>

                  <div className="col-auto">
                      <input type="submit" className="btn btn-primary" value="search" onClick={handleSearch}/>

                  </div>
                  </div>
                  <div className="row g-3 align-items-center">
                      <div className="btn-group">
                          {displayCategories()}

                      </div>
                  </div>
              </form>
            <h1>produits :</h1>
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