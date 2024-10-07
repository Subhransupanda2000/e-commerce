import React, { useEffect, useState } from "react";

export default function Cart() {
  const [count, setCount] = useState(0);

  function change() {
    setCount(++count);
  }
  return (
    <div>
      <span onChange={change}>{count}</span>
    </div>
  );
}
