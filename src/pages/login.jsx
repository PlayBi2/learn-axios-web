import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useState } from "react";

const Login = () => {
  const [checkPassword, setCheckPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    const response = await axios.get("https://reqres.in/api/login", {
      email: username,
      password,
    });
    if (response) {
      localStorage.setItem("check-login", "true");
    }
  };

  return (
    <div className="flex justify-center">
      <form
        className="block w-1/4 mt-20 select-none"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <h2 className="text-center text-2xl font-semibold mb-10 uppercase">
          Log in
        </h2>
        <label htmlFor="username" className="font-medium mb-1 block">
          Email or username(eve.holt@reqres.in)
        </label>
        <input
          type="text"
          name=""
          id="username"
          placeholder="Email or username"
          className="block w-full outline-none px-2 py-1 mb-4 rounded-sm bg-gray-100"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password" className="font-medium mb-1 block">
          Password(cityslicka)
        </label>
        <div className="flex items-center bg-gray-100 mb-4 select-none">
          <input
            type={checkPassword ? "text" : "password"}
            name=""
            id="password"
            placeholder="Password"
            className="block w-full outline-none px-2 py-1rounded-sm bg-transparent"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span
            className="cursor-pointer p-1"
            onClick={() => setCheckPassword(!checkPassword)}
          >
            {checkPassword ? (
              <>
                <FontAwesomeIcon icon={faEyeSlash} />
              </>
            ) : (
              <>
                <FontAwesomeIcon icon={faEye} />
              </>
            )}
          </span>
        </div>
        <button
          type="submit"
          className="block w-full text-center py-2 bg-red-500 text-white"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
