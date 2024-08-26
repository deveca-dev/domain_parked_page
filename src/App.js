import logo from './logo.svg';
import './App.css';
import { LandingPage } from './LandingPage';

function App() {
  return (
    <div
      className="App"
      style={{
        position: "relative",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "110%",  // Vergrößere die Breite, um die Vignette zu minimieren
          height: "110%", // Vergrößere die Höhe, um die Vignette zu minimieren
          backgroundImage: `url("https://images.unsplash.com/photo-1715464881665-e539f7f41992?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
          // backgroundSize: "",
          backgroundPosition: "center",
          backdropFilter: 'blur(1px)',
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          zIndex: -1,
        }}
      ></div>

      <div
        style={{
          position: "relative",
          zIndex: 1,
          color: "white",
          textAlign: "center",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Optional: Dunkelt den Textbereich leicht ab
          padding: "50px",
          borderRadius: "15px",
        }}
      >
        <LandingPage />
      </div>
    </div>
  );
}

export default App;