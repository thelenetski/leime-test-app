import { lazy, useEffect } from "react";
import "./App.css";
import MainLayout from "./components/MainLayout/MainLayout.jsx";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getMemes } from "./redux/memes/operation.js";

const ColumnPage = lazy(() => import("./pages/ColumnPage/ColumnPage.jsx"));
const ListPage = lazy(() => import("./pages/ListPage/ListPage.jsx"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMemes());
  }, [dispatch]);

  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<ColumnPage />} />
        <Route path="/list" element={<ListPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
