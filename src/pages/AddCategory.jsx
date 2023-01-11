import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

function AddCategory() {
  const [categories, setCategories] = useState([]);
  const [message, SetMessage] = useState("");
  const [newCategory, SetNewCategory] = useState("");
  const [number, setNumber] = useState("");

  // useEffect(() => {
  //   const getCategories = async (newCat) => {
  //     const q = query(collection(db, "categories"));
  //     const querySnapshot = await getDocs(q);
  //     querySnapshot.forEach((doc) => {
  //       categories.push(doc.id);
  //       console.log(doc.id, " => ", doc.data());
  //     });
  //   };
  //   getCategories();
  // }, []);

  // const addCategory = async (newCat) => {
  //   const citiesRef = collection(db, "categories");
  //   await setDoc(doc(citiesRef, newCategory), {});
  //   console.log("donee");
  // };

  const handleTextChange = (e) => {
    SetNewCategory(e.target.value);
  };
  const handleTextChangeNumber = (e) => {
    setNumber(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newCategory.length === 0) {
      SetMessage("Please enter a valid Category");
    } else {
      if (categories.includes(newCategory)) {
        SetMessage("Category already present");
      } else {
        SetMessage("");
        setCategories([newCategory, ...categories]);
        // addCategory();
      }
      console.log("categories", [categories]);
      SetNewCategory("");
    }
  };

  return (
    <>
      <div className="container">
        <div className="card">
          {/* <Navbar /> */}
          <form onSubmit={handleSubmit}>
            <h2>Please Enter your Contact Information</h2>
            <div className="input-group">
              <input
                onChange={handleTextChange}
                type="text"
                placeholder="Name"
                value={newCategory}
              />
            </div>
            <div className="input-group">
              <input
                onChange={handleTextChangeNumber}
                type="text"
                placeholder="Mobile No."
                value={number}
              />
            </div>
            <div className="text-center">
              <button className="btn btn-primary" type="submit">
                submit
              </button>
            </div>
            {message && <div className="message">{message}</div>}
          </form>
        </div>
      </div>
    </>
  );
}

export default AddCategory;
