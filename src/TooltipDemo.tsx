import { useState } from "react";
import "./TooltipDemo.css";

export function TooltipDemo() {
  const [tooltipText, setTooltipText] = useState("");
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = (e: React.MouseEvent, text: string) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setTooltipPosition({
      x: rect.left + rect.width / 2,
      y: rect.top - 10,
    });
    setTooltipText(text);
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div className="tooltip-demo">
      <div className="tooltip-content-wrapper">
        <h1>Tooltip Demo</h1>
        <p>Interactive tooltip system demonstration</p>

        <div className="tooltip-demo-section">
          <h3>Hover over elements to see tooltips:</h3>

          <div className="tooltip-examples">
            <button
              className="demo-button primary"
              onMouseEnter={(e) =>
                handleMouseEnter(
                  e,
                  "This is a primary button tooltip with detailed information"
                )
              }
              onMouseLeave={handleMouseLeave}
            >
              Primary Button
            </button>

            <button
              className="demo-button secondary"
              onMouseEnter={(e) =>
                handleMouseEnter(e, "This is a secondary button tooltip")
              }
              onMouseLeave={handleMouseLeave}
            >
              Secondary Button
            </button>

            <button
              className="demo-button success"
              onMouseEnter={(e) =>
                handleMouseEnter(
                  e,
                  "Success button tooltip - everything is working!"
                )
              }
              onMouseLeave={handleMouseLeave}
            >
              Success Button
            </button>

            <div
              className="demo-card"
              onMouseEnter={(e) =>
                handleMouseEnter(
                  e,
                  "This card shows information about tooltips and their functionality"
                )
              }
              onMouseLeave={handleMouseLeave}
            >
              <h4>Information Card</h4>
              <p>Hover over this card to see a detailed tooltip</p>
              <div className="card-badge">Info</div>
            </div>

            <div
              className="demo-card warning"
              onMouseEnter={(e) =>
                handleMouseEnter(
                  e,
                  "Warning card - be careful with this information"
                )
              }
              onMouseLeave={handleMouseLeave}
            >
              <h4>Warning Card</h4>
              <p>This card has a warning message</p>
              <div className="card-badge warning">Warning</div>
            </div>

            <div
              className="demo-link"
              onMouseEnter={(e) =>
                handleMouseEnter(
                  e,
                  "This is a clickable link with tooltip information"
                )
              }
              onMouseLeave={handleMouseLeave}
            >
              Sample Link
            </div>

            <div
              className="demo-icon"
              onMouseEnter={(e) =>
                handleMouseEnter(
                  e,
                  "Icon tooltip - hover effects work on all elements"
                )
              }
              onMouseLeave={handleMouseLeave}
            >
              ⭐
            </div>
          </div>
        </div>
      </div>

      {/* Tooltip */}
      {showTooltip && (
        <div
          className="tooltip"
          style={{
            left: tooltipPosition.x,
            top: tooltipPosition.y,
            transform: "translateX(-50%)",
          }}
        >
          {tooltipText}
        </div>
      )}
    </div>
  );
}
