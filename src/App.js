import Info from "./components/Info/Info";
import Keyboard from "./components/Keyboard/Keyboard";

function App() {
  return (
    <div className="container">
      <Info />
      <main className="phone">
        <div className="keyboard-container">
          <Keyboard />
        </div>
      </main>
    </div>
  );
}

export default App;
