import React, { Suspense, useState } from "react";
import "./App.css";
import Text from "./Text";

const NewImage = React.lazy(() =>
  import(
    /* 
  webpackChunkName: "image-chunk",
  webpackPrefetch: true
 */ "./Image"
  )
);

const App = () => {
  const [x, setX] = useState(false);
  return (
    <>
      <h1>I am a simple React App</h1>
      <Text />
      <button onClick={() => setX(true)}>Show</button>
      {x && (
        <Suspense fallback={<div>Loading...</div>}>
          <NewImage />
        </Suspense>
      )}
    </>
  );
};

export default App;
