import { Suspense, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainAsync } from "./pages/Main/Main.async";
import "./styles/index.scss";
import useTheme from "./theme/useTheme";
import { classNames } from "./helpers/classNames/classNames";

enum THEME {
  LIGHT = "light",
  DARK = "dark",
}

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>О сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/about"} element={<AboutPageAsync />} />
          <Route path={"/"} element={<MainAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
