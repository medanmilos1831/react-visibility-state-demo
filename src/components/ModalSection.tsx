import { Card } from "antd";
import { ExampleOne } from "./ExampleOne";
import { ExampleTwo } from "./ExampleTwo";
import { ExampleThree } from "./ExampleThree";
import { ExampleFour } from "./ExampleFour";

export const ModalSection = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
      <div style={{ display: "flex", gap: "40px", flexWrap: "wrap" }}>
        <Card
          title="Modal Example"
          style={{ flex: "1", minWidth: "400px" }}
          headStyle={{ backgroundColor: "#f0f2f5", fontWeight: "bold" }}
        >
          <ExampleOne />
        </Card>
        <Card
          title="Drawer Example"
          style={{ flex: "1", minWidth: "400px" }}
          headStyle={{ backgroundColor: "#f0f2f5", fontWeight: "bold" }}
        >
          <ExampleTwo />
        </Card>
      </div>
      <div style={{ display: "flex", gap: "40px", flexWrap: "wrap" }}>
        <Card
          title="Notification Example"
          style={{ flex: "1", minWidth: "400px" }}
          headStyle={{ backgroundColor: "#f0f2f5", fontWeight: "bold" }}
        >
          <ExampleThree />
        </Card>
        <Card
          title="Popover Example"
          style={{ flex: "1", minWidth: "400px" }}
          headStyle={{ backgroundColor: "#f0f2f5", fontWeight: "bold" }}
        >
          <ExampleFour />
        </Card>
      </div>
    </div>
  );
};
