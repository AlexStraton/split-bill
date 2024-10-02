import Button from "./Button";

export default function Friends({ friends }) {
  return (
    <div className='sidebar'>
      {friends.map((friend, i) => {
        return (
          <ul key={i}>
            <Friend friend={friend} key={friend.id} />
          </ul>
        );
      })}
    </div>
  );
}

function Friend({ friend }) {
  console.log(friend.image);

  return (
    <div>
      <li>
        <img src={friend.image} alt={`${friend.name}'s avatar`}></img>
        <h1>{friend.name}</h1>

        {friend.balance === 0 && <p>You and {friend.name} are even</p>}
        {friend.balance < 0 && (
          <p className='green'>
            {friend.name} owes you {Math.abs(friend.balance)}
          </p>
        )}
        {friend.balance > 0 && (
          <p className='red'>
            You owe {friend.name} {friend.balance}
          </p>
        )}
        <Button>Select</Button>
      </li>
    </div>
  );
}
