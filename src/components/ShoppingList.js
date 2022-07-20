import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchData, setSearchData] = useState("")

  function handleSearchChange(event){
    setSearchData("");
    setSearchData(event.target.value)
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  /*const searchDataToDisplay = (items, searchData)=>{
    if(!searchData){
      return items;
    }
  
  return items.filter((item) => {
    item.toLowerCase().includes(searchData)
  })
  }*/
  const itemsToDisplay = items.filter((item) => {
    if(searchData !== "") return item['name'].toLowerCase().includes(searchData);
     if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <ItemForm />
      <Filter onSearchChange={handleSearchChange} onCategoryChange={handleCategoryChange}  />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
