import {ReactElement, useState} from "react";
import {Card, CardContent, CardFooter} from "@/components/ui/card";
import {IProduct, IProductProps} from "@/types/products";
import Link from "next/link";
import Image from "next/image";
import {FaStar} from "react-icons/fa";
import RootLayout from "@/components/layout/RootLayout";
import {NextPageWithLayout} from "@/pages/_app";
import {useRouter} from "next/router";
import {useAppDispatch} from "@/redux/hooks";
import {addToBuild} from "@/redux/pcBuilder/pcBuilderSlice";
const PCBuilderStorageDevice: NextPageWithLayout<IProductProps> = ({products}) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const handleAddToBuild = (product: IProduct) => {
    dispatch(addToBuild(product));
    router.push("/pc-builder");
  };
  return (
    <div className="md:container w-10/12 mx-auto py-12">
      <h1 className="text-lg text-accent bg-background py-2 px-4 shadow-md mb-4  md:w-3/6 lg:w-2/6 font-semibold">Storage Device</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {products?.map(
          (product, i) =>
            product?.category === "storage-device" && (
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
                <CardFooter className="text-right flex justify-end">
                  <button className="text-sm gradient py-1 px-2 rounded text-background" onClick={() => handleAddToBuild(product)}>
                    Add to builder
                  </button>
                </CardFooter>
              </Card>
            )
        )}
      </div>
    </div>
  );
};
PCBuilderStorageDevice.getLayout = function getLayout(PCBuilderStorageDevice: ReactElement) {
  return <RootLayout>{PCBuilderStorageDevice}</RootLayout>;
};
export const getServerSideProps = async () => {
  const res = await fetch(`${process.env.BASE_URL}/api/products`);
  const data = await res.json();
  return {props: {products: data?.data}};
};
export default PCBuilderStorageDevice;
