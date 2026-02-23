import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import { ThemeProvider } from "styled-components";
import { dark, light } from "./components/themes/themes";
import ThemeButton from "./components/themeButton/ThemeButton";
import { GlobalStyles } from "./components/themes/globalStyles";

function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    <>
      <ThemeProvider theme={isDark ? dark : light}>
        <GlobalStyles />
        <Header>
          {" "}
          <ThemeButton
            isDark={isDark}
            toggle={() => setIsDark((prev) => !prev)}
          />
        </Header>
      </ThemeProvider>
    </>
  );
}

export default App;
