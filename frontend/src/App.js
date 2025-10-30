import React, { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/hello")
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div className="p-4 text-center">
      <h1>React ⇔ Flask 連携テスト</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
