import "./App.css";
import ImportComponent from "./R300_ImportComponent";
import Es6 from "./R009_Es6";
import LifeCycle from "./R008_LifecycleEx";

function App() {
  return (
    <div>
      <h1>Start React</h1>
      <p>CSS 적용하기</p>
      <ImportComponent></ImportComponent>
      <LifeCycle prop_value="FromApps.js" />
      <Es6 />
    </div>
  );
}

export default App;
