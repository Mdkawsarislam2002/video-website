import { useState } from "react";

import { Link, useMatch, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import LWS_Logo from "../assets/lws.svg";
import search from "../assets/search.svg";
import { setSearchValue } from "../Redux/features/Filtered/Filtered";

const Nav = () => {
  const { searchValue } = useSelector((state) => state.filtered);
  const [UserSearchValue, setUserSearchValue] = useState(searchValue);
  const dispatch = useDispatch();
  const match = useMatch("/");
  const navigate = useNavigate("/");

  const formHandler = (e) => {
    e.preventDefault();
    dispatch(setSearchValue(UserSearchValue));

    if (!match) navigate("/");
  };

  return (
    <>
      <nav className="bg-slate-100 shadow-md px-4">
        <div className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3">
          <Link to={"/"}>
            <img className="h-10" src={LWS_Logo} alt="Learn with Sumit" />
          </Link>
          <div className="border border-slate-200 flex items-center bg-white h-10 px-5 rounded-lg text-sm ring-emerald-200">
            {/* search */}
            <form onSubmit={formHandler}>
              <input
                className="outline-none border-none mr-2"
                type="search"
                name="search"
                placeholder="Search"
                value={UserSearchValue}
                onChange={(e) => {
                  setUserSearchValue(e.target.value);
                }}
              />
            </form>
            <img
              className="inline h-4 cursor-pointer"
              src={search}
              alt="Search"
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
