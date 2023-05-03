import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import Axios from "axios";

function App() {
  const [sneakers, setSneakers] = useState([]);

  useEffect(() => {
    const go = async () => {
      const response = await Axios.get("/api/sneakers");
      setSneakers(response.data);
    };
    go();
  }, []);

  return <h1>{sneakers}</h1>;
}

const root = createRoot(document.querySelector("#app"));
root.render(<App />);
