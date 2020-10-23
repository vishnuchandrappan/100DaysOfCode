import { SuspenseWithPerf } from "reactfire";
import "../node_modules/milligram/dist/milligram.min.css";
import Header from "./components/layout/Header";
import Loading from "./components/layout/Loading";
import Routes from "./components/routes/Routes";

function App() {
  return (
    <div className="App">
      <SuspenseWithPerf fallback={<Loading />}>
        <Header />
        <Routes />
      </SuspenseWithPerf>
    </div>
  );
}

export default App;
