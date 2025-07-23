import React from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect } from "react";
import { Eye, EyeOff } from "lucide-react";

const Manager = () => {
  const [showPassword, setShowPassword] = useState(true);
  const [passwordArray, setPasswordArray] = useState([]);
  const [form, setForm] = useState({ website: "", username: "", password: "" });
  const [editIndex, setEditIndex] = useState(null);

  const notify = () => {
    toast.info("Password Updated!", toastOptions);
  };

  const delnotify = () => {
    toast.success("Password Deleted Successfully!", toastOptions);
  };

  const toastOptions = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Bounce,
  };

  useEffect(() => {
    const passwords = localStorage.getItem("passwords");
    if (passwords) setPasswordArray(JSON.parse(passwords));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.website || !form.username || !form.password) {
      toast.warn("Fields are empty!", toastOptions);
      return;
    }
    let updatedArray;
    if (editIndex !== null) {
      updatedArray = [...passwordArray];
      updatedArray[editIndex] = form;
      notify();
    } else {
      updatedArray = [...passwordArray, form];
      toast.success("Password Added Successfully", toastOptions);
    }
    setPasswordArray(updatedArray);
    localStorage.setItem("passwords", JSON.stringify(updatedArray));
    setForm({ website: "", username: "", password: "" });
    setEditIndex(null);
  };

  const handleDelete = (index) => {
    const updatedPasswords = passwordArray.filter((_, i) => i !== index);
    setPasswordArray(updatedPasswords);
    localStorage.setItem("passwords", JSON.stringify(updatedPasswords));
    delnotify();
  };

  const handleEdit = (index) => {
    const entry = passwordArray[index];
    setForm(entry);
    setEditIndex(index);
  };

  const togglePassword = () => setShowPassword(!showPassword);

  return (
    <>
      <ToastContainer {...toastOptions} />

      <div className="bg-gradient-to-b from-gray-900 to-indigo-800 min-h-screen p-4 md:p-10">
        <div className="max-w-4xl mx-auto rounded-lg p-6 shadow-lg space-y-6">
          <div className="flex justify-center">
            <lord-icon
              src="https://cdn.lordicon.com/ezaczjxp.json"
              trigger="loop"
              stroke="bold"
              colors="primary:#16a9c7,secondary:#d1faf0"
              style={{ width: "150px", height: "150px" }}
            ></lord-icon>
          </div>
          <h1 className="text-center text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-white to-blue-600">
            Password Vault for your secrets!
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              value={form.website}
              onChange={(e) => setForm({ ...form, website: e.target.value })}
              type="text"
              placeholder="Website"
              className="w-full p-2 bg-gray-700 text-white border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
            />

            <div className="flex flex-col md:flex-row gap-4">
              <input
                value={form.username}
                onChange={(e) => setForm({ ...form, username: e.target.value })}
                type="text"
                placeholder="Username"
                className="flex-1 p-2 bg-gray-700 text-white border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
              />

              <div className="relative flex-1">
                <input
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  type={showPassword ? "password" : "text"}
                  placeholder="Password"
                  className="w-full p-2 pr-10 bg-gray-700 text-white border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <span onClick={togglePassword} className="absolute right-3 top-2.5 text-gray-400 cursor-pointer">
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </span>
              </div>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 rounded text-white transition"
              >
                <lord-icon
                  src="https://cdn.lordicon.com/efxgwrkc.json"
                  trigger="loop"
                  colors="primary:#30c9e8"
                  style={{ width: "30px", height: "30px" }}
                ></lord-icon>
                {editIndex !== null ? "Update Password" : "Add Password"}
              </button>
            </div>
          </form>

          <div>
            <h2 className="text-2xl font-semibold text-pink-200 text-center">Your Passwords</h2>
            {passwordArray.length === 0 ? (
              <p className="text-center text-white mt-4">No passwords added yet.</p>
            ) : (
              <div className="overflow-auto">
                <div className="hidden md:block">
                  <table className="w-full mt-4 text-white">
                    <thead className="bg-blue-800">
                      <tr>
                        <th className="py-2 px-2 text-left">Website</th>
                        <th className="py-2 px-2 text-left">Username</th>
                        <th className="py-2 px-2 text-left">Password</th>
                        <th className="py-2 px-2">Edit</th>
                        <th className="py-2 px-2">Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {passwordArray.map((item, index) => (
                        <tr key={index} className="odd:bg-gray-900 even:bg-gray-800 border-b border-gray-700">
                          <td className="py-2 px-2">
                            <a href={item.website} target="_blank" rel="noreferrer" className="hover:underline">
                              {item.website}
                            </a>
                          </td>
                          <td className="py-2 px-2">{item.username}</td>
                          <td className="py-2 px-2">{item.password}</td>
                          <td className="py-2 px-2">
                            <button onClick={() => handleEdit(index)}>
                              <lord-icon
                                src="https://cdn.lordicon.com/cbtlerlm.json"
                                trigger="loop"
                                colors="primary:#000,secondary:#ffc738"
                                style={{ width: "25px", height: "25px" }}
                              ></lord-icon>
                            </button>
                          </td>
                          <td className="py-2 px-2">
                            <button onClick={() => handleDelete(index)}>
                              <lord-icon
                                src="https://cdn.lordicon.com/xyfswyxf.json"
                                trigger="loop"
                                colors="primary:#c71f16"
                                style={{ width: "25px", height: "25px" }}
                              ></lord-icon>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="md:hidden space-y-4 mt-4">
                  {passwordArray.map((item, index) => (
                    <div key={index} className="bg-gray-900 p-4 rounded-md shadow-md">
                      <p className="text-sm text-gray-300"><strong>Website:</strong> <a href={item.website} target="_blank" rel="noreferrer" className="hover:underline">{item.website}</a></p>
                      <p className="text-sm text-gray-300"><strong>Username:</strong> {item.username}</p>
                      <p className="text-sm text-gray-300"><strong>Password:</strong> {item.password}</p>
                      <div className="flex justify-end gap-4 mt-2">
                        <button onClick={() => handleEdit(index)}>
                          <lord-icon
                            src="https://cdn.lordicon.com/cbtlerlm.json"
                            trigger="loop"
                            colors="primary:#000,secondary:#ffc738"
                            style={{ width: "25px", height: "25px" }}
                          ></lord-icon>
                        </button>
                        <button onClick={() => handleDelete(index)}>
                          <lord-icon
                            src="https://cdn.lordicon.com/xyfswyxf.json"
                            trigger="loop"
                            colors="primary:#c71f16"
                            style={{ width: "25px", height: "25px" }}
                          ></lord-icon>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Manager;
