import { useCallback, useState } from "react";
import Search from "./Search";
import MemoCount from "./MemoCount";

const usersNew = ["john", "alex", "noman", "shawn", "lita"];

export interface SearchProps {
  onChange: (text: string) => void;
}

export const Hooks = () => {
  const [users, setUsers] = useState(usersNew);
  const [text, setText] = useState("");
  const handleSearch = useCallback((text: string) => {
    const filteredUsers = usersNew?.filter((user) => user.includes(text));
    setUsers(filteredUsers);
  }, []);

  const handleNewUsers = () => {
    usersNew.push(text);
    setUsers(usersNew);
    setText("");
  };
  const handleDelete = (id: number) => {
    console.log("id", id);
    let updatedUsers = usersNew.filter((user, index) => index !== id);
    setUsers(updatedUsers);
  };
  const shuffleData = (arr: string[]) => {
    return [...arr]?.sort(() => Math.random() - 0.5);
  };

  return (
    <div>
      <h1>Use Call back</h1>
      <button onClick={() => setUsers(shuffleData(users))}>Shuffle</button>
      <Search onChange={handleSearch} />
      <input
        type="text"
        placeholder="add new user"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleNewUsers}>Add Users</button>
      <ul>
        {users.map((user, index) => (
          <>
            <li key={user}>{user}</li>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </>
        ))}
      </ul>
      <MemoCount />
    </div>
  );
};
