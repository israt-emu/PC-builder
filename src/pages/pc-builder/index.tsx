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
import Link from "next/link";
import {Button} from "@/components/ui/button";
const PCBuilder: NextPageWithLayout = () => {
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
  return (
    <div className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto py-12 my-12 shadow-lg ">
      <p className="text-center mb-8 text-xl font-semibold text-primary">PC Builder - Build Your Own Computer</p>
      <div className="grid grid-cols-1 gap-4 justify-center px-6 ">
        {categories?.map((category: {title: string; image: StaticImageData; href: string}, i: number) => (
          <Card key={i} className="text-textColor hover:text-accent hover:shadow-xl">
            <Link href={category?.href}>
              <CardContent className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Image src={category?.image} width={80} height={80} alt="card image" className="p-1" />
                  <p className="text-center mt-3 text-sm font-medium">{category?.title}</p>
                </div>
                <Button variant={"outline"} className="border-accent text-primary hover:text-background">
                  Choose
                </Button>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
};
PCBuilder.getLayout = function getLayout(PCBuilder: ReactElement) {
  return <RootLayout>{PCBuilder}</RootLayout>;
};
export default PCBuilder;
