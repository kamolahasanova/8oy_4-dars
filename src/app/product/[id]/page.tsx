import Image from "next/image";

type ParamsInterFace = {
  params: {
    id: number;
  };
};

interface Product {
  title: string;
  images: [];
  description: string;
  price: number;
  category: string;
  brand: string;
  warrantyInformation: string;
}

const request = async (id: number) => {
  const req = await fetch("https://dummyjson.com/products/" + id);
  const data = await req.json();
  return data;
};

async function SingleProduct(params: ParamsInterFace) {
  const product: Product = await request(params.params.id);
  return (
    <div className="card lg:card-side bg-base-200 shadow-xl">
      <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box h-96">
        {product.images.map((img) => {
          return (
            <div className="carousel-item border  border-gray-600  " key={img}>
              <Image src={img} alt={product.title} width={403} height={403} />
            </div>
          );
        })}
      </div>

      <div className="card-body max-w-[60%]">
        <h1 className="card-title">{product.title}</h1>
        <p>
          <span className="font-bold ">Category:</span>
          {product.category}
        </p>
        <p>
          <span className="font-bold ">Brand:</span>
          {product.brand}
        </p>
        <p>
          <span className="font-bold">warranty:</span>
          {product.warrantyInformation}
        </p>
        <p>
          <span className="  font-bold">Price: </span>
          {new Intl.NumberFormat("us-Us", {
            style: "currency",
            currency: "USD",
          }).format(product.price)}
        </p>
        <p>
          <span className="font-bold ">Description:</span>
          {product.description}
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy</button>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
