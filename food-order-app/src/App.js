import React from "react";

import Header from "./components/layout/Header";
import Meals from "./components/meals/Meals";

function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
