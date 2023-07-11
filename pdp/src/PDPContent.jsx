import { getProductById, currency } from "home/products";
import { useEffect, useState } from "react";

export default function PDPContent() {
  const id = 1;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) {
      getProductById(id).then((product) => setProduct(product));
    }
    else {
      setProduct(null);
    }
  }, [id]);

  if (!product) return null;

  return <div className="grid grid-cols-2 gap-5">
    <div>
      <img alt={product.name} src={product.image} />
    </div>

    <div>
      <div className="flex">
        <h1 className="font-bold text-3xl flex-grow">{product.name}</h1>
        <div className="font-bold text-3xl flex-end">
          {currency.format(product.price)}
        </div>
      </div>

      <div className="mt-10">{product.description}</div>
      <div className="mt-10">{product.longDescription}</div>
    </div>
  </div>
}