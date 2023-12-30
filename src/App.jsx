import FooterComponent from "./components/ui/Footer.component";
import NavabarComponent from "./components/ui/Navabar.component";
 
function App() {
  return (
    <div>
      {/* Navbar */}
      <NavabarComponent />
      {/* Wrapper */}
      <div className="wrapper">
        <h2>wrapper</h2>
      </div>
      {/* Footer */}
      <FooterComponent />
    </div>
  );
}

export default App;