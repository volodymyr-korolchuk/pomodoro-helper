import { useEffect, useState } from "react";
import ThemeSelector from "./components/ThemeSelector/ThemeSelector";
import { useAppContext } from "./appContext";
import TimerWrapper from "./components/TimerWrapper";
import { Theme } from "./appContext";
import { FaStar } from "react-icons/fa";
import Background from "./components/Background";

const getTheme = (theme: Theme) => {
  switch (theme) {
    case Theme.Candy:
      return "bg-primary";
    case Theme.Tomato:
      return "bg-danger";
    case Theme.Nature:
      return "bg-nature";
    case Theme.Stars:
      return "bg-stars";

    default:
      return "bg-primary";
  }
};

function handleKeyPress(event: KeyboardEvent) {
  if (event.keyCode === 116) {
    const shouldRefresh = confirm(
      "Do you want to refresh the page? The timer will be reset"
    );

    if (shouldRefresh) {
      location.reload();
    } else {
      event.preventDefault();
    }
  }
}

function App() {
  const { theme } = useAppContext();

  useEffect(() => {
    // window.addEventListener("keydown", handleKeyPress);
  }, []);

  return (
    <>
      <nav className="absolute bg-transparent w-full flex items-center justify-end px-6 py-4 z-20">
        <ThemeSelector />
      </nav>
      <main
        className={`${getTheme(
          theme
        )} w-[100vw] h-[100vh] flex items-center justify-center overflow-hidden`}
      >
        <TimerWrapper />
      </main>
    </>
  );
}

export default App;
