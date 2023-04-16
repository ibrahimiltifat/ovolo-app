import React, { useState } from "react";
import Navbar from "../components/Navbar";
import {
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  setDoc,
} from "firebase/firestore";
import db from "../Firebase";

function AddCategory() {
  const [message, SetMessage] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const addCategory = async (newCat) => {
    const docName = Date.now();
    var stringDoc = "" + docName;
    const userRef = doc(db, "data", stringDoc);
    const userData = {
      name: name,
      number: number,
    };

    setDoc(userRef, userData)
      .then(() => {})
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
  };

  const handleTextChange = (e) => {
    setName(e.target.value);
  };
  const handleTextChangeNumber = (e) => {
    setNumber(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addCategory();
    setName("");
    setNumber("");
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
                value={name}
              />
            </div>
            <div className="input-group">
              <input
                onChange={handleTextChangeNumber}
                type="number"
                placeholder="Mobile No."
                value={number}
                inputMode="numeric"
                pattern="[0-9]*"
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
