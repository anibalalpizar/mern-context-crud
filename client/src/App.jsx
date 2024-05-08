import { Route, Routes } from "react-router-dom";
import { HomePage, NotFoundPage, PostFormPage } from "./pages";

function App() {
  return (
    <div className="bg-neutral-900 min-h-screen flex items-center">
      <div className="px-10 container m-auto">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/new" element={<PostFormPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
