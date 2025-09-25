import React, { useState, Suspense } from "react";

const BigComponent = React.lazy(() => import("./BigСomponent"));

function App() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h1>Пример React.lazy + Suspense</h1>
      <button onClick={() => setShow(true)}>Показать BigComponent</button>

      {show && (
        <Suspense fallback={<p>Загрузка компонента...</p>}>
          <BigComponent />
        </Suspense>
      )}
    </div>
  );
}

export default App;


