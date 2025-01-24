// @ts-expect-error fixed later
import RemoteButton from "products/RemoteButton";

export function App() {
  return (
    <>
      <p>Hi, I'm the host.</p>
      <RemoteButton />
    </>
  );
}

export default App;
