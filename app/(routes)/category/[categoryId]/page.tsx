import getCategory from "@/actions/getCategory";
import getColors from "@/actions/getColors";
import getProducts from "@/actions/getProducts";
import getSizes from "@/actions/getSizes";
import Billboard from "@/components/Billboard";
import Container from "@/components/ui/Container";
import React from "react";
import Filter from "./components/Filter";
import NoResult from "@/components/ui/NoResult";
import ProductCard from "@/components/ui/ProductCard";
import MobileFilers from "./components/MobileFilers";

export const revalidate = 0;

interface CategoryPageProps {
  params: {
    categoryId: string;
  };
  searchParams: {
    colorId: string;
    sizeId: string;
  };
}

const CategoryPage: React.FC<CategoryPageProps> = async ({
  params,
  searchParams,
}) => {
  const products = await getProducts({
    categoryId: params.categoryId,
    colorId: searchParams.colorId,
    sizeId: searchParams.sizeId,
  });

  const colors = await getColors();
  const sizes = await getSizes();
  const category = await getCategory(params.categoryId);

  console.log("Category ", category);

  return (
    <div className="bg-white">
      <Container>
        <Billboard data={category?.billboard} />
        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            {/* Add Mobile Filters */}
            <MobileFilers sizes={sizes} colors={colors}/>
            <div className="hidden lg:block">
              <Filter valueKey="sizeId" name="Sizes" data={sizes} />
              <Filter valueKey="colorId" name="Colors" data={colors} />
            </div>
            <div className="mt-6 lg:col-span-4 lg:mt-0">
              {products.length === 0 && <NoResult />}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {products.map((item) => (
                  <ProductCard key={item.id} data={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CategoryPage;
