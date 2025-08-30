import { createVisibility } from "react-visibility-state";
import "./ModalDemo.css";

const { useVisibility, VisibilityHandler, getItem, useWatch } =
  createVisibility({
    keys: ["modalDemo"] as const,
  });

// Component that opens the modal
const ModalHeader = () => {
  return (
    <div className="modal-header-section">
      <h1>Modal Demo</h1>
      <p>Interactive modal system with react-visibility-state</p>

      <button
        className="modal-button"
        onClick={() => {
          getItem("modalDemo").open({ message: "Modal opened from header!" });
        }}
      >
        Open Modal
      </button>
    </div>
  );
};

// Component that watches modal state and shows status
const ModalStatus = () => {
  const { state, payload } = useWatch("modalDemo", (state) => {
    return {
      statusColor: state === "open" ? "#28a745" : "#6c757d",
      statusText: state === "open" ? "Modal is Open" : "Modal is Closed",
    };
  });

  return (
    <div className="visibility-status">
      <h3>Modal Visibility State:</h3>
      <div className="status-indicators">
        <div className="status-item">
          <span
            className="status-dot"
            style={{ backgroundColor: payload?.statusColor }}
          ></span>
          Status: {payload?.statusText}
        </div>
        <div className="status-item">
          <span className="status-dot"></span>
          Current State: {state}
        </div>
        {payload?.message && (
          <div className="status-item">
            <span className="status-dot"></span>
            Message: {payload.message}
          </div>
        )}
      </div>
    </div>
  );
};

// Component that controls modal from footer
const ModalControls = () => {
  const { open, close, reset } = useWatch("modalDemo");

  return (
    <div className="modal-controls">
      <h3>Modal Controls:</h3>
      <div className="control-buttons">
        <button
          className="control-btn open"
          onClick={() => open({ message: "Opened from controls!" })}
        >
          Open from Controls
        </button>
        <button className="control-btn close" onClick={() => close()}>
          Close from Controls
        </button>
        <button className="control-btn reset" onClick={() => reset()}>
          Reset Modal
        </button>
      </div>
    </div>
  );
};

export function ModalDemo() {
  const modalDemo = useVisibility("modalDemo", { initState: "close" });

  const handleClose = () => {
    modalDemo.close();
  };

  return (
    <div className="modal-demo">
      <div className="modal-content-wrapper">
        <ModalHeader />
        <ModalStatus />
        <ModalControls />

        <div className="info-section">
          <h3>Modal Features:</h3>
          <ul>
            <li>Right-half positioning</li>
            <li>Click outside to close</li>
            <li>Responsive design</li>
            <li>Visibility state tracking</li>
            <li>Transition animations</li>
            <li>Multiple control points</li>
          </ul>
        </div>
      </div>

      {/* Modal with VisibilityHandler */}
      <VisibilityHandler name="modalDemo">
        {({ state, payload }) => {
          return (
            <div
              className={`modal-overlay ${
                state === "open" ? "visible" : "hidden"
              }`}
              onClick={handleClose}
            >
              <div
                className={`modal-content ${
                  state === "open" ? "visible" : "hidden"
                }`}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="modal-header">
                  <h2>Visibility State Modal</h2>
                  <button className="close-button" onClick={handleClose}>
                    ×
                  </button>
                </div>

                <div className="modal-body">
                  <p>
                    This modal uses react-visibility-state for state management!
                  </p>
                  <p>
                    You can click outside or use the close button to close it.
                  </p>

                  <div className="modal-features">
                    <h3>Modal Features:</h3>
                    <ul>
                      <li>Right-half positioning</li>
                      <li>Click outside to close</li>
                      <li>Responsive design</li>
                      <li>Clean header and body</li>
                      <li>Visibility state tracking</li>
                    </ul>
                  </div>

                  <div className="visibility-details">
                    <h4>Visibility Details:</h4>
                    <p>
                      <strong>Current State:</strong> <code>{state}</code>
                    </p>
                    {payload?.message && (
                      <p>
                        <strong>Message:</strong> <code>{payload.message}</code>
                      </p>
                    )}
                    <p>
                      <strong>Modal is:</strong>{" "}
                      {state === "open" ? "Open" : "Closed"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </VisibilityHandler>
    </div>
  );
}
