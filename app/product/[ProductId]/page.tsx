import Container from "@/app/Components/Container";
import ProductDetails from "./ProductDetails";
import { products } from "@/utils/products";
interface Product {
  productId: string;
}
const Product = ({params} : {params : Product}) => {
  return (
    <>
      <Container>
        <ProductDetails product={products} />
      </Container>
    </>
  );
};

export default Product;
