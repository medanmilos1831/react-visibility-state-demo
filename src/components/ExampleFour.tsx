import { Button, Popover, Space, Tag } from "antd";

import { useVisibility, useVisibilityHandler } from "react-visibility-state";
import { CodeHighlighter } from "./CodeHighlighter";

export const ExampleFour = () => {
  const { state, payload } = useVisibility("example-four-popover", "off");
  const { on, off } = useVisibilityHandler();

  const codeExample = `export const ExampleFour = () => {
  const { state, payload } = useVisibility("example-four-popover", "off");
  const { on, off } = useVisibilityHandler();

  return (
    <div>
      <Popover
        content={
          <div>
            <p>This is a Popover example!</p>
            <p>Click count: {clickCount}</p>
            <p>Payload: {payload?.message || "No message"}</p>
            <Button 
              size="small" 
              onClick={() => off("example-four-popover")}
            >
              Close
            </Button>
          </div>
        }
        title="Example Four Popover"
        trigger="click"
        open={state === "on"}
        onOpenChange={(open) => 
          open 
            ? on("example-four-popover", { 
                message: "Hello from Popover!",
                timestamp: new Date().toLocaleTimeString()
              }) 
            : off("example-four-popover")
        }
        placement="bottomLeft"
      >
        <Button type="default">
          Example Four Popover
        </Button>
      </Popover>
    </div>
  );
};`;

  return (
    <div>
      <Popover
        content={
          <div>
            <p>This is a Popover example!</p>
            <p>Payload: {payload?.message || "No message"}</p>
            <br />
            <Button
              size="small"
              onClick={() => off("example-four-popover")}
              style={{ marginTop: "8px" }}
            >
              Close
            </Button>
          </div>
        }
        title="Example Four Popover"
        trigger="click"
        open={state === "on"}
        onOpenChange={(open) =>
          open
            ? on("example-four-popover", {
                message: "Hello from Popover!",
                timestamp: new Date().toLocaleTimeString(),
              })
            : off("example-four-popover")
        }
        placement="bottomLeft"
      >
        <Button type="default">Example Four Popover</Button>
      </Popover>

      <div style={{ marginTop: "20px" }}>
        <h3>Example Four:</h3>
        <div style={{ height: "400px", overflow: "auto" }}>
          <CodeHighlighter code={codeExample} language="tsx" />
        </div>
      </div>
    </div>
  );
};
