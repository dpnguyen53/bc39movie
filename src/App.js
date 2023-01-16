import { BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import renderRoutes from "./routes";
import { Suspense } from "react";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Routes>
          {renderRoutes()}

          {/* HomeTemplate */}
          {/* <Route path="" element={<HomeTemplate />}>
          <Route path="" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="list-movie" element={<ListMoviePage />} />
        </Route> */}

          {/* AdminTemplate */}
          {/* <Route path="admin" element={<AddminTemplate />}>
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="add-user" element={<AdduserPage />} />
          <Route path="add-movie" element={<AddMoviePage />} />
        </Route> */}
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
