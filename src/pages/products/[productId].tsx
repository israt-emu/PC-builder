import {IProduct, ISingleProductProps} from "@/types/products";
import {useRouter} from "next/router";
import {ReactElement} from "react";
import {NextPageWithLayout} from "../_app";
import RootLayout from "@/components/layout/RootLayout";

const ProductDeatils: NextPageWithLayout<ISingleProductProps> = ({product}: ISingleProductProps) => {
  return <div>{product?.productName}</div>;
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
