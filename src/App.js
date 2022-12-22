// import Home from "./Components/Home/Home.jsx";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { routes } from "./Components/API";
import ID from "./Context";



function App() {

  return (
    <div className="App">
      <ID.Provider>
        <Routes>
          {routes.map((route) => {
            return (
              <Route key={route.id} path={route.path} element={route.element} />
            );
          })}
        </Routes>
      </ID.Provider>
    </div>
  );
}

export default App;
