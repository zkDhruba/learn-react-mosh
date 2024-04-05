import React, { useEffect, useState } from "react";

const ProductList = ({ category }: { category: string }) => {
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    console.log("Fetching Data in", category);
    setProducts(["Clothing", "Houshold"]);
  }, [category]);

  return <div>{products}</div>;
};

export default ProductList;
