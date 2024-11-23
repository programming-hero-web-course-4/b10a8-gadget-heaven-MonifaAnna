const Navbar = () => {
  return (
    <div className="navbar bg-[#9538E2] px-[130px] text-white py-10">
      <div className="navbar-start">
      <a className="btn btn-ghost text-xl">Gadget Heaven</a>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost">Home</a>
        <a className="btn btn-ghost">Statistics</a>
        <a className="btn btn-ghost">Dashboard</a>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle">
        <i className="fa-solid fa-cart-plus text-3xl"></i>
        </button>
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
          <i className="fa-regular fa-heart text-3xl"></i>
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
