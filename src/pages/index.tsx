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
import Link from "next/link";

const inter = Inter({subsets: ["latin"]});

const Home: NextPageWithLayout<IProductProps> = ({products}) => {
  //
  //

  return (
    <main className={`flex flex-col items-center py-8 justify-between ${inter.className}`}>
      <section className="w-11/12 mx-auto bg-secondary rounded">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:flex-row lg:justify-around">
          <div className="flex items-center justify-center p-6 mt-3 lg:mt-0 h-48 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <Image src={bannerImg} alt="" className="object-contain h-48 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" width={600} height={300} />
          </div>
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-4xl font-bold leadi sm:text-6xl">
              Build your own
              <br className="hidden lg:block" />
              <span className="ml-1">PC</span>
              <span className=""> with our Products</span>
            </h1>

            <div className="flex flex-col items-center sm:flex-row justify-center lg:justify-start mt-4 gap-2">
              <Link href="/#products">
                <button className="text-sm gradient py-1.5 md:py-2 px-2 rounded text-background ">Explore Products</button>
              </Link>
              <Link href="/#category">
                <button className="text-sm border border-accent py-1.5 md:py-2 px-2 rounded text-primary font-semibold">Visit Categories</button>
              </Link>
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
  const res = await fetch(`${process.env.BASE_URL}/api/products/featured`);
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
