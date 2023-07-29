import {ReactElement, useState} from "react";
import {Card, CardContent} from "@/components/ui/card";
import {IProductProps} from "@/types/products";
import Link from "next/link";
import Image from "next/image";
import {FaStar} from "react-icons/fa";
import RootLayout from "@/components/layout/RootLayout";
import {NextPageWithLayout} from "@/pages/_app";
const BuilderPowerSupply: NextPageWithLayout<IProductProps> = ({products}) => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-lg text-accent bg-background py-2 px-4 shadow-md mb-4  md:w-3/6 lg:w-2/6 font-semibold">Power Supply Unit</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {products?.map(
          (product, i) =>
            product?.category === "power-supply" && (
              <Card key={i} className="shadow-md hover:shadow-2xl">
                <Link href={`/products/${product?._id}`}>
                  <CardContent className="relative">
                    <div className="bg-primary inline-flex rounded-l-full py-1 pl-3 pr-1 absolute right-0 text-sm text-background capitalize">{product?.category}</div>
                    <Image src={product?.image} alt="product-img" width={200} height={160} className="mx-auto p-4" />
                    <p className="font-semibold my-2">{product?.productName}</p>
                    <div className="flex items-center justify-end gap-1">
                      <FaStar className="text-yellow-500" />
                      <p className="text-accent">{(product?.reviews!?.reduce((acc, review) => acc + review.rating, 0) / product?.reviews.length).toFixed(1)}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="font-semibold text-accent">{product?.price}৳</p>
                      <p className="text-sm text-primary font-semibold">{product?.status}</p>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            )
        )}
      </div>
    </div>
  );
};
BuilderPowerSupply.getLayout = function getLayout(BuilderPowerSupply: ReactElement) {
  return <RootLayout>{BuilderPowerSupply}</RootLayout>;
};
export const getServerSideProps = async () => {
  const res = await fetch(`${process.env.BASE_URL}/api/products`);
  const data = await res.json();
  return {props: {products: data?.data}};
};
export default BuilderPowerSupply;
