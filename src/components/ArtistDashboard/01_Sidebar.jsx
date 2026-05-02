const navItems = [
  {
    id: "overview",
    label: "Overview",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="4" rx="1.5" />
        <rect x="14" y="10" width="7" height="11" rx="1.5" />
        <rect x="3" y="13" width="7" height="8" rx="1.5" />
      </svg>
    ),
  },
  {
    id: "my-store",
    label: "My Store",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 9.5 5.5 4h13L20 9.5" />
        <path d="M4 9.5h16v2a3 3 0 0 1-3 3 3 3 0 0 1-2.5-1.3A3 3 0 0 1 12 14.5a3 3 0 0 1-2.5-1.3A3 3 0 0 1 7 14.5a3 3 0 0 1-3-3v-2Z" />
        <path d="M6 14.5V20h12v-5.5" />
      </svg>
    ),
  },
  {
    id: "orders",
    label: "Orders",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="9" cy="19" r="1.5" />
        <circle cx="17" cy="19" r="1.5" />
        <path d="M3 4h2l2.2 10.2a1 1 0 0 0 1 .8h8.8a1 1 0 0 0 1-.8L20 7H7" />
      </svg>
    ),
  },
  {
    id: "sales",
    label: "Sales",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 20V10" />
        <path d="M10 20V4" />
        <path d="M16 20v-7" />
        <path d="M22 20v-4" />
      </svg>
    ),
  },
];

const Sidebar = ({ activePage, onNavigate }) => {
  return (
    <aside className="flex min-h-screen w-36 shrink-0 flex-col bg-[#1e1b4b] px-3 py-5 md:w-44 md:px-4 md:py-6">
      <div className="mb-2 border-b border-white/10 pb-5">
        <p className="text-base font-bold text-white md:text-lg">Artist Studio</p>
        <p className="mt-1 text-[11px] text-white/40">ร้านค้าของฉัน</p>
      </div>

      <nav className="space-y-2">
        {navItems.map((item) => {
          const isActive = activePage === item.id;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onNavigate(item.id)}
              className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition ${
                isActive
                  ? "bg-white/10 text-white"
                  : "text-white/60 hover:bg-white/5 hover:text-white"
              }`}
            >
              <span className="h-5 w-5 shrink-0">{item.icon}</span>
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>

      <button
        type="button"
        onClick={() => onNavigate("customer")}
        className="mt-auto flex w-full items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-left text-white/80 transition hover:bg-white/10 hover:text-white"
      >
        <span className="h-5 w-5 shrink-0">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M16 4h2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-2" />
            <path d="M9 16l-4-4 4-4" />
            <path d="M5 12h11" />
          </svg>
        </span>
        <span className="text-sm font-medium">Customer account</span>
      </button>
    </aside>
  );
};

export default Sidebar;
