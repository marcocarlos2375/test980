import { useState } from "react";

function App() {
  const [compteur] = useState(1);
  return <h1>{compteur}</h1>;
}
export default App;
