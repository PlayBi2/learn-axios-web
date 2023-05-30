import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import HomePage from "./pages/home";
import Manage from "./pages/manage-user";
import { AppContext } from "./context-api/auth-provider";

function App() {
  const data = useContext(AppContext);

  console.log(data);

  const [openBox, setOpenBox] = useState(false);

  return (
    <div className="App flex justify-center items-center min-h-screen">
      {/* <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/manage-user" element={<Manage />} />

      </Routes> */}
      <div className="  ">
        {data.length > 0 &&
          data.map((item) => {
            return (
              <div
                className="py-2 border-b-2 border-solid border-[#333]"
                key={item.id}
              >
                <p>Name: {item.name}</p> <p>email: {item.email}</p>{" "}
                <p>Address: {item.address}</p>{" "}
                <button
                  className="border-solid border-2 border-[#ccc] mt-4 px-2 py-1"
                  // onClick={() => Edit(item.id)}
                  onClick={() => setOpenBox(true)}
                >
                  Edit
                </button>
                {openBox && <BoxEdit id={item.id} setOpenBox={setOpenBox} />}
              </div>
            );
          })}
      </div>
    </div>
  );
}

const BoxEdit = ({ id, setOpenBox }) => {
  const idPost = id;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const Edit = async () => {
    const res = await axios.patch(`http://localhost:3000/posts/${idPost}`, {
      name,
      email,
      address,
    });
    console.log(res);
  };
  return (
    <form>
      <input
        type="text"
        placeholder="edit name..."
        className="block outline-none border-solid border-[#ccc] border-[1px] px-2 py-1"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="edit email..."
        className="block outline-none border-solid border-[#ccc] border-[1px] px-2 py-1"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="edit address..."
        className="block outline-none border-solid border-[#ccc] border-[1px] px-2 py-1"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <button
        className="px-2 py-1 mx-2 border-solid border-[#ccc] border-2"
        onClick={() => Edit()}
      >
        Submit
      </button>
      <button
        onClick={() => setOpenBox(false)}
        className="px-2 py-1 mx-2 border-solid border-[#ccc] border-2"
      >
        Cancel
      </button>
    </form>
  );
};

export default App;
