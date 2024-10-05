import { useState } from "react";
import Button from "./Button";

export default function SplitBill({
  selectedFriend,
  onSplitBill,
  setSelectedFriend,
}) {
  const [billValue, setBillValue] = useState("");
  const [yourExpense, setYourExpense] = useState("");
  const [who, setWho] = useState("you");
  const paidByFriend = billValue ? billValue - yourExpense : "";

  function handleSubmit(e) {
    e.preventDefault();
    if (!billValue || !yourExpense) return;
    onSplitBill(who === "you" ? paidByFriend : -yourExpense);
    setSelectedFriend(null);
  }

  return (
    <form className='form-split-bill' onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>
      <label>Bill Value : </label>
      <input
        value={billValue}
        onChange={(e) => setBillValue(Number(e.target.value))}
        type='text'
      />
      <label>Your expense: </label>
      <input
        value={yourExpense}
        onChange={(e) =>
          setYourExpense(
            Number(e.target.value) > billValue
              ? yourExpense
              : Number(e.target.value)
          )
        }
        type='text'
      />
      <label>{selectedFriend.name}'s' expense: </label>
      <input type='text' disabled value={paidByFriend} />
      <label>Who is paying the bill? </label>
      <select
        name='who'
        id='select-payer'
        onChange={(e) => setWho(e.target.value)}>
        <option value='you'>You</option>
        <option value='friend'>{selectedFriend.name}</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
}
