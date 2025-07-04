import { useState } from "react";
import { useLocation } from "react-router";

const Cart = () => {
  const location = useLocation();
  const cart = location.state?.cart || [];

  // Initialize quantities per item id
  const [quantities, setQuantities] = useState(() => {
    const initialQuantities = {};
    cart.forEach((item) => {
      initialQuantities[item.id] = 1;
    });
    return initialQuantities;
  });

  const handleQuantityIncrease = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: prev[id] + 1,
    }));
  };

  const handleQuantityDecrease = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: prev[id] > 1 ? prev[id] - 1 : 1,
    }));
  };

  return (
    <div>
      <div className="text-4xl m-5 flex justify-center items-center">
        Shopping Cart
      </div>
      <div className="flex justify-center items-center flex-col">
        {cart.length === 0 ? (
          <h1>Your cart is empty</h1>
        ) : (
          <div>
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-center items-center border shadow-lg m-10 p-6 gap-6"
              >
                <div className="flex flex-col items-center">
                  <strong>Category:</strong> {item.category}
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "contain",
                    }}
                  />
                </div>
                <div className="text-lg">
                  <strong>Price:</strong> ${item.price}
                  <br />
                  <div  className="line-through text-gray">
                  <strong>Total price:</strong> $
                  {(item.price * quantities[item.id]).toFixed(2)}
                  </div>
                  <strong>Discount: 10%</strong>
                  <br/>
                  <strong>Final Price:</strong> $
                  {(item.price * quantities[item.id] * 0.9).toFixed(2)}
                </div>
                <div className="flex justify-center items-center gap-2">
                  <button
                    onClick={() => handleQuantityIncrease(item.id)}
                    className="border shadow p-2 px-4 bg-green-200"
                  >
                    +
                  </button>
                  <span className="text-2xl">{quantities[item.id]}</span>
                  <button
                    onClick={() => handleQuantityDecrease(item.id)}
                    className="border shadow p-2 px-4 bg-red-200"
                  >
                    -
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
// This Cart component displays the items in the cart, allows users to adjust quantities, and calculates total prices.
// It uses the `useLocation` hook to access the cart data passed from the Products page