import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import Axios from "axios";
import { SneakersCard } from "./components/SneakerCard";

const App = () => {
  const [sneakers, setSneakers] = useState([]);

  useEffect(() => {
    const fetchSneakers = async () => {
      const response = await Axios.get("/api/sneakers");
      setSneakers(response.data);
    };
    fetchSneakers();
  }, []);

  return (
    <div>
      <h1>Hello</h1>
      {sneakers.length === 0 ? (
        <h1>Empty</h1>
      ) : (
        sneakers.map((s) => {
          return (
            <SneakersCard
              key={s._id}
              name={s.name}
              cost={s.cost}
              color={s.color}
            />
          );
        })
      )}
    </div>
  );
};

const root = createRoot(document.querySelector("#app"));
root.render(<App />);
