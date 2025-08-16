import React, { useEffect, useState } from "react";
import { useNavigate, Outlet, Link } from "react-router-dom";
import { Menu, User, Settings, LogOut, Heart } from "lucide-react";

const DashboardPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(true);

  // Check if user is logged in
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    } else {
      fetch("http://localhost:8000/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => setUser(data))
        .catch(() => {
          localStorage.removeItem("token");
          navigate("/login");
        });
    }
  }, [navigate]);

  if (!user) {
    return (
      <div className="text-center text-lg font-semibold">
        Loading Dashboard...
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-50 pt-6">
      {/* Sidebar / Drawer */}
      <aside
        className={`${
          drawerOpen ? "w-64" : "w-20"
        } bg-blue-700 text-white p-4 flex flex-col transition-all duration-300`}
      >
        {/* Toggle Button */}
        <button
          className="mb-6 flex items-center gap-2 bg-blue-600 p-2 rounded-lg hover:bg-blue-500"
          onClick={() => setDrawerOpen(!drawerOpen)}
        >
          <Menu size={20} />
          {drawerOpen && <span className="text-sm">Menu</span>}
        </button>

        {/* Nav Links */}
        <nav className="flex flex-col gap-4">
          <Link
            to="/dashboard"
            className="flex items-center gap-2 hover:bg-blue-600 p-2 rounded-lg"
          >
            <User size={20} /> {drawerOpen && "Dashboard"}
          </Link>

          <Link
            to="/dashboard/bride"
            className="flex items-center gap-2 hover:bg-blue-600 p-2 rounded-lg"
          >
            <Heart size={20} /> {drawerOpen && "Bride"}
          </Link>

          <Link
            to="/dashboard/Groom"
            className="flex items-center gap-2 hover:bg-blue-600 p-2 rounded-lg"
          >
            <Heart size={20} /> {drawerOpen && "Groom"}
          </Link>

          <Link
            to="/dashboard/settings"
            className="flex items-center gap-2 hover:bg-blue-600 p-2 rounded-lg"
          >
            <Settings size={20} /> {drawerOpen && "Settings"}
          </Link>

          <button
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/login");
            }}
            className="flex items-center gap-2 hover:bg-red-600 p-2 rounded-lg mt-auto"
          >
            <LogOut size={20} /> {drawerOpen && "Logout"}
          </button>
        </nav>
      </aside>

      {/* Right Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        {/* Child Routes */}
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardPage;
