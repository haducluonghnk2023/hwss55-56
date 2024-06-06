import React from "react";

export default function Hw3() {
  let getData = fetch("http://localhost:3000/b3");
  getData.then((data) => data.json()).then((data) => console.log(data));
  return <div>Hw3</div>;    
}
