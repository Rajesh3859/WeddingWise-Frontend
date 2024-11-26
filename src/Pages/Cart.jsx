import Servicecard from "../Components/Cards/Servicecard";

const Cart = () => {
  // Fix the useState syntax

  const handleAddToCart = (addToCart) => {
    console.log("Service added to cart:", addToCart); // Add addToCart to cart
    alert(`${addToCart.name} added to cart!`);
  };

  const sampleServices = {
    _id: "12345",
    name: "Premium Photography Package",
    price: 15000,
    description: "Includes pre-wedding and wedding day photography.",
    imageUrl: "https://example.com/image.jpg",
  };

  return (
    <div>
      <Servicecard
        services={sampleServices} // Pass the single object
        addToCart={handleAddToCart} // Pass the addToCart function
      />
    </div>
  );
};

export default Cart;
