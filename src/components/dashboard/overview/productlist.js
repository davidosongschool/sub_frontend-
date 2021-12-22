import { Button } from "react-bootstrap"

const ProductList = (props) => {
    return(
        <div>
        <h1 className="d-inline-block">List of products</h1>
        <Button className="d-inline-block ml-4">View All</Button>
        <hr />
        <table width="100%">
        <tbody>
        {props.listofproducts?
            props.listofproducts.map(item => (

               <tr>
                <td>{item.name}</td>
                <td><Button>Manage</Button></td>
               </tr>
            ))
            :
            <h3>Loading products..</h3>
            }
        </tbody>
        </table>
        </div>

    )
}

export default ProductList