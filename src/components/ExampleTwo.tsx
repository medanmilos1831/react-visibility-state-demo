import { Button, Drawer } from "antd";

import {
  useVisibilityHandler,
  VisibilityProvider,
} from "react-visibility-state";
import { CodeHighlighter } from "./CodeHighlighter";

export const ExampleTwo = () => {
  const { on, off } = useVisibilityHandler();

  const codeExample = `export const ExampleTwo = () => {
  const { on, off } = useVisibilityHandler();

  return (
    <div>
      <Button type="default" onClick={() => on("example-two-drawer")}>
        Example Two Drawer
      </Button>
      <VisibilityProvider.Item name="example-two-drawer" initState="off">
        {({ state, payload }) => {
          return (
            <>
              <Drawer
                title="Example Two Drawer"
                open={state === "on"}
                onClose={() => off("example-two-drawer")}
                placement="right"
                width={400}
              >
                <p>{payload?.title}</p>
              </Drawer>
            </>
          );
        }}
      </VisibilityProvider.Item>
    </div>
  );
};`;

  return (
    <div>
      <Button
        type="default"
        onClick={() =>
          on("example-two-drawer", { title: "Payload Example Two Drawer" })
        }
      >
        Example Two Drawer
      </Button>
      <VisibilityProvider.Item name="example-two-drawer" initState="off">
        {({ state, payload }) => {
          return (
            <>
              <Drawer
                title="Example Two Drawer"
                open={state === "on"}
                onClose={() => off("example-two-drawer")}
                placement="right"
                width={400}
              >
                <p>{payload?.title}</p>
              </Drawer>
            </>
          );
        }}
      </VisibilityProvider.Item>

      <div style={{ marginTop: "20px" }}>
        <h3>Example Two:</h3>
        <div style={{ height: "400px", overflow: "auto" }}>
          <CodeHighlighter code={codeExample} language="tsx" />
        </div>
      </div>
    </div>
  );
};
