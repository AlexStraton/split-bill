import Friends from "./components/Friends";
import AddFriend from "./components/AddFriend";
import Button from "./components/Button";
import SplitBill from "./components/SplitBill";
import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function toggleVisibility() {
    setIsVisible((prev) => !prev);
  }

  function handleSelection(friend) {
    setSelectedFriend((current) => (current?.id === friend.id ? null : friend));
    setIsVisible(false);
  }

  function handleSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
  }

  return (
    <div className='app'>
      <div className='sidebar'>
        <Friends
          friends={friends}
          onSelection={handleSelection}
          selectedFriend={selectedFriend}
        />

        {isVisible && (
          <AddFriend setFriends={setFriends} setIsVisible={setIsVisible} />
        )}
        <Button onClick={toggleVisibility}>
          {isVisible ? "Close" : "Add Friend"}
        </Button>
      </div>
      {selectedFriend && (
        <SplitBill
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
          setSelectedFriend={setSelectedFriend}
        />
      )}
    </div>
  );
}
