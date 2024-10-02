import Button from "./Button";

export default function SplitBill() {
  return (
    <form className='form-split-bill'>
      <div>Split a bill with X</div>
      <label>Bill Value : </label>
      <input type='text' />
      <label>Your expense: </label>
      <input type='text' />
      <label>Friend's expense: </label>
      <input type='text' disabled />
      <label>Who is paying the bill? </label>
      <select name='who' id='select-payer'>
        <option value='you'>You</option>
        <option value='friend'>X</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
}
