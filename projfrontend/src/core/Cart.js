import React, {useState,useEffect} from "react";
import "../styles.css";
import { API } from "../backend";
import Base from "./Base";
import Card from "./Card";
import { getProducts } from "./helper/coreapicalls";
import { loadcart } from "./helper/cartHelper";
import Paymentb from "./Paymentb";

export default function Cart() {
    const [products, setProducts] = useState([]);
    const [reload, setReload] = useState(false);


    useEffect(() => {
        setProducts(loadcart())
    }, [reload]);
    
    const loadAllProducts = products => {
        return(
            <div>
                <h2>This section is to load products</h2>
                {products.map((product, index)=> (
                    <Card 
                    key={index}
                    product={product}
                    addToCart={false}
                    removeFromCart={true}
                    setReload={setReload}
                    reload={reload}
                    />
        ))}
            </div>
        )
    }

    const loadCheckout = () => {
        return(
            <div>
                <h2>This section is for checkout</h2>
            </div>
        )
    }

  return (
    <Base title="Cart Page" description="Ready to checkout">
      <div className="row text-center">
        <div className="col-6">{products.length > 0 ? (loadAllProducts(products)): (<h3>No products in cart</h3>)}</div>
        <div className="col-6"><Paymentb products={products} setReload={setReload}/></div>
      </div>
    </Base>
  );
}
