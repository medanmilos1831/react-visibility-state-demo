import { Button, notification } from "antd";
import { useEffect } from "react";

import { useVisibility, useVisibilityHandler } from "react-visibility-state";
import { CodeHighlighter } from "./CodeHighlighter";

export const ExampleThree = () => {
  const { state, payload } = useVisibility("example-three-notification", "off");
  const { on, off } = useVisibilityHandler();

  useEffect(() => {
    if (state === "on") {
      notification.open({
        message: "Example Three Notification",
        description: payload?.title || "This is a notification example",
        duration: 4.5,
        onClose: () => off("example-three-notification"),
      });
    }
  }, [state, payload, off]);

  const codeExample = `export const ExampleThree = () => {
  const { state, payload } = useVisibility("example-three-notification", "off");
  const { on, off } = useVisibilityHandler();

  useEffect(() => {
    if (state === "on") {
      notification.open({
        message: "Example Three Notification",
        description: payload?.title || "This is a notification example",
        duration: 4.5,
        onClose: () => off("example-three-notification"),
      });
    }
  }, [state, payload, off]);

  return (
    <div>
      <Button
        type="default"
        onClick={() =>
          on("example-three-notification", {
            title: "Payload Example Three Notification",
          })
        }
      >
        Example Three Notification
      </Button>
    </div>
  );
};`;

  return (
    <div>
      <Button
        type="default"
        onClick={() =>
          on("example-three-notification", {
            title: "Payload Example Three Notification",
          })
        }
      >
        Example Three Notification
      </Button>

      <div style={{ marginTop: "20px" }}>
        <h3>Example Three:</h3>
        <div style={{ height: "400px", overflow: "auto" }}>
          <CodeHighlighter code={codeExample} language="tsx" />
        </div>
      </div>
    </div>
  );
};
