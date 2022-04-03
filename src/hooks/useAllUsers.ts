import { useState } from "react";
import { UserProfile } from "../types/UserProfile";
import axios from "axios";
import { User } from "../types/api/user";

export const UseAllUsers = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [UserProfile, setUserProfile] = useState<Array<UserProfile>>([]);

  const getUsers = () => {
    setLoading(true);
    axios
      .get<Array<User>>("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const data = res.data.map((user) => ({
          id: user.id,
          name: `${user.name}(${user.username})`,
          email: user.email,
          address: `${user.address.city}${user.address.suite}${user.address.street}`
        }));
        setUserProfile(data);
      })
      .catch(() => {
        setError(false);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return {
    getUsers,
    UserProfile,
    loading,
    error
  };
};
