import AddressCard from "./01_AddressCard";

const addresses = [
  {
    label: "Home",
    name: "Luna Atelier",
    street: "88 Sukhumvit 24, Khlong Tan",
    city: "Bangkok",
    postcode: "10110",
    country: "Thailand",
    tel: "081-234-5678",
    isCurrent: true,
  },
];

const MyAddress = () => {
  return (
    <section className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">My Adress</h1>
        <p className="mt-1 text-sm text-gray-400">ที่อยู่ของฉัน</p>
      </header>

      <div>
        <h2 className="text-lg font-bold text-gray-900">ที่อยู่จัดส่ง</h2>
      </div>

      <div className="space-y-4">
        {addresses.map((address) => (
          <AddressCard key={address.label} address={address} />
        ))}
      </div>
    </section>
  );
};

export default MyAddress;
