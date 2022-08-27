import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { clearCart, getCartTotal } from "./redux/actions";
import { MDBBtn, MDBIcon, MDBBtnGroup } from "mdb-react-ui-kit";
import CartItem from "./CartItem";
import {
  clearCart,
  getCartItems,
  getCartTotal,
} from "./redux/feature/cartSlice";

const CartContainer = () => {
  const navigate = useNavigate()
  const { totalAmount, items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [items]);

  if (items.length === 0) {
    return (
      <>
        <h3 className="fs-bold" style={{ marginTop: "20px" }}>
          Your Shopping{" "}
          <span>
            <MDBIcon fas icon="shopping-bag" />
          </span>{" "}
          is Empty
        </h3>
        <MDBBtn
          className="mx-2"
          style={{ marginRight: "100px" }}
          onClick={() => dispatch(getCartItems())}
        >
          Get Items
        </MDBBtn>
      </>
    );
  }
  const ClearCart = () => {
    dispatch(clearCart());
  };
  const  PlaceOrder = ()=>{
    dispatch(clearCart());
   navigate("/")
 }
  return (
    <div>
      <h2 className="lead-mb-0 mt-2">Your Shooping Cart</h2>
      {items.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
      <footer>
        <hr />
        <div>
          <h4
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              marginRight: "60px",
            }}
          >
            Total <span>${totalAmount}</span>
          </h4>
        </div>

        <MDBBtn
          color="danger"
          onClick={ClearCart}
          style={{ width: "140px", marginTop: "50px" , marginRight:"5px" }}
        >
          Clear Cart
        </MDBBtn> 
        <MDBBtn
          color="danger"
          onClick={PlaceOrder}
          style={{ width: "140px", marginTop: "50px" }}
        >
          Place Order
        </MDBBtn>
      </footer>
    </div>
  );
};

export default CartContainer;
