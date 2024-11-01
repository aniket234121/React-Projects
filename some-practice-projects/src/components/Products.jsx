import React, { useEffect, useState } from "react";

function Products() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(10);
  useEffect(() => {
    // Replace 'https://api.example.com/data' with your API endpoint
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
        
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []); // Empty dependency array means this useEffect runs once on mount

  if (loading) {
    return <div>Loading...</div>;
  }
  function handleClickLoadMore() {
    setCount(count + 10);
  }

  let content = data.products.filter((item, index) => index < count);

  return (
    <div className="relative w-screen h-fit text-center my-2">
      <h1>Load More </h1>
      <ul className="gap-2 justify-evenly grid grid-cols-4 grid-flow-row">
        {content.map((item, index) => {
          return (
            <div key={index} className="bg-slate-400 p-3 flex flex-col justify-center items-center ">
              <img
                src={item.images}
                alt={item.title}
                height={200}
                width={200}
                className="mx-auto"
              />
              <li key={index} className="text-xl font-bold my-3">{item.title}</li>
              <p className="text-slate-800 text-justify w-fit px-5 text-base">{item.description}</p>
            </div>
          );
        })}
      </ul>
      <button
        onClick={handleClickLoadMore}
        className="bg-slate-900 text-white p-2 hover:bg-slate-700 block mx-auto my-5"
      >
        LoadMore
      </button>
    </div>
  );
}

export default Products;
