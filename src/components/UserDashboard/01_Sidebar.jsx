import overviewIcon from "../../assets/icons/user-dashboard-overview-icon.svg";
import myOrdersIcon from "../../assets/icons/user-dashboard-myorder-icon.svg";
import myAddressIcon from "../../assets/icons/user-dashboard-myaddress-icon.svg";
import artistStudioIcon from "../../assets/icons/user-dashboard-artisrt-studio-icon.svg";

const navItems = [
  { id: "overview", label: "Overview", icon: overviewIcon },
  { id: "my-orders", label: "My Orders", icon: myOrdersIcon },
  { id: "my-address", label: "My Address", icon: myAddressIcon },
];

const Sidebar = ({ activePage, onNavigate }) => {
  return (
    <aside className="flex min-h-screen w-full max-w-72 shrink-0 flex-col border-r border-gray-100 bg-white px-4 py-6">
      <div className="border-b border-gray-100 px-3 pb-5">
        <p className="text-lg font-bold text-gray-900">My Account</p>
        <p className="text-[11px] text-gray-400">บัญชีของฉัน</p>
      </div>

      <nav className="mt-5 flex flex-col gap-2">
        {navItems.map((item) => {
          const isActive = activePage === item.id;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onNavigate(item.id)}
              className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-left transition ${
                isActive
                  ? "bg-violet-100 text-violet-600"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <img src={item.icon} alt="" className="h-5 w-5 shrink-0" />
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>

      <button
        type="button"
        className="mt-2 flex items-center gap-3 rounded-2xl bg-linear-to-r from-indigo-900 to-transparent px-4 py-4 text-left text-white transition hover:brightness-90 active:brightness-75"
      >
        <img src={artistStudioIcon} alt="" className="h-5 w-5 shrink-0" />
        <span className="text-sm font-medium">Artist Studio</span>
      </button>
    </aside>
  );
};

export default Sidebar;
