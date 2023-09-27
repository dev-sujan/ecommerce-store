import getProduct from "@/actions/getProduct";
import getProducts from "@/actions/getProducts";
import Info from "@/components/Info";
import ProductList from "@/components/ProductList";
import Gallery from "@/components/gallery";
import Container from "@/components/ui/Container";
import React from "react";

interface ProductPageProps {
  params: { productId: string };
}

const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
  const products = await getProduct(params.productId);
  const suggestedProducts = await getProducts({
    categoryId: products?.category?.id,
  });

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-3 lg:items-start lg:gap-x-8">
            <Gallery images={products.images} />
            <div className="mt-10 col-span-2 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <Info data={products} />
            </div>
            <hr className="my-10" />
          </div>
          <ProductList title="Related items" items={suggestedProducts} />
        </div>
      </Container>
    </div>
  );
};

export default ProductPage;
