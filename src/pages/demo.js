import React, { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";

export default function Usernames() {
  const [users, setUsername] = useState([]);

  useEffect(() => {
    getUsernames();
  }, []);

  async function getUsernames() {
    const { data } = await supabase.from("person").select();
    console.log(data)
    setUsername(data);
  }

  return (
    <ul>
      {users.map((user) => {
        return (
          <li key={user.username} className={""}>
            <div>{user.username}</div>
          </li>
        );
      })}
    </ul>
  );
}