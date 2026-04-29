import Sidebar from "../components/UserDashboard/01_Sidebar";

const UserDashboard = () => {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        backgroundColor: "#eeedf8",
      }}
    >
      <Sidebar />
      <main style={{ flex: 1, padding: "32px" }}>
        {/* content จะมาอยู่ตรงนี้ */}
      </main>
    </div>
  );
};

export default UserDashboard;
