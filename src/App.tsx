import Alert from "./components/ui/Alert";
import { BellRing } from "lucide-react";
import "./App.css";
function App() {
  return (
    <div className="app">
      <Alert
        type={"alert-default"}
        icon={<BellRing size={18} />}
        title={"Alert Title"}
      >
        <div>
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          autem fugiat vero labore alias<a href="">hello world..!</a> dolores.
          Qui ipsa voluptatibus aperiam eligendi."
        </div>
      </Alert>
      <Alert
        type={"alert-info"}
        icon={<BellRing size={18} />}
        title={"Alert Title"}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus autem fugiat vero labore alias dolores. Qui ipsa voluptatibus aperiam eligendi."
        }
      />
      <Alert
        type={"alert-danger"}
        icon={<BellRing size={18} />}
        title={"Alert Title"}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus autem fugiat vero labore alias dolores. Qui ipsa voluptatibus aperiam eligendi."
        }
      />
      <Alert
        type={"alert-success"}
        icon={<BellRing size={18} />}
        title={"Alert Title"}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus autem fugiat vero labore alias dolores. Qui ipsa voluptatibus aperiam eligendi."
        }
      />
    </div>
  );
}

export default App;
