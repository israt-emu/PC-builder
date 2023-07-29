import RootLayout from "@/components/layout/RootLayout";
import {ReactElement} from "react";
import {Card, CardContent} from "@/components/ui/card";
import {NextPageWithLayout} from "../_app";
import cpu from "../../assets/images/cpu.png";
import motherboard from "../../assets/images/motherboard.png";
import monitor from "../../assets/images/monitor.png";
import powerSupply from "../../assets/images/power.png";
import storage from "../../assets/images/storage.png";
import ram from "../../assets/images/ram.png";
import others from "../../assets/images/others.png";
import Image, {StaticImageData} from "next/image";
import Swal from "sweetalert2";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {useAppSelector} from "@/redux/hooks";
import {IProduct} from "@/types/products";
const PCBuilder: NextPageWithLayout = () => {
  const {products} = useAppSelector((state) => state.pcBuilder);
  const categories: {title: string; image: StaticImageData; href: string}[] = [
    {
      title: "CPU",
      image: cpu,
      href: "/pc-builder/category/cpu",
    },
    {
      title: "Motherboard",
      image: motherboard,
      href: "/pc-builder/category/motherboard",
    },
    {
      title: "RAM",
      image: ram,
      href: "/pc-builder/category/ram",
    },
    {
      title: "Power Supply Unit",
      image: powerSupply,
      href: "/pc-builder/category/powersupply",
    },
    {
      title: "Storage Device",
      image: storage,
      href: "/pc-builder/category/storagedevice",
    },
    {
      title: "Monitor",
      image: monitor,
      href: "/pc-builder/category/monitor",
    },
    {
      title: "Others",
      image: others,
      href: "/pc-builder/category/others",
    },
  ];
  const handleCompleteBuild = () => {
    Swal.fire({
      icon: "success",
      title: "Wow!",
      text: "You build your pc successfully!",
    });
  };
  return (
    <div className="w-11/12 lg:w-10/12 mx-auto py-12 my-12 shadow-lg grid grid-cols-1 md:grid-cols-2 border rounded">
      <div className="border-r border-secondary">
        <p className="text-center mb-8 text-xl font-semibold text-primary">PC Builder - Build Your Own Computer</p>

        <div className="grid grid-cols-1 gap-4 justify-center px-6 ">
          {categories?.map((category: {title: string; image: StaticImageData; href: string}, i: number) => (
            <Card key={i} className="text-textColor hover:text-accent hover:shadow-xl">
              <CardContent className="flex sm:flex-row flex-col sm:items-center sm:justify-between">
                <div className="flex items-center gap-2">
                  <Image src={category?.image} width={80} height={80} alt="card image" className="p-1" />
                  <p className="lg:text-center mt-3 text-sm font-medium">{category?.title}</p>
                </div>
                <Link href={category?.href} className="ml-auto sm:ml-0">
                  <Button variant={"outline"} className="border-accent text-primary hover:text-background">
                    Choose
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between mb-8 px-6 mt-6 md:mt-0">
          <p className="text-lg font-semibold text-accent">Total Products:{products?.length}</p>
          <button className="text-sm gradient py-1 px-2 rounded text-background " disabled={products?.length < 5} onClick={handleCompleteBuild}>
            Complete Build
          </button>
        </div>
        <div className="grid grid-cols-1 gap-4 justify-center px-6 ">
          {products?.map((product: IProduct, i: number) => (
            <Card key={i} className="text-textColor hover:text-accent hover:shadow-xl">
              <CardContent className="flex items-center justify-between">
                <div className="flex flex-col md:flex-row md:items-center gap-2">
                  <Image src={product?.image} width={80} height={80} alt="card image" className="py-2" />
                  <div className="flex flex-col">
                    <p className="capitalize">{product?.category}</p>
                    <p className="lg:text-center mt-3 text-sm font-medium">{product?.productName}</p>
                  </div>
                  <p>{product?.price}৳</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
PCBuilder.getLayout = function getLayout(PCBuilder: ReactElement) {
  return <RootLayout>{PCBuilder}</RootLayout>;
};
export default PCBuilder;
