export const revalidate = 0;
import Container from "./components/Container";
import HomeBanner from "./components/HomeBanner";
import NullData from "./components/NullData";
import ProductCard from "./components/products/ProductCard";
import getProducts, { IProductParams } from "@/actions/getProducts";

interface HomeProps{
  searchParams: IProductParams
}

export default async function Home({ searchParams }: HomeProps) {
  const products = await getProducts(searchParams);

  if (products.length === 0) {
    return <NullData title = "OOPS ! No Products Found"/>
  }


  function shuffleArray(array: any){
    for(let i = array.length - 1; i>0; i--){
      const j = Math.floor(Math.random()*(i+1));
      [array[i], array[j]] = [array[j], array[i]]
    }
    return array
  }

  const shuffledProducts = shuffleArray(products);

  return (
    <div className="p-8">
      <Container>
        <div className="pb-8">
          <HomeBanner />
        </div>
        <div
          className="grid 
        grid-cols-2
        sm:grid-cols-3 
        lg:grid-cols-6
        xl:grid-col-5 
        2xl:grid-col-6 
        gap-8"
        >
          {shuffledProducts.map((product: any) => {
            return <ProductCard key={product.id} data={product} />;
          })}
        </div>
      </Container>
    </div>
  );
}
