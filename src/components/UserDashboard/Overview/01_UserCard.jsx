const UserCard = () => {
  return (
    <div className="flex items-center gap-4 rounded-2xl bg-white px-6 py-6">
      <div className="h-18 w-18 rounded-full bg-gray-200" />

      <div>
        <h2 className="text-xl font-bold text-gray-900">Luna Atelier</h2>
        <p className="mt-1 text-sm text-gray-400">@lunaatelier</p>

        <div className="mt-4 flex flex-wrap gap-2">
          <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-600">
            Customer
          </span>
          <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-600">
            Artist
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
