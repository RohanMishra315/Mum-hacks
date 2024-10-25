
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, title, price, image }) => {
  const { addToCart } = useCart();

  const handleBuyNow = () => {
    addToCart({ id, title, price, image });
  };

  return (
    <div className="bg-white p-4 shadow-md rounded-lg hover:shadow-lg transition duration-200">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-md" />
      <h4 className="font-bold mt-4">{title}</h4>
      <p className="text-gray-700">${price.toFixed(2)}</p>
      <button
        onClick={handleBuyNow}
        className="bg-green-600 text-white px-4 py-2 mt-2 rounded-full hover:bg-green-700 w-full"
      >
        Buy
      </button>
    </div>
  );
};

export default ProductCard;
