import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Notes from "./Components/Notes";
import Create from "./Components/Create";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import Layout from "./Components/Layout";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#fefefe",
    },
  },
  typography: {
    fontFamily: "Quicksand",
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Notes />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
