import { ModalSection } from "./components/ModalSection";
import { Typography, Divider } from "antd";

const { Title, Paragraph } = Typography;

export const HomePage = () => {
  return (
    <div
      className="homepage-container"
      style={{ padding: "20px 15px", margin: "0 2rem" }}
    >
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <Title level={1}>React Visibility State Demo</Title>
        <Paragraph
          style={{
            fontSize: "16px",
            color: "#666",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          Explore different ways to use the react-visibility-state library with
          various UI components. Each example demonstrates a different approach
          to managing visibility state.
        </Paragraph>
      </div>

      <Divider />

      <ModalSection />
    </div>
  );
};
