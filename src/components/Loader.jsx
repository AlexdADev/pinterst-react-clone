import React from "react";

const Loader = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} style={{ height: "60px", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <span style={{ fontSize: "14px", color: "#888" }}>Cargando más...</span>
    </div>
  );
});

export default Loader;
