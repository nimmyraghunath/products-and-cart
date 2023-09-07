import React, { useEffect, useState } from "react";

const Cart = ({ state, dispatch }) => {
  const { cart } = state;
  const [total, setTotal] = useState(0);

  const ChangeQty = (id, qty) => {
    dispatch({
      type: "CHANGE_QTY",
      payload: {
        id,
        qty,
      },
    });
  };

  useEffect(() => {
    setTotal(
      cart.reduce((acc = 0, item) => 
        acc + Number(item.price) * item.qty, 0
      )
    );
  }, [cart]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: 10,
        padding: 10,
        width: "20%",
        backgroundColor: "lightgray",
      }}
    >
      <b style={{ fontSize: 30, alignSelf: "center", color:"teal" }}>Cart</b>
      <b style={{ alignSelf: "center",color:"teal" }}>Subtotal :${total}</b>
      {cart && cart.length > 0 ? (
        cart.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              padding: 10,
              border: "1px solid gray",
              margin: 5,
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", gap: 10 }}>
              <img
                src={item.thumbnail}
                alt={item.title}
                style={{ height: 70, objectFit: "cover" }}
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  flexDirection: "column",
                }}
              >
                <span>{item.title}</span>
                <b>${item.price}</b>
              </div>
            </div>
            <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
              <button onClick={() => ChangeQty(item.id, item.qty - 1)}>
                -
              </button>
              <span>{item.qty}</span>
              <button onClick={() => ChangeQty(item.id, item.qty + 1)}>
                +
              </button>
            </div>
          </div>
        ))
      ) : (
        <span style={{ padding: 20, alignSelf: "center", color:"#b35f0b", fontWeight:"bold" }}>Cart is empty</span>
      )}
    </div>
  );
};

export default Cart;
