import React from "react";
import { useEffect, useState } from "react";
const empData = [
  { name: "sanjai", age: "19", friends: "1000", gf: "10" },
  { name: "sanjaijb", age: "19", friends: "1000", gf: "10" },
  { name: "sanjai93", age: "19", friends: "1000", gf: "10" },
  { name: "sanjairo", age: "19", friends: "1000", gf: "10" },
];

function Effeect() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setData(empData);
    }, 3000);
  });

  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Friends</th>
        <th>Girl friends </th>
      </tr>
      {data.length === 0 && <td>loading ...</td>}
      {data.map((dat) => (
        <tr>
          <th>{dat.name}</th>
          <th>19</th>
          <th>1000</th>
          <th>10</th>
        </tr>
      ))}
    </table>
  );
}
export default Effeect;
