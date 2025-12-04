import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "../Pagination";
import { FaEye } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { get_deactive_sellers } from "../../store/Reducers/sellerReducer";
const DeactiveSellers = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [parPage, setParPage] = useState(5);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const { sellers, totalSeller } = useSelector((state) => state.seller);

  useEffect(() => {
    const obj = {
      parPage: parseInt(parPage),
      page: parseInt(currentPage),
      searchValue,
    };
    dispatch(get_deactive_sellers(obj));
  }, [searchValue, currentPage, parPage]);
  return (
    <div className="px-2 pt-5 lg:px-7">
      <h1 className="text-[20px] font-bold mb-3">Deactive Seller </h1>

      <div className="w-full p-4 bg-[#6a5fdf] rounded-md">
        <div className="flex items-center justify-between">
          <select
            onChange={(e) => setParPage(parseInt(e.target.value))}
            className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]"
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
          </select>
          <input
            onChange={(e) => setSearchValue(e.target.value)}
            value={searchValue}
            className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]"
            type="text"
            placeholder="search"
          />
        </div>

        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-[#d0d2d6]">
            <thead className="text-sm text-[#d0d2d6] uppercase border-b border-slate-700">
              <tr>
                <th scope="col" className="px-4 py-3">
                  No
                </th>
                <th scope="col" className="px-4 py-3">
                  Image
                </th>
                <th scope="col" className="px-4 py-3">
                  Name
                </th>
                <th scope="col" className="px-4 py-3">
                  Shop Name
                </th>
                <th scope="col" className="px-4 py-3">
                  Payment Status
                </th>
                <th scope="col" className="px-4 py-3">
                  Email
                </th>
                <th scope="col" className="px-4 py-3">
                  Status
                </th>
                <th scope="col" className="px-4 py-3">
                  District
                </th>
                <th scope="col" className="px-4 py-3">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {sellers.map((d, i) => (
                <tr key={i}>
                  <td
                    scope="row"
                    className="px-4 py-1 font-medium whitespace-nowrap"
                  >
                    {i + 1}
                  </td>
                  <td
                    scope="row"
                    className="px-4 py-1 font-medium whitespace-nowrap"
                  >
                    <img className="w-[45px] h-[45px]" src={d.image} alt="" />
                  </td>
                  <td
                    scope="row"
                    className="px-4 py-1 font-medium whitespace-nowrap"
                  >
                    {d.name}
                  </td>
                  <td
                    scope="row"
                    className="px-4 py-1 font-medium whitespace-nowrap"
                  >
                    {d.shopInfo?.shopName}
                  </td>
                  <td
                    scope="row"
                    className="px-4 py-1 font-medium whitespace-nowrap"
                  >
                    <span>{d.payment}</span>{" "}
                  </td>
                  <td
                    scope="row"
                    className="px-4 py-1 font-medium whitespace-nowrap"
                  >
                    {d.email}{" "}
                  </td>

                  <td
                    scope="row"
                    className="px-4 py-1 font-medium whitespace-nowrap"
                  >
                    <span>{d.status}</span>{" "}
                  </td>
                  <td
                    scope="row"
                    className="px-4 py-1 font-medium whitespace-nowrap"
                  >
                    {d.shopInfo?.district}{" "}
                  </td>

                  <td
                    scope="row"
                    className="px-4 py-1 font-medium whitespace-nowrap"
                  >
                    <div className="flex items-center justify-start gap-4">
                      <Link
                        to={`/admin/dashboard/seller/details/${d._id}`}
                        className="p-[6px] bg-green-500 rounded hover:shadow-lg hover:shadow-green-500/50"
                      >
                        {" "}
                        <FaEye />{" "}
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-end w-full mt-4 bottom-4 right-4">
          <Pagination
            pageNumber={currentPage}
            setPageNumber={setCurrentPage}
            totalItem={50}
            parPage={parPage}
            showItem={3}
          />
        </div>
      </div>
    </div>
  );
};

export default DeactiveSellers;
