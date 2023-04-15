import React, { useState, useEffect } from "react";
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
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const getData = async () => {
    const add = [];
    const q = query(collection(db, "data"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      add.push([doc.id, doc.data()]);
    });
    return add;
  };

  const addCategory = async (newCat) => {
    const docName = Date.now();
    var stringDoc = "" + docName;
    const userRef = doc(db, "data", stringDoc);
    const userData = {
      name: name,
      number: number,
    };

    setDoc(userRef, userData)
      .then(() => {
        console.log("Document successfully written!");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
    console.log("donee");
  };

  const handleTextChange = (e) => {
    setName(e.target.value);
  };
  const handleTextChangeNumber = (e) => {
    setNumber(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // addCategory();
    getData();

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
