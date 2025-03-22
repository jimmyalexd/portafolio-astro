import { useEffect } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function BootstrapClientScript() {
  useEffect(() => {
    // Bootstrap JS ya se ejecuta al importarlo, así que no necesitas nada más
  }, []);

  return null; // no renderiza nada
}
