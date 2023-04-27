import React from "react";
import Dashboard from "./components/Dashboard";

const clients = [
  {
    id: 0,
    name: "Elvis Presley",
    nomina: "semanal",
    empresa: "sabadaso",
    date: "16 Mar, 2019",
    time: "21:22",
  },
  {
    id: 1,
    name: "Michael Jackson",
    nomina: "mensual",
    empresa: "pakatelas",
    date: "16 Mar, 2019",
    time: "23:22",
  },
];

function App() {
  return (
    <>
      <Dashboard clients={clients} />
    </>
  );
}

export default App;
