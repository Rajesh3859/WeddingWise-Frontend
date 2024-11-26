import { useState } from "react";
import ServiceCard from "../Components/Cards/ServiceCard";

const Cart = () => {
  const [setCart] = useState([]);

  const handleAddToCart = (service) => {
    console.log("Service added to cart:", service);
    setCart((prevCart) => [...prevCart, service]);
    alert(`${service.name} added to cart!`);
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
      {sampleServices.map((service) => (
        <ServiceCard
          key={service._id}
          services={service}
          addToCart={handleAddToCart} // Pass the addToCart function
        />
      ))}
    </div>
  );
};

export default Cart;
