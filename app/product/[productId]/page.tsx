import Container from "@/app/components/Container";
import ProductDetails from "./productDetails";
import ListRatings from "./ListRatings";
import getProductById from "@/actions/getProductById";
import NullData from "@/app/components/NullData";
import { getCurrentUser } from "@/actions/getCurrentUser";
import AddRating from "./AddRating";

interface IPrams {
  productId: string;
}



const Product = async ({ params }: { params: IPrams }) => {
  //console.log("params", params)
  const product = await getProductById(params);
  const user = await getCurrentUser();
  if (!product)
    return <NullData title="OOPS! Product with given ID does not exist" />;

  return (
    <div className="p-8">
      <Container>
        <ProductDetails product={product} />
        <div className="flex flex-col mt-20 gap-4">
          <AddRating product={product} user={user} />
          <ListRatings product={product} />
        </div>
      </Container>
    </div>
  );
};

export default Product;
