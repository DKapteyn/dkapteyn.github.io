import HomeMain from "./components/HomeMain";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-black h-screen w-screen overflow-x-hidden">
      <Navbar />
      <HomeMain />
    </div>
  );
}

export default App;
