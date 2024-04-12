import React from "react";
import { useState } from "react";

export default {
  title: "ReactMemo demo",
};

const NewMessagesCounter = (props: { count: number }) => {
  return <div>{props.count}</div>;
};
const UsersSecret = (props: { users: string[] }) => {
  console.log("users rendering");
  return (
    <div>
      {props.users.map((u, i) => (
        <div key={i}>{u}</div>
      ))}
    </div>
  );
};

const Users = React.memo(UsersSecret);

export const Example1 = () => {
  console.log("Example1 rendering");
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState(["Dimych", "Valera", "Artem"]);

  const addUser = () => {
    setUsers([...users, "Katya " + new Date().getTime()]);
  };
  return (
    <>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={addUser}>add user</button>
      <NewMessagesCounter count={count} />
      <Users users={users} />
    </>
  );
};
