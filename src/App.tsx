import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import { SContainer } from "./components/shared";
import "./App.css";

const theme = {
  colors: {
    header: "blue",
    footer: "red",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SContainer>
        <Header />
        <Navbar />
        <Products />
      </SContainer>
    </ThemeProvider>
  );
}

export default App;
