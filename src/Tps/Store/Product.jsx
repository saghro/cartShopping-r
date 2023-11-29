export default function  Product({product}){
    return (
        <tr>
            <td>{product.id}</td>
            <td>{product.title}</td>
            <td></td>
            <td>{product.description}</td>
            <td>{product.category}</td>

        </tr>
    )
}