import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import { ThemeProvider } from "styled-components";
import { dark, light } from "./components/themes/themes";
import { GlobalStyles } from "./components/themes/globalStyles";

function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    <>
      <ThemeProvider theme={isDark ? dark : light}>
        <GlobalStyles />
        <Header isDark={isDark} toggle={() => setIsDark((prev) => !prev)} />
      </ThemeProvider>
    </>
  );
}

export default App;
