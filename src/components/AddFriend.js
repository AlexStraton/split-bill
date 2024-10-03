import { useState } from "react";
import Button from "./Button";

export default function AddFriend({ setFriends, setIsVisible }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !image) {
      setError("Please fill in both fields");
      return;
    }
    const newFriend = {
      name,
      image,
      balance: 0,
      id: Math.round(Math.random() * 10000),
    };
    setName("");
    setImage("");
    setError(null);
    setFriends((friends) => [...friends, newFriend]);
    setIsVisible(false);
  }

  return (
    <>
      <form onSubmit={handleSubmit} className='form-add-friend'>
        <label>Friend name</label>
        <input
          value={name}
          type='text'
          onChange={(e) => setName(e.target.value)}
        />
        <label>Image url</label>
        <input
          value={image}
          type='text'
          onChange={(e) => setImage(e.target.value)}
        />
        {error && <p>{error}</p>}
        <Button>Add</Button>
      </form>
    </>
  );
}
