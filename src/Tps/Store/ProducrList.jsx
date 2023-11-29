import {useEffect} from "react";

export default function  ProducrList(){
    const getProduct=()=>{
        const products = fetch("https://fakestoreapi.com/products")
                          .then(response  =>response.json())
                          .then(response =>console.log(response))

    }

    useEffect(() => {
        getProduct()
     }, []);
    return(
        <div className="container-fluid mx-auto w-75 my-3">
        <h1>List des produit :</h1>
            <table class="table">
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
                <tbody>
                <tr>
                    <td scope="row"></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>

                </tbody>
            </table>
        </div>
    )
 }