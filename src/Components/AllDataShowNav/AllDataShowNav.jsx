import { NavLink } from "react-router-dom";



const AllDataShowNav = () => {
    return (
        <div className=" flex flex-col justify-center items-center gap-5">
            <NavLink className="btn w-[200px]  rounded-[30px]  hover:text-white hover:bg-[#9538E2]" to="/allData">All Data</NavLink>
            <NavLink className="btn w-[200px]  rounded-[30px]  hover:text-white hover:bg-[#9538E2]" to="/laptop">Laptop</NavLink>
            <NavLink className="btn w-[200px]  rounded-[30px]  hover:text-white hover:bg-[#9538E2]" to="/mobile">Mobile</NavLink>
            <NavLink className="btn w-[200px]  rounded-[30px]  hover:text-white hover:bg-[#9538E2]" to="/accessories">Accessories</NavLink>
            <NavLink className="btn w-[200px]  rounded-[30px]  hover:text-white hover:bg-[#9538E2]" to="/watch">Watch</NavLink>
            
        </div>
    );
};

export default AllDataShowNav;