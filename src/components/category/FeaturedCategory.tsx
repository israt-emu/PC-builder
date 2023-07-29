import {Card, CardContent} from "@/components/ui/card";
import cpu from "../../assets/images/cpu.png";
import motherboard from "../../assets/images/motherboard.png";
import monitor from "../../assets/images/monitor.png";
import powerSupply from "../../assets/images/power.png";
import storage from "../../assets/images/storage.png";
import ram from "../../assets/images/ram.png";
import others from "../../assets/images/others.png";
import Image, {StaticImageData} from "next/image";
import Link from "next/link";
const categories: {title: string; image: StaticImageData; href: string}[] = [
  {
    title: "CPU",
    image: cpu,
    href: "/categories/cpu",
  },
  {
    title: "Motherboard",
    image: motherboard,
    href: "/categories/motherboard",
  },
  {
    title: "RAM",
    image: ram,
    href: "/categories/ram",
  },
  {
    title: "Power Supply Unit",
    image: powerSupply,
    href: "/categories/powersupply",
  },
  {
    title: "Storage Device",
    image: storage,
    href: "/categories/storagedevice",
  },
  {
    title: "Monitor",
    image: monitor,
    href: "/categories/monitor",
  },
  {
    title: "Others",
    image: others,
    href: "/categories/others",
  },
];
const FeaturedCategory = () => {
  return (
    <div className="w-11/12 mx-auto py-12 ">
      <h1 className="text-center text-2xl font-semibold mb-2">Featured Categories</h1>
      <p className="text-center mb-8">Get your products from our featured category!</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 justify-between">
        {categories?.map((category: {title: string; image: StaticImageData; href: string}, i: number) => (
          <Card key={i} className="text-textColor hover:text-accent hover:shadow-xl">
            <Link href={category?.href}>
              <CardContent className="text-center">
                <Image src={category?.image} width={100} height={100} alt="card image" className="mx-auto pt-3" />
                <p className="text-center mt-3 text-sm font-medium">{category?.title}</p>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCategory;
