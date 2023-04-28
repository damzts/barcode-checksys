import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Dashboard from "./pages/Dashboard";
import Customers from "./pages/Customers";
import { Route, Routes } from "react-router-dom";
import Navbars from "./components/Navbars";
import { Box } from "@mui/material";
import Reports from "./pages/Reports";
import Barcodes from "./pages/Barcodes";
//
import sendAsync from "./message-control/renderer";

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

const mdTheme = createTheme();

function App() {
  // const [message, setMessage] = useState("SELECT * FROM repositories");
  // const [response, setResponse] = useState();

  // function send(sql) {
  //   sendAsync(sql).then((result) => setResponse(result));
  // }

  return (
    <>
      <ThemeProvider theme={mdTheme}>
        <Box sx={{ display: "flex" }}>
          <Navbars nametitle={"yea"} />
          <Routes>
            <Route path="/" element={<Dashboard clients={clients} />} />
            <Route
              path="/Customers"
              element={<Customers clients={clients} />}
            />
            <Route path="/Reports" element={<Reports clients={clients} />} />
            <Route path="/Barcodes" element={<Barcodes clients={clients} />} />
          </Routes>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
