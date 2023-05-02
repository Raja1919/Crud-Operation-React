import "./App.css";
import Header from "./Layout/Header/header";
import Sidebar from "./Layout/Sidebar/sidebar";
import Content from "./Layout/Content/content";
import Footer from "./Layout/Footer/footer";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div className="sidecont">
        <Sidebar />
        <Content />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
