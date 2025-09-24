import React, { useState, Suspense } from "react";
import { createRoot } from "react-dom/client";

const BigComponent = React.lazy(() => import("./Bigcomponent"));

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

const root = createRoot(document.getElementById("root"));
root.render(<App />);
