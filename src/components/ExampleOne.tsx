import { Button, Modal } from "antd";

import {
  useVisibilityHandler,
  VisibilityProvider,
} from "react-visibility-state";
import { CodeHighlighter } from "./CodeHighlighter";

export const ExampleOne = () => {
  const { on, off } = useVisibilityHandler();

  const codeExample = `export const ExampleOne = () => {
  const { on, off } = useVisibilityHandler();

  return (
    <div>
      <Button type="default" onClick={() => on("example-one-modal")}>
        Example One Modal
      </Button>
      <VisibilityProvider.Item name="example-one-modal" initState="off">
        {({ state }) => {
          return (
            <>
              <h2>Example One Modal</h2>
              <Modal open={state === "on"} onCancel={() => off("example-one-modal")}>
                <p>Example One Modal</p>
              </Modal>
            </>
          );
        }}
      </VisibilityProvider.Item>
    </div>
  );
};`;

  return (
    <div>
      <Button type="default" onClick={() => on("example-one-modal")}>
        Example One Modal
      </Button>
      <VisibilityProvider.Item name="example-one-modal" initState="off">
        {({ state }) => {
          return (
            <>
              <Modal
                open={state === "on"}
                onCancel={() => off("example-one-modal")}
              >
                <p>Example One Modal</p>
              </Modal>
            </>
          );
        }}
      </VisibilityProvider.Item>

      <div style={{ marginTop: "20px" }}>
        <h3>Example One:</h3>
        <div style={{ height: "400px", overflow: "auto" }}>
          <CodeHighlighter code={codeExample} language="tsx" />
        </div>
      </div>
    </div>
  );
};
