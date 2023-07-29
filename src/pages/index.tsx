import Image from "next/image";
import {Inter} from "next/font/google";
import {ReactElement} from "react";
import {NextPageWithLayout} from "./_app";
import RootLayout from "@/components/layout/RootLayout";
import bannerImg from "../assets/images/banner.jpg";
import {Button} from "@/components/ui/button";
import FeaturedCategory from "@/components/category/FeaturedCategory";
import FeaturedProducts from "@/components/products/FeaturedProducts";
import {IProductProps} from "@/types/products";

const inter = Inter({subsets: ["latin"]});

const Home: NextPageWithLayout<IProductProps> = ({products}) => {
  console.log(products);
  return (
    <main className={`flex flex-col items-center py-8 justify-between ${inter.className}`}>
      <section className="w-11/12 mx-auto bg-secondary rounded">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-12 lg:flex-row lg:justify-around">
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <Image src={bannerImg} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" width={600} height={300} />
          </div>
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-bold leadi sm:text-6xl">
              Build your own
              <br className="hidden lg:block" />
              PC
              <span className="dark:text-violet-400"> with our Products</span>
            </h1>

            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start mt-4">
              <Button>Explore Products</Button>
              <Button className="bg-accent"> PC Builder</Button>
            </div>
          </div>
        </div>
      </section>
      <FeaturedProducts products={products} />
      <FeaturedCategory />
    </main>
  );
};
Home.getLayout = function getLayout(Home: ReactElement) {
  return <RootLayout>{Home}</RootLayout>;
};
export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/products/featured");
  const data = await res.json();
  // console.log(data);
  return {
    props: {
      products: data?.data,
    },
    revalidate: 10,
  };
};
export default Home;
