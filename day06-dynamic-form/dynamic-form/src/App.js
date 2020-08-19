import React, { useState } from "react";

function App() {
  const [categories, setCategories] = useState([]);
  const [showNewCategory, setShowNewCategory] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState("");
  const [subCategoryName, setSubCategoryName] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);

  const addNewCategory = (e) => {
    e.preventDefault();
    if (!newCategoryName) {
      return;
    }
    setCategories([
      ...categories,
      {
        name: newCategoryName,
        subCategories: [],
      },
    ]);
    setNewCategoryName("");
    setShowNewCategory(false);
  };

  const createNewSubCategory = (e, category) => {
    e.preventDefault();
    if (!subCategoryName) {
      return;
    }
    setCategories(
      categories.map((item) => {
        if (item === category) {
          item.subCategories.push({
            name: subCategoryName,
          });
        }
        setSubCategoryName("");
        return item;
      })
    );
    setSelectedCategory(null);
  };

  return (
    <div className="App">
      <h1>Categories List</h1>
      <div className="container">
        {categories.map((category, index) => (
          <div className="category" key={`cat-${index}`}>
            <h4>{category.name}</h4>
            {category.subCategories.length > 0 ? (
              <ul className="sub_categories">
                {category.subCategories.map((subCategory, i) => (
                  <li key={`subCat-${index}-${i}`}>{subCategory.name}</li>
                ))}
              </ul>
            ) : (
              <div className="sub_categories">No Subcategories !</div>
            )}
            {!selectedCategory ? (
              <div className="new_sub_category">
                <button
                  onClick={() => {
                    setSelectedCategory(category);
                  }}
                >
                  Create New Sub Category
                </button>
              </div>
            ) : selectedCategory === category ? (
              <form
                className="new_sub_category"
                onSubmit={(e) => {
                  createNewSubCategory(e, category);
                }}
              >
                <input
                  type="text"
                  name="name"
                  value={subCategoryName}
                  onChange={(e) => {
                    setSubCategoryName(e.target.value);
                  }}
                />
                <button type="submit">Add Sub Category</button>
                <span className="button"
                  onClick={() => {setSelectedCategory(null)}}
                >close</span>
              </form>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
      <div className="container app__new">
        <button
          onClick={() => {
            setShowNewCategory(true);
          }}
        >
          New Category
        </button>
      </div>
      {showNewCategory && (
        <div className="container new__category">
          <form
            onSubmit={(e) => {
              addNewCategory(e);
            }}
          >
            <span
              onClick={() => {
                setShowNewCategory(false);
              }}
              className="close-btn"
            >
              +
            </span>
            <label htmlFor="name">Category Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={newCategoryName}
              onChange={(e) => {
                setNewCategoryName(e.target.value);
              }}
            />
            <button type="submit">Create !</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default App;
