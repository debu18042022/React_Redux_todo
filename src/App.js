import logo from "./logo.svg";
import "./App.css";
import Todo from "./Todo";
import "@shopify/polaris/build/esm/styles.css";
import { Provider } from "react-redux";
import { store } from "./Store";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Todo />
      </div>
    </Provider>
  );
}

export default App;
