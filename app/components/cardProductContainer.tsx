"use client";
// import React, { useState } from "react";
// import CardProduct from "./cardProduct";
// import useProductList from "@/hooks/useProductList";

// const CardProductContainer: React.FC = () => {
//   const [activeCategory, setActiveCategory] = useState<string>("");
//   const { productList, loading, error, categories, productGroup } =
//     useProductList();
//   const finalProduct = productList.filter((product) => {
//     if (!activeCategory) return true;
//     return product.category === activeCategory;
//   });

//   return (
//     <div className="w-full h-screen grid grid-cols-2 md:grid-cols-4 gap-2 px-4 overflow-y-auto ">
//       {/* <CardProduct />
//       <CardProduct />
//       <CardProduct />
//       <CardProduct />
//       <CardProduct />
//       <CardProduct />
//       <CardProduct /> */}
//       {productList.map((item, index) => (
//         <div key={index}>
//           <CardProduct
//             name={item.name}
//             src={item.imageUrl}
//             alt={item.name}
//             price={item.price}
//             weight={item.weight}
//             unit={item.metadata.unit}
//             metaData={item.metadata}
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CardProductContainer;

// {
//   productList.map((item, index) => (
//     <div key={index}>
//       <CardProduct
//         name={item.name}
//         src={item.imageUrl}
//         alt={item.name}
//         price={item.price}
//         weight={item.weight}
//         unit={item.metadata.unit}
//         metaData={item.metadata}
//       />
//     </div>
//   ));
// }
import React, { useContext, useState } from "react";
import CardProduct from "./cardProduct";
import useProductList from "@/hooks/useProductList";
import ProductContext from "@/context/productContext";
import { useProductContext } from "@/context/productProvider";

const CardProductContainer: React.FC = () => {
  const {
    productList,
    categories,
    productGroup,
    updateActiveCategory,
    filteredProducts,
    isFilterByCategory,
  } = useProductContext();

  const allProductList =
    isFilterByCategory || !productGroup
      ? null
      : categories.map((category) => (
          <>
            {productGroup[category].map((item, index) => (
              <div key={category}>
                <div key={index}>
                  <CardProduct
                    name={item.name}
                    src={item.imageUrl}
                    alt={item.name}
                    price={item.price}
                    weight={item.weight}
                    unit={item.metadata.unit}
                    metaData={item.metadata}
                  />
                </div>
              </div>
            ))}
          </>
        ));

  return (
    <div className="w-full h-screen grid grid-cols-2 md:grid-cols-4 gap-2 px-4 overflow-y-auto ">
      {isFilterByCategory ? (
        <>
          {filteredProducts.map((item, index) => (
            <div key={index}>
              <CardProduct
                name={item.name}
                src={item.imageUrl}
                alt={item.name}
                price={item.price}
                weight={item.weight}
                unit={item.metadata.unit}
                metaData={item.metadata}
              />
            </div>
          ))}
        </>
      ) : (
        //allProductList
        <>{allProductList}</>
      )}
    </div>
  );
};

export default CardProductContainer;
