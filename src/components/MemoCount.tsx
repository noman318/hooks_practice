import { useMemo, useState } from "react";

const initialItems = new Array(2000001).fill(0).map((_, i) => {
  return { id: i, isSelected: i === 2000000 };
});

const MemoCount = () => {
  const [count, setCount] = useState(0);
  const [items] = useState(initialItems);

  const selectedItem = useMemo(
    () => items.find((item) => item.isSelected),
    [items]
  );
  return (
    <div>
      <h1>Count: {count}</h1>
      <h1>Selected: {selectedItem?.id}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </div>
  );
};

export default MemoCount;
