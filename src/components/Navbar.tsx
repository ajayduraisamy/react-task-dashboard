import React from "react";

type NavbarProps = {
  title?: string;
  subtitle?: string;
};

const Navbar: React.FC<NavbarProps> = ({
  title = "Task Dashboard",
  subtitle = "Organize your work. Stay productive.",
}) => {
  return (
    <nav
      className="
        navbar rounded-4 px-4 py-3 mb-4 shadow-lg
        text-white
      "
      style={{
        background:
          "linear-gradient(135deg, rgba(37,99,235,0.95), rgba(59,130,246,0.85))",
        backdropFilter: "blur(6px)",
      }}
    >
      <div className="d-flex align-items-center justify-content-between w-100">
        
        {/* Brand */}
        <div className="d-flex align-items-center gap-3">
          <div
            className="rounded-circle d-flex align-items-center justify-content-center shadow"
            style={{
              width: 46,
              height: 46,
              background:
                "linear-gradient(135deg, #ffffff, #dbeafe)",
              color: "#2563eb",
              fontSize: "1.35rem",
              fontWeight: "bold",
            }}
          >
            ✓
          </div>

          <div>
            <div className="fw-bold fs-4 lh-sm">
              {title}
            </div>
            <small className="opacity-75">
              {subtitle}
            </small>
          </div>
        </div>

        {/* Right badge */}
        <div
          className="
            px-3 py-1 rounded-pill small shadow-sm
            bg-white text-primary fw-semibold
          "
          style={{
            userSelect: "none",
          }}
        >
          React App
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
