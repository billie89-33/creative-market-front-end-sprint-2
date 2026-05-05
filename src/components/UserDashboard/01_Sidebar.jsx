import overviewIcon from "../../assets/icons/user-dashboard-overview-icon.svg";
import myOrdersIcon from "../../assets/icons/user-dashboard-myorder-icon.svg";
import myAddressIcon from "../../assets/icons/user-dashboard-myaddress-icon.svg";

const navItems = [
  { id: "overview", label: "Overview", icon: overviewIcon },
  { id: "my-orders", label: "My Orders", icon: myOrdersIcon },
  { id: "my-address", label: "My Address", icon: myAddressIcon },
];

const Sidebar = ({ activePage, onNavigate }) => {
  return (
    <aside className="flex min-h-screen w-full max-w-20 shrink-0 flex-col border-r border-gray-100 bg-white px-2 py-4 md:max-w-72 md:px-4 md:py-6">
      <div className="border-b border-gray-100 px-1 pb-4 text-center md:px-3 md:pb-5 md:text-left">
        <p className="hidden text-lg font-bold text-gray-900 md:block">
          My Account
        </p>
        <p className="text-[11px] text-gray-400">บัญชีของฉัน</p>
      </div>

      <nav className="mt-4 flex flex-col gap-2 md:mt-5">
        {navItems.map((item) => {
          const isActive = activePage === item.id;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onNavigate(item.id)}
              className={`flex items-center justify-center rounded-2xl px-3 py-3 text-left transition md:justify-start md:gap-3 md:px-4 ${
                isActive
                  ? "bg-violet-100 text-violet-600"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <img src={item.icon} alt="" className="h-5 w-5 shrink-0" />
              <span className="hidden text-sm font-medium md:inline">
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
