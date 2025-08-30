import React from "react";
import UIDomainWrapper from "./components/UIDomainWrapper";
import { useVisibility } from "../services/visibilityService";

import ControllerBox from "./components/ControllerBox";
import IndicatorBox from "./components/IndicatorBox";
import SwitchButton from "./components/SwitchButton";
import Light from "./components/Light";

export const HomePage: React.FC = () => {
  // Modal hooks for different entities
  const userModal = useVisibility("user", { initState: "open" });
  const cityModal = useVisibility("city", { initState: "close" });
  const companyModal = useVisibility("company", { initState: "close" });
  const productModal = useVisibility("product", { initState: "close" });
  const orderModal = useVisibility("order", { initState: "close" });
  const paymentModal = useVisibility("payment", { initState: "close" });
  const loginModal = useVisibility("login", { initState: "close" });
  const confirmModal = useVisibility("confirm", { initState: "open" });
  const settingsModal = useVisibility("settings", { initState: "close" });
  const profileModal = useVisibility("profile", { initState: "open" });
  const notificationModal = useVisibility("notification", {
    initState: "close",
  });
  const helpModal = useVisibility("help", { initState: "close" });
  return (
    <div
      style={{
        height: "100%",
        padding: "0 2rem",
        margin: "0",
        display: "flex",
        flexDirection: "row",
        backgroundColor: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
        background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
        color: "#ffffff",
        alignItems: "center",
        gap: "2rem",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <UIDomainWrapper title="Application Domain">
        <>
          {/* Indicator Box */}
          <div style={{ width: "100%" }}>
            <IndicatorBox>
              {/* Row 1 - 6 indicators */}
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                {[
                  { value: "user", label: "User", modal: userModal },
                  { value: "city", label: "City", modal: cityModal },
                  { value: "company", label: "Company", modal: companyModal },
                  { value: "product", label: "Product", modal: productModal },
                  { value: "order", label: "Order", modal: orderModal },
                  { value: "payment", label: "Payment", modal: paymentModal },
                ].map((item) => (
                  <Light
                    key={item.value}
                    value={item.value}
                    label={item.label}
                  />
                ))}
              </div>

              {/* Row 2 - 6 indicators */}
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                {[
                  { value: "login", label: "Login", modal: loginModal },
                  { value: "confirm", label: "Confirm", modal: confirmModal },
                  {
                    value: "settings",
                    label: "Settings",
                    modal: settingsModal,
                  },
                  { value: "profile", label: "Profile", modal: profileModal },
                  {
                    value: "notification",
                    label: "Notification",
                    modal: notificationModal,
                  },
                  { value: "help", label: "Help", modal: helpModal },
                ].map((item) => (
                  <Light
                    key={item.value}
                    value={item.value}
                    label={item.label}
                  />
                ))}
              </div>
            </IndicatorBox>
          </div>

          {/* Controller Box */}
          <div style={{ width: "100%" }}>
            <ControllerBox>
              {/* Row 1 - 6 switches */}
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                {[
                  { value: "user", label: "User", modal: userModal },
                  { value: "city", label: "City", modal: cityModal },
                  { value: "company", label: "Company", modal: companyModal },
                  { value: "product", label: "Product", modal: productModal },
                  { value: "order", label: "Order", modal: orderModal },
                  { value: "payment", label: "Payment", modal: paymentModal },
                ].map((item) => (
                  <SwitchButton
                    key={item.value}
                    value={item.value}
                    label={item.label}
                    onChange={(checked) => {
                      if (checked) {
                        item.modal.open();
                      } else {
                        item.modal.close();
                      }
                    }}
                  />
                ))}
              </div>

              {/* Row 2 - 6 switches */}
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                {[
                  { value: "login", label: "Login", modal: loginModal },
                  { value: "confirm", label: "Confirm", modal: confirmModal },
                  {
                    value: "settings",
                    label: "Settings",
                    modal: settingsModal,
                  },
                  { value: "profile", label: "Profile", modal: profileModal },
                  {
                    value: "notification",
                    label: "Notification",
                    modal: notificationModal,
                  },
                  { value: "help", label: "Help", modal: helpModal },
                ].map((item) => (
                  <SwitchButton
                    key={item.value}
                    value={item.value}
                    label={item.label}
                    onChange={(checked) => {
                      if (checked) {
                        item.modal.open();
                      } else {
                        item.modal.close();
                      }
                    }}
                  />
                ))}
              </div>
            </ControllerBox>
          </div>
        </>
      </UIDomainWrapper>
    </div>
  );
};
