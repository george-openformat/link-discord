import { usePrivy } from "@privy-io/react-auth";
import "./styles.css";

export default function App() {
  const { user, login, linkDiscord, authenticated, ready, logout } = usePrivy();
  return (
    <div className="App">
      {ready && authenticated ? (
        <p>Close window, its done</p>
      ) : (
        <button onClick={login}>Link Discord</button>
      )}
    </div>
  );
}