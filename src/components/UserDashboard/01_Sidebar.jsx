import { useState } from "react";
import overviewIcon from "../../assets/icons/user-dashboard-myaddress-icon.svg";
import myOrdersIcon from "../../assets/icons/user-dashboard-myorder-icon.svg";
import myAddressIcon from "../../assets/icons/user-dashboard-myaddress-icon.svg";
import artistStudioIcon from "../../assets/icons/user-dashboard-artisrt-studio-icon.svg";

const navItems = [
  { id: "overview", label: "Overview", icon: overviewIcon },
  {
    id: "my-orders",
    label: "My Orders",
    icon: myOrdersIcon,
  },
  {
    id: "my-address",
    label: "My Address",
    icon: myAddressIcon,
  },
  {
    id: "artist-studio",
    label: "Artist Studio",
    labelTh: null,
    icon: artistStudioIcon,
    accent: true,
  },
];

export default function Sidebar({ activePage = "overview", onNavigate }) {
  const [active, setActive] = useState(activePage);

  const handleNav = (id) => {
    setActive(id);
    onNavigate?.(id);
  };

  return (
    <aside className="w-40 min-h-screen bg-[#ffffff] flex flex-col py-6 shrink-0">
      {/* Header */}
      <div className="px-4 pb-6 border-b border-gray-200 mb-2">
        <p className="text-black-900 text-sm font-semibold tracking-tight m-0">
          My Account
        </p>
        <p className="text-gray-400 text-[11px] mt-0.5 m-0">บัญชีของฉัน</p>
      </div>

      {/* Nav */}
      <nav className="flex flex-col gap-0.5 px-2">
        {navItems.map((item) => {
          const isActive = active === item.id;

          return (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className={`
                flex items-center gap-2.5 px-2.5 py-2 rounded-lg border-none w-full text-left
                transition-colors duration-150 cursor-pointer
                ${
                  isActive
                    ? "bg-violet-400/10"
                    : item.accent
                      ? "bg-linear-to-r from-indigo-900 to-transparent"
                      : "bg-transparent hover:bg-white/5"
                }
              `}
            >
              <img
                src={item.icon}
                width={16}
                height={16}
                alt=""
                className="shrink-0"
              />

              <span className="flex flex-col gap-0">
                <span
                  className={`text-[13px] font-medium leading-snug
                 ${isActive ? "text-violet-600" : item.accent ? "text-white" : "text-gray-700"}
                `}
                >
                  {item.label}
                </span>
                {item.labelTh && (
                  <span className="text-[10px] text-gray-400 leading-tight">
                    {item.labelTh}
                  </span>
                )}
              </span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
