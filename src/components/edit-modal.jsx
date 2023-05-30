import axios from "axios";
import { useState } from "react";

const EditModal = ({ setOpenEditModal, userid, setUsers }) => {
  const id = userid;
  const EditUser = async (id) => {
    const res = await axios.patch(`https://reqres.in/api/users/${id}`, {
      email,
      first_name: firstname,
      last_name: lastname,
    });
    console.log(res);
    // setUsers((pre) => {
    //   const newUsers = [...pre];
    //   newUsers.forEach((item) => {
    //     if (item.id === id) {
    //       (item.first_name = firstname), (item.last_name = lastname);
    //       item.email = email;
    //     }
    //   });
    //   return newUsers;
    // });
  };
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  return (
    <div
      className="fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.5)] flex items-center justify-center"
      onClick={() => setOpenEditModal(false)}
    >
      <div className="bg-white px-4" onClick={(e) => e.stopPropagation()}>
        <h2 className="text-lg font-semibold text-center uppercase py-2">
          Edit user
        </h2>
        <form
          action=""
          className="w-80"
          onSubmit={(e) => {
            e.preventDefault();
            EditUser();
            setOpenEditModal(false);
          }}
        >
          <input
            type="text"
            name=""
            id=""
            className="block w-full my-3 border-solid border-[1px] border-[#ccc] px-2 py-1 outline-none rounded-sm"
            placeholder="input new email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            name=""
            id=""
            className="block w-full my-3 border-solid border-[1px] border-[#ccc] px-2 py-1 outline-none rounded-sm"
            placeholder="input new first name..."
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
          <input
            type="text"
            name=""
            id=""
            className="block w-full my-3 border-solid border-[1px] border-[#ccc] px-2 py-1 outline-none rounded-sm"
            placeholder="input new last_name..."
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
          <button
            onClick={() => setOpenEditModal(false)}
            className="inline-block px-4 py-1 m-3 text-black border-solid border-[1px] border-[#ccc]"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              setOpenEditModal(false);
              EditUser();
            }}
            className="inline-block px-4 py-1 m-3  bg-green-500 text-white"
          >
            Enter
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
