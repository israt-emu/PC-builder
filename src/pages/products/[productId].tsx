import {IProduct, ISingleProductProps} from "@/types/products";
import {useRouter} from "next/router";
import {ReactElement} from "react";
import {NextPageWithLayout} from "../_app";
import RootLayout from "@/components/layout/RootLayout";
import Image from "next/image";
import ProductBadge from "@/components/ui/ProductBadge";
import {FaStar} from "react-icons/fa";

// import ProductFeatures from "@/components/ui/ProductFeatures";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";

const ProductDeatils: NextPageWithLayout<ISingleProductProps> = ({product}) => {
  return (
    <section className="">
      <div className="container flex flex-col mx-auto lg:flex-row ">
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
          {/* <ProductFeatures features={product?.key_features} /> */}
        </div>
      </div>
      <div className="py-6 bg-secondary">
        <Tabs defaultValue="description" className="w-10/12 mx-auto ">
          <TabsList className="rounded-none grid grid-cols-3 lg:grid-cols-6 bg-transparent border-b border-gray-500 pb-2">
            <TabsTrigger value="description" className="focus:bg-accent">
              Description
            </TabsTrigger>
            <TabsTrigger value="rating">Rating</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="lg:p-4 mt-3">
            {product?.description}
          </TabsContent>
          <TabsContent value="rating" className="lg:p-6 mt-3">
            <div className="flex items-center gap-2">
              <p className="text-primary font-semibold">Average Rating:</p>
              <FaStar className="text-yellow-500" />
              <p className="text-accent">{(product?.reviews!?.reduce((acc, review) => acc + review.rating, 0) / product?.reviews.length).toFixed(1)}</p>
            </div>
            <p className="text-primary font-semibold">Individual Rating:</p>
            {product?.reviews?.map((review, i) => (
              <div key={i} className="flex items-center">
                <p>{review?.name}: </p>
                <p className="flex items-center gap-1">
                  ( {review?.rating}) <FaStar />
                </p>
              </div>
            ))}
          </TabsContent>
          <TabsContent value="reviews" className="lg:p-6 mt-3">
            {product?.reviews?.map((review, i) => (
              <div key={i} className="flex items-center gap-2">
                <p>{review?.name}: </p>
                <p>{review?.review}</p>
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
ProductDeatils.getLayout = function getLayout(ProductDeatils: ReactElement) {
  return <RootLayout>{ProductDeatils}</RootLayout>;
};
export const getStaticPaths = async () => {
  const res = await fetch(`${process.env.BASE_URL}/api/products`);
  const data = await res.json();

  const paths = data?.data?.map((single: IProduct) => ({
    params: {productId: single._id},
  }));

  return {paths, fallback: false};
};
export const getStaticProps = async (context: {params: any}) => {
  const {params} = context;
  const res = await fetch(`${process.env.BASE_URL}/api/products/${params.productId}`);
  const data = await res.json();
  // console.log(data);

  return {
    props: {
      product: data?.data,
    },
  };
};
export default ProductDeatils;
