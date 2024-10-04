import { memo } from "react";
import { SearchProps } from "./Hooks";

const Search = ({ onChange }: SearchProps) => {
  return (
    <input
      type="text"
      placeholder="Search users"
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
export default memo(Search);
