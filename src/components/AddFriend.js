import Button from "./Button";

export default function AddFriend() {
  return (
    <>
      <form className='form-add-friend'>
        <label>Friend name</label>
        <input type='text' />
        <label>Image url</label>
        <input type='text' />
        <Button>Add</Button>
      </form>
    </>
  );
}
