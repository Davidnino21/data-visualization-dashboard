function SideBar() {
  return (
    <div className="flex flex-col bg-slate-800 p-7 text-white h-screen w-2xs">
      <h2 className="text-2xl font-bold p-2.5">Dashboard</h2>
      <div className="p-2 leading-10 font-thin">
        <h3>Overview</h3>
        <h3>Performance</h3>
        <h3>Trends</h3>
        <h3>Settings</h3>
      </div>
    </div>
  );
}

export default SideBar;
