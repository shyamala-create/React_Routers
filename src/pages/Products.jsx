import { useState } from "react";
import { Outlet, useLoaderData, useNavigate } from "react-router";
import Cart from "./Cart";

const Products = () => {
  const navigate = useNavigate();
  const productList = useLoaderData();
  const [cart, setCart] = useState([]);

  const handleCart = (id) => {
    const product = productList.find((item) => item.id === id);
    if (product && !cart.find((item) => item.id === id)) {
      setCart([...cart, product]);
      alert("Item Added from cart");
    }
  };

  const isInCart = (id) => {
    return cart.some((cartItem) => cartItem.id === id);
  };

  const removeCartItem = (id) => {
    const updated = cart.filter((item) => item.id !== id);
    setCart(updated);
    alert("Item removed from cart");
  };

  //need to install tailwind css for styling
  return (
    <div>
      <nav className="flex justify-center gap-10 items-center p-6 bg-indigo-400 fixed top-0 left-0 right-0">
        <h1 className="text-3xl text-white">Products Lists</h1>
        <p className="text-xl text-white shadow">
          Browse our exclusive collection of products below and add your
          favorites to the cart!
        </p>
        <button
          onClick={() => navigate("/cart", { state: { cart } })}
          className="flex items-center justify-center gap-2 border shadow text-white border-black p-3 w-100 rounded-lg hover:bg-gray-400 transition duration-300"
        >
          Cart Items <span className="text-xl">{cart.length}</span>
        </button>
      </nav>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6 mt-10">
        {productList.length > 0 &&
          productList.map((item) => (
            <div
              key={item.id}
              className="border border-black rounded-lg mt-20 p-6 shadow bg-white-100 w-full max-w-sm mx-auto flex flex-col items-center justify-between"
            >
              <div className="flex flex-col justify-center items-center gap-2">
                <strong>Category:</strong> {item.category} <br />
                <img
                  src={item.image}
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "contain",
                  }}
                />
                <strong>Price: ${item.price}</strong> <br />
              </div>
              {isInCart(item.id) ? (
                <div>
                  <button
                    onClick={() => removeCartItem(item.id)}
                    className="border border-black p-3 bg-red-400 rounded text-white"
                  >
                    Remove from cart
                  </button>
                </div>
              ) : (
                <div>
                  <button
                    onClick={() => handleCart(item.id)}
                    className="border border-black p-3 bg-indigo-400 rounded text-white"
                  >
                    Add to Cart
                  </button>
                </div>
              )}
            </div>
          ))}
      </div>
      <Outlet />
    </div>
  );
};

export default Products;
