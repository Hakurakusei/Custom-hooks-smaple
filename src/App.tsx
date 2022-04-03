import "./styles.css";
import { UserCard } from "./components/UserCard";
import { UseAllUsers } from "./hooks/useAllUsers";

export default function App() {
  const { getUsers, UserProfile, loading, error } = UseAllUsers();
  const onClickFetchUser = () => getUsers();

  return (
    <div className="App">
      <button onClick={onClickFetchUser}>データ取得</button>
      <br />
      {error ? (
        <p style={{ color: "red" }}>deta is not found</p>
      ) : loading ? (
        <p>Now Loading...</p>
      ) : (
        <>
          {UserProfile.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </>
      )}
    </div>
  );
}
