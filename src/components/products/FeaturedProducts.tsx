import {Card, CardContent} from "@/components/ui/card";
import {IProductProps} from "@/types/products";
import Image from "next/image";
import Link from "next/link";
import {FaStar} from "react-icons/fa";
const FeaturedProducts = ({products}: IProductProps) => {
  return (
    <section className="sm:w-11/12 w-10/12 mx-auto py-12 " id="products">
      <h1 className="text-center text-2xl font-semibold mb-2">Featured Products</h1>
      <p className="text-center mb-8">Explore & Get your Desired Products!</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-between">
        {products?.map((product, i) => (
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
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
