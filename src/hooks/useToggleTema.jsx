import { useEffect, useState } from "react";

function useToggleTema() {
  const [tema, setTema] = useState(
    () => localStorage.getItem("tema") || "light"
  );

  useEffect(() => {
    localStorage.setItem("tema", tema);

    document.body.classList.remove(
      "bg-light",
      "bg-dark",
      "text-light",
      "text-dark"
    );

    if (tema === "light") {
      document.body.classList.add("bg-light", "text-dark");
    } else {
      document.body.classList.add("bg-dark", "text-light");
    }
  }, [tema]);

  function cambiaTema() {
    setTema((oldTema) => (oldTema === "light" ? "dark" : "light"));
  }

  return { cambiaTema, tema };
}

export default useToggleTema;
