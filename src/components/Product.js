import React from "react";

const Product = ({ state, dispatch }) => {
  const { products, cart } = state;

  return (
    <div
      style={{
        display: "flex",
        width: "80%",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
      }}
    >
      {products.map((product) => {
        return (
          <div
            key={product.id}
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: 10,
              padding: 10,
              border: "1px solid orange",
              gap: 10,
              width: "30%",
            }}
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              style={{ height: 200, objectFit: "cover" }}
            />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>{product.title}</span>
              <span>${product.price}</span>
            </div>
           

            {cart.some((p) => p.id === product.id) ? (
              <button
                style={{
                  padding: 5,
                  border: 0,
                  backgroundColor: "red",
                  borderRadius: 5,
                  color: "white",
                }}
                onClick={()=>dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: {
                    id: product.id,
                  },
                })}
              >
                Remove from Cart
              </button>
            ) : (
              <button
                style={{
                  padding: 5,
                  border: 0,
                  backgroundColor: "yellow",
                  borderRadius: 5,
                  color: "orange",
                }}
                onClick={()=>dispatch({
                  type: "ADD_TO_CART",
                  payload: {
                    id: product.id,
                    title: product.title,
                    thumbnail: product.thumbnail,
                    qty: 1,
                    price: product.price,
                  },
                })}
              >
                Add to Cart
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Product;
