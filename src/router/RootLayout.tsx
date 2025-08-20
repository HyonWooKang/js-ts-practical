import { NavLink, Outlet } from "react-router-dom";

export default function RootLayout() {
  const linkStyle = ({ isActive }: { isActive: boolean }) =>
    isActive ? { fontWeight: "bold", textDecoration: "underline" } : undefined;

  return (
    <div style={{ padding: 16 }}>
      <nav style={{ display: "flex", gap: 12, marginBottom: 16 }}>
        <NavLink to="/" style={linkStyle}>
          Home
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
