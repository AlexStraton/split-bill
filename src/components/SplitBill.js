import Button from "./Button";

export default function SplitBill({ selectedFriend }) {
  return (
    <form className='form-split-bill'>
      <div>Split a bill with {selectedFriend.name}</div>
      <label>Bill Value : </label>
      <input type='text' />
      <label>Your expense: </label>
      <input type='text' />
      <label>{selectedFriend.name}'s' expense: </label>
      <input type='text' disabled />
      <label>Who is paying the bill? </label>
      <select name='who' id='select-payer'>
        <option value='you'>You</option>
        <option value='friend'>{selectedFriend.name}</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
}
