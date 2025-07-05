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

  // Calculate overall total
  const total = cart.reduce((acc, item) => {
    return acc + item.price * quantities[item.id];
  }, 0);

  const discount = total * 0.1;
  const finalTotal = total - discount;

  return (
    <div>
      <div className="text-4xl m-5 flex justify-center items-center">
        Shopping Cart
      </div>
      <div className="flex justify-center items-center flex-col">
        {cart.length === 0 ? (
          <h1>Your cart is empty</h1>
        ) : (
          <div className="w-full max-w-4xl">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border shadow-lg m-5 p-6 gap-6"
              >
                <div className="flex flex-col items-center w-1/4">
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
                <div className="text-lg w-1/2">
                  <strong>Price:</strong> ${item.price.toFixed(2)}
                  <br />
                  <strong>Total Price:</strong> $
                  {(item.price * quantities[item.id]).toFixed(2)}
                </div>
                <div className="flex justify-center items-center gap-2 w-1/4">
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

            {/* Overall Summary Section */}
            <div className="border-t mt-10 pt-6 text-xl text-right pr-6">
              <div><strong>Total:</strong> ${total.toFixed(2)}</div>
              <div><strong>Discount (10%):</strong> -${discount.toFixed(2)}</div>
              <div className="text-2xl mt-2">
                <strong>Final Total:</strong> ${finalTotal.toFixed(2)}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
// This code defines a Cart component that displays items in the shopping cart.
// It allows users to increase or decrease the quantity of each item, calculates the total price,