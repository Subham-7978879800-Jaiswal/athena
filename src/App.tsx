import "./App.css";
import ProviderSearch from "./components/ProviderSearch/ProviderSearch";
import { purple } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { StoreProvider } from "./context/store";

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StoreProvider>
        <div className="App">
          <ProviderSearch></ProviderSearch>
        </div>
      </StoreProvider>
    </ThemeProvider>
  );
}

export default App;
