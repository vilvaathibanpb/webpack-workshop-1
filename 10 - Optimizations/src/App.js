import React, { Suspense } from "react";
import "./App.css";
import Text from "./Text";

const NewImage = React.lazy(() => import("./Image"));

const App = () => {
  return (
    <>
      <h1>I am a simple React App</h1>
      <Text />
      <Suspense fallback={<div>Loading...</div>}>
        <NewImage />
      </Suspense>
    </>
  );
};

export default App;
