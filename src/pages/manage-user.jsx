import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../components/header";
import {
  faCaretLeft,
  faCaretRight,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useEffect, useState } from "react";
import EditModal from "../components/edit-modal";
import AddUserModal from "../components/add-modal";

const Manage = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [userSelect, setUserSelect] = useState();
  const [openAddModal, setOpenAddModal] = useState(false)

  const getUsers = async () => {
    const { data } = await axios.get(
      `https://reqres.in/api/users?page=${page}`
    );
    setUsers(data.data);
  };

  useEffect(() => {
    getUsers();
  }, [page]);

  console.log(users);

  return (
    <div>
      <Header />
      <div className="w-content mx-auto">
        <div className="flex justify-between mt-10">
          <h1 className="font-semibold text-lg">List User</h1>
          <button className="flex items-center text-base font-semibold text-white bg-green-500 px-3 py-1 rounded-sm" onClick={()=>setOpenAddModal(true)}>
            <span className="mr-1">
              <FontAwesomeIcon icon={faUserPlus} />
            </span>{" "}
            Add User{" "}
          </button>
        </div>
        <form className="block my-4">
          <input
            type="text"
            placeholder="search user by email..."
            className="w-80 block outline-none text-sm border-solid border-[1px] border-[#ccc] px-2 py-1"
          />
        </form>
        <div>
          <ul className="flex items-center">
            <li className="w-1/6 border-solid border-[1px] border-[#ccc] px-2 py-1 font-medium">
              ID
            </li>
            <li className="w-1/5 border-solid border-[1px] border-[#ccc] px-2 py-1 font-medium">
              Email
            </li>
            <li className="flex-1 border-solid border-[1px] border-[#ccc] px-2 py-1 font-medium">
              Full name
            </li>
            <li className="w-1/5 border-solid border-[1px] border-[#ccc] px-2 py-1 font-medium">
              Action
            </li>
          </ul>
          {users.length > 0 &&
            users.map((item) => {
              return (
                <ul className="flex" key={item.id}>
                  <li className="w-1/6 border-solid border-[1px] border-[#ccc] px-2 py-1 font-medium">
                    {item.id}
                  </li>
                  <li className="w-1/5 border-solid border-[1px] border-[#ccc] px-2 py-1 font-medium">
                    {item.email}
                  </li>
                  <li className="flex-1 border-solid border-[1px] border-[#ccc] px-2 py-1 font-medium">
                    {item.first_name + item.last_name}
                  </li>
                  <li className="w-1/5 border-solid border-[1px] border-[#ccc] px-2 py-1 font-medium">
                    <button
                      className="inline-block px-3 py-1 bg-yellow-500 text-white mx-1 rounded-sm hover:opacity-80"
                      onClick={() => {
                        setOpenEditModal(true);
                        setUserSelect(item.id);
                      }}
                    >
                      Edit
                    </button>
                    <button className="inline-block px-3 py-1 bg-red-500 text-white mx-1 rounded-sm hover:opacity-80">
                      Delete
                    </button>
                  </li>
                </ul>
              );
            })}
        </div>
        <button
          className="inline-block px-4 py-2 bg-green-500 text-white mt-10 mx-2"
          onClick={() =>
            setPage((pre) => {
              if (pre > 1) {
                return pre - 1;
              }
              return pre;
            })
          }
        >
          <FontAwesomeIcon icon={faCaretLeft} />
        </button>
        <button
          className="inline-block px-4 py-2 bg-green-500 text-white mt-10 mx-2"
          onClick={() =>
            setPage((pre) => {
              if (pre < 2) {
                return pre + 1;
              }
              return pre;
            })
          }
        >
          <FontAwesomeIcon icon={faCaretRight} />
        </button>
      </div>
      {openEditModal && (
        <EditModal setOpenEditModal={setOpenEditModal} userid={userSelect} setUsers={setUsers} />
      )}
      {
        openAddModal && <AddUserModal setOpenAddModal={setOpenAddModal} />
      }
    </div>
  );
};

export default Manage;
