
import ProductCard from './ProductCard';

const products = [
  { id: 1, title: 'Product 1', price: 19.99, image: 'https://www.bhphotovideo.com/images/images2500x2500/vizio_d32h_f4_d_series_32_class_smart_1437586.jpg' },
  { id: 2, title: 'Product 2', price: 29.99, image: 'https://th.bing.com/th/id/OIP.ypaGetWxAfL2LS9yUaRyMAHaHK?rs=1&pid=ImgDetMain' },
  { id: 3, title: 'Product 3', price: 39.99, image: 'https://th.bing.com/th/id/OIP.SPbmk1vjb12lMLdrTRve7QHaHa?rs=1&pid=ImgDetMain' },
  { id: 2, title: 'Product 2', price: 29.99, image: 'https://www.gannett-cdn.com/presto/2019/08/21/USAT/8b9d4631-d8d1-4f93-9483-5b3d78472e7d-Apple-AirPods-On-Table.jpg?crop=2189,1231,x0,y0&width=3200&height=1680&fit=bounds' },
  { id: 3, title: 'Product 3', price: 39.99, image: 'https://th.bing.com/th/id/OIP.SPbmk1vjb12lMLdrTRve7QHaHa?rs=1&pid=ImgDetMain' },
  { id: 2, title: 'Product 2', price: 29.99, image: 'https://th.bing.com/th/id/OIP.ypaGetWxAfL2LS9yUaRyMAHaHK?rs=1&pid=ImgDetMain0' },
  { id: 3, title: 'Product 3', price: 39.99, image: 'https://www.gannett-cdn.com/presto/2019/08/21/USAT/8b9d4631-d8d1-4f93-9483-5b3d78472e7d-Apple-AirPods-On-Table.jpg?crop=2189,1231,x0,y0&width=3200&height=1680&fit=bounds' },
];

const ProductGrid: React.FC = () => {
  return (
    <section className="container mx-auto py-10">
      <h3 className="text-3xl font-bold text-center mb-8">Featured Products</h3>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
