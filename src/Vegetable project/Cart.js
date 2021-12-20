import React, { Component } from 'react'
// import NavBar from './NavBar';
import {connect} from 'react-redux';
import {deleteproduct,addproduct} from './Vegetable project/Action';
import {Button,Card,ListGroup} from 'react-bootstrap';
import { Link } from 'react-router-dom';
 
class Cart extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       total:0
    }
  }

  render() {
       var total1=0
       for (let i=0; i<this.props.products.length;i++)
       {
          total1=total1+this.props.products[i].product_totalprice
       }
       this.state.total=total1
    //    this.props.gtotal(total1)
       console.log(this.props.products)
    return (
      <div>
            {/* <NavBar /> */}
           <h1>Item Details</h1>

<ListGroup horizontal style={{display:'flex',flexWrap:'wrap'}}>
           {this.props.products.map((veg,index)=>
              <ListGroup.Item key={index}>
                 <Card style={{ width: '18rem' }} >
                 <Card.Img variant="top" 
                 src={"https://www.wlns.com/wp-content/uploads/sites/50/2020/10/vegetables.jpg" } />
                 <Card.Body>
                   <Card.Title>Name:{veg.product_name}</Card.Title>
                   <Card.Text>Price in Rs: {veg.product_price*veg.product_quantity} </Card.Text>
                   <Card.Text>Quantity: {veg.product_quantity} </Card.Text>
                   
                   <Button type="button" variant="danger" 
                   onClick={()=>this.props.delete(veg.product_id)}>
                   DELETE</Button>
                   </Card.Body>
                  </Card>
                 </ListGroup.Item>
            )}
            </ListGroup>
            <h1>Total Price in Rs :{this.state.total}</h1>
            {/* <Link to='/profile'> */}
            <Button type="button" variant="secondary">
                   Place Order 2021</Button>
            {/* </Link> */}
      </div>
    )
  }
}
function mapStateToProps(state){
        return {
           products: state.VegetableReducer.productList,
        //    gtotal: state.totalReducer.total
        }
}
const mapDispatchToProps = dispatch => {
  return {
    delete: (product_id) => dispatch(deleteproduct(product_id)),
    // gtotal: (total) => dispatch(gtotal(total))
  }
}
    
export default connect(mapStateToProps,mapDispatchToProps)(Cart);