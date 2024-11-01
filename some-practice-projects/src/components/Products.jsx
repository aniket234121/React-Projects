import React, { useEffect, useState,useContext } from "react";
import { ThemeContext } from "./ThemeContextProvider";

function Products() {
  const{theme}=useContext(ThemeContext)
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
    <div className={`relative w-4/5 h-fit text-center border border-sky-600 ${theme==='dark'?'bg-slate-600':'bg-slate-300'}`}>
     
      <ul className="gap-1 justify-evenly grid grid-cols-4 grid-flow-row">
        {content.map((item, index) => {
          return (
            <div key={index} className="bg-slate-400 p-2 flex flex-col justify-center items-center ">
              <img
                src={item.images}
                alt={item.title}
                height={100}
                width={100}
                className="mx-auto"
              />
              <li key={index} className="text-sm font-bold my-1">{item.title}</li>
              <p className="text-slate-800 text-justify w-fit px-5 text-xs">{item.description}</p>
            </div>
          );
        })}
      </ul>
      <button
        onClick={handleClickLoadMore}
        className="bg-slate-900 text-white p-2 hover:bg-slate-700 block mx-auto  my-3"
      >
        LoadMore
      </button>
    </div>
  );
}

export default Products;
