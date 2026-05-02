const AddressCard = ({ address }) => {
  return (
    <article className="flex flex-col gap-5 rounded-2xl bg-white p-6 md:flex-row md:items-start">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-6 w-6"
        >
          <path d="M12 3.75a5.25 5.25 0 0 0-5.25 5.25v11.25a.75.75 0 0 0 1.28.53l3.97-3.97 3.97 3.97a.75.75 0 0 0 1.28-.53V9A5.25 5.25 0 0 0 12 3.75Z" />
        </svg>
      </div>

      <div className="flex-1">
        <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
          <div>
            <h3 className="text-lg font-bold text-gray-900">{address.label}</h3>
            <p className="mt-1 text-sm font-medium text-gray-700">
              {address.name}
            </p>
          </div>

          {address.isCurrent && (
            <span className="inline-flex rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-600">
              Current address
            </span>
          )}
        </div>

        <div className="mt-4 space-y-1 text-sm text-gray-500">
          <p>{address.street}</p>
          <p>
            {address.city}, {address.postcode}
          </p>
          <p>{address.country}</p>
          <p>Tel: {address.tel}</p>
        </div>

        <div className="mt-5 flex gap-4 text-sm font-semibold">
          <button
            type="button"
            className="text-violet-600 transition hover:text-violet-700"
          >
            Edit
          </button>
          <button
            type="button"
            className="text-rose-500 transition hover:text-rose-600"
          >
            Delete
          </button>
        </div>
      </div>
    </article>
  );
};

export default AddressCard;
