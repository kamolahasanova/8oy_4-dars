import Link from "next/link";
import Image from "next/image";
import { IoIosPricetags } from "react-icons/io";
const request = async (url: string) => {
  const req = await fetch(url);
  const data = await req.json();
  return data;
};

interface Product {
  title: string;
  description: string;
  thumbnail: string;
  id: number;
  price: number;
}
async function ProductList() {
  const data = await request("https://dummyjson.com/products");

  return (
    <div className="grid  gap-7 ">
      {data.products.map((product: Product) => {
        return (
          <div
            className="card card-side bg-gray-200 shadow-xl"
            key={product.id}
          >
            <figure className=" border-r-2 border-orange-500">
              <Image src={product.thumbnail} alt={product.title} width={403} height={403}/>
            </figure>
            <div className="card-body">
              <h1 className="card-title">{product.title}</h1>
              <p>{product.description.substring(0, 100)}</p>
              <p className="flex items-center  ">
                <span className="font-bold mr-2">Price:</span>
                <IoIosPricetags />
                {new Intl.NumberFormat("us-US", {
                  style: "currency",
                  currency: "USD",
                }).format(product.price)}
              </p>
              <div className="card-actions justify-end">
                <Link
                  href={`/product/${product.id}`}
                  className="btn btn-success "
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProductList;
