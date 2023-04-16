import React, { useState, useEffect } from "react";
import * as XLSX from "xlsx";
import AddCategory from "./AddCategory";
import { collection, getDocs, query, deleteDoc } from "firebase/firestore";
import db from "../Firebase";

function MyComponent() {
  async function deleteCollection() {
    const collectionRef = collection(db, "data");
    const querySnapshot = await getDocs(collectionRef);

    querySnapshot.forEach((doc) => {
      deleteDoc(doc.ref);
    });
  }

  const getData = async () => {
    const add = [];
    const q = query(collection(db, "data"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      add.push({ name: doc.data().name, number: doc.data().number });
    });
    downloadExcelData(add);
  };

  function downloadExcelData(add) {
    if (add.length > 1) {
      const worksheet = XLSX.utils.json_to_sheet(add);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
      const excelBuffer = XLSX.write(workbook, {
        bookType: "xlsx",
        type: "array",
      });
      const filename = "data.xlsx";
      saveExcelFile(excelBuffer, filename);
    }
  }

  function saveExcelFile(buffer, filename) {
    const data = new Blob([buffer], { type: "application/octet-stream" });
    const url = window.URL.createObjectURL(data);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  // const data = [
  //   { id: 1, name: "John", age: 25 },
  //   { id: 2, name: "Jane", age: 30 },
  //   { id: 3, name: "Bob", age: 35 },
  // ];

  return (
    <>
      <p>aaaa</p>
      <button onClick={() => getData()}>Download Excel</button>
      <button onClick={() => deleteCollection()}>Delete data</button>
    </>
  );
}
export default MyComponent;
