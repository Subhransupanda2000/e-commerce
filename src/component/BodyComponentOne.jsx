import React, { useState, useEffect } from "react";
import Card from "./Card";

export default function BodyComponentOne() {
  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProduct(data);
    };

    fetchProducts();
  }, []);

  const fetchData = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <div id="img1">
        <input
          type="text"
          id="input"
          placeholder="   Search here"
          onChange={fetchData}
        />
      </div>

      <div id="div2">
        {product
          .filter((val) =>
            val.title.toLowerCase().includes(search.toLowerCase())
          )
          .map((x) => (
            <Card key={x.id} src={x.image} title={x.title} price={x.price} />
          ))}
      </div>
    </>
  );
}
