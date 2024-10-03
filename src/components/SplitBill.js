import { useState } from "react";
import Button from "./Button";

export default function SplitBill({ selectedFriend }) {
  const [billValue, setBillValue] = useState("");
  const [yourExpense, setYourExpense] = useState("");
  const [who, setWho] = useState("you");
  const paidByFriend = billValue ? billValue - yourExpense : "";

  return (
    <form className='form-split-bill'>
      <div>Split a bill with {selectedFriend.name}</div>
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
