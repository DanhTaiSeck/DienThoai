import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div class="header">
        <div class="container">
          <div>
            <i class="fas fa-user"></i>
            <span>Tài khoản</span>
            <i class="fas fa-caret-down"></i>
          </div>
          <div>
            <i class="fas fa-phone-alt"></i>
            <span>
              Hotline: <span class="font-bold">1900 6063</span>
            </span>
          </div>
          <div>
            <i class="fab fa-facebook-f"></i>
            <span>Facebook</span>
          </div>
          <div>
            <i class="fab fa-youtube"></i>
            <span>H2 Channel</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
