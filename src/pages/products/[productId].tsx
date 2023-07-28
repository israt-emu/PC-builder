import {IProduct, ISingleProductProps} from "@/types/products";
import {useRouter} from "next/router";
import {ReactElement} from "react";
import {NextPageWithLayout} from "../_app";
import RootLayout from "@/components/layout/RootLayout";
import Image from "next/image";
import ProductBadge from "@/components/ui/ProductBadge";
import ProductFeatures from "@/components/ui/ProductFeatures";

const ProductDeatils: NextPageWithLayout<ISingleProductProps> = ({product}: ISingleProductProps) => {
  return (
    <section className="">
      <div className="container flex flex-col mx-auto lg:flex-row">
        <div className="w-full lg:w-1/3">
          <Image src={product?.image} alt="product" width={400} height={400} />
        </div>
        <div className="flex flex-col w-full p-6 lg:w-2/3 md:p-8 lg:p-12">
          <p className="text-xl text-accent font-semibold">{product?.productName}</p>
          <div className="flex items-center gap-3 mt-3">
            <ProductBadge text="Price:" value={`${product?.price}৳`} />
            <ProductBadge text="Status:" value={`${product?.status}`} />
            <ProductBadge text="Category:" value={`${product?.category}`} />
          </div>
          <ProductFeatures features={product?.key_features} />
        </div>
      </div>
    </section>
  );
};
ProductDeatils.getLayout = function getLayout(ProductDeatils: ReactElement) {
  return <RootLayout>{ProductDeatils}</RootLayout>;
};
export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:3000/api/products");
  const data = await res.json();

  const paths = data?.data?.map((single: IProduct) => ({
    params: {productId: single._id},
  }));

  return {paths, fallback: false};
};
export const getStaticProps = async (context: {params: any}) => {
  const {params} = context;
  const res = await fetch(`http://localhost:3000/api/products/${params.productId}`);
  const data = await res.json();
  // console.log(data);

  return {
    props: {
      product: data?.data,
    },
  };
};
export default ProductDeatils;
