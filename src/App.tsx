import {
  createBrowserVisibility,
  VisibilityProvider,
} from "react-visibility-state";
import "antd/dist/antd.css";
import "./App.css";
import { HomePage } from "./HomePage";

const browserVisibility = createBrowserVisibility();

const App: React.FC = () => {
  return (
    <VisibilityProvider value={browserVisibility}>
      <HomePage />
    </VisibilityProvider>
  );
};

export default App;
