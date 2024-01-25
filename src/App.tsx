import { useEffect, useState } from "react";
import ThemeSelector from "./components/ThemeSelector";
import { useAppContext } from "./appContext";
import Timer from "./components/Timer";
import { Theme } from "./appContext";

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
      <nav className="absolute bg-transparent w-full flex items-center justify-end px-6 py-4">
        <ThemeSelector />
      </nav>
      <main
        className={`${getTheme(
          theme
        )} transition duration-250 h-[100vh] flex items-center justify-center overflow-hidden`}
      >
        <Timer />
      </main>
    </>
  );
}

export default App;
