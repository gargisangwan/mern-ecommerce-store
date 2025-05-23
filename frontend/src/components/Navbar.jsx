import {
  ShoppingCart,
  UserPlus,
  LogIn,
  //LogOut,
  Lock,
  Contact,
  Settings,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useUserStore } from "../stores/useUserStore";
import { useCartStore } from "../stores/useCartStore";
import { useState } from "react";
import { Button, Modal, Dropdown, Input, Form } from "antd";

const Navbar = () => {
  const { user, logout, resetPassword } = useUserStore();
  const { cart } = useCartStore();
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const [isResetModalOpen, setIsResetModalOpen] = useState(false);

  const isAdmin = user?.role === "admin";

  const handleLogout = () => {
    logout();
    setIsLogoutModalOpen(false);
  };

  const handleResetPassword = (values) => {
    resetPassword(values.currentPassword, values.newPassword);
    setIsResetModalOpen(false);
  };

  const userMenuItems = [
    {
      key: "reset",
      label: "Reset Password",
      onClick: () => setIsResetModalOpen(true),
    },
    {
      key: "logout",
      label: "Log Out",
      onClick: () => setIsLogoutModalOpen(true),
    },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-90 backdrop-blur-md shadow-lg z-40 border-b border-emerald-800">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center flex-wrap">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-emerald-400 flex items-center">
            TrendLuxe
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-6">
            <Link to="/" className="text-gray-300 hover:text-emerald-400 transition">
              Home
            </Link>

            {user && !isAdmin && (
              <Link to="/contact" className="text-gray-300 hover:text-emerald-400 flex items-center transition">
                <Contact size={20} className="mr-1" />
                <span className="hidden sm:inline">Contact Us</span>
              </Link>
            )}

            {user && (
              <Link to="/cart" className="relative text-gray-300 hover:text-emerald-400 flex items-center transition">
                <ShoppingCart size={20} className="mr-1" />
                <span className="hidden sm:inline">Cart</span>
                {cart.length > 0 && (
                  <span className="absolute -top-2 -left-2 bg-emerald-500 text-white rounded-full px-2 py-0.5 text-xs">
                    {cart.length}
                  </span>
                )}
              </Link>
            )}

            {isAdmin && (
              <Link
                to="/secret-dashboard"
                className="bg-emerald-700 hover:bg-emerald-600 text-white px-3 py-1 rounded-md flex items-center transition"
              >
                <Lock size={18} className="mr-1" />
                <span className="hidden sm:inline">Dashboard</span>
              </Link>
            )}

            {user ? (
              <Dropdown
                menu={{ items: userMenuItems }}
                placement="bottomRight"
                trigger={["click"]}
              >
                <button className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-md flex items-center transition">
                  <Settings size={18} />
                </button>
              </Dropdown>
            ) : (
              <>
                <Link
                  to="/signup"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-md flex items-center transition"
                >
                  <UserPlus size={18} className="mr-2" />
                  Sign Up
                </Link>
                <Link
                  to="/login"
                  className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-md flex items-center transition"
                >
                  <LogIn size={18} className="mr-2" />
                  Login
                </Link>
              </>
            )}
          </nav>
        </div>
      </div>

      {/* Logout Modal */}
      <Modal
        title="Confirm Logout"
        open={isLogoutModalOpen}
        onCancel={() => setIsLogoutModalOpen(false)}
        centered
        footer={[
          <Button key="cancel" onClick={() => setIsLogoutModalOpen(false)}>
            Cancel
          </Button>,
          <Button key="logout" type="primary" danger onClick={handleLogout}>
            Log Out
          </Button>,
        ]}
      >
        <p>Are you sure you want to log out?</p>
      </Modal>

      {/* Reset Password Modal */}
      <Modal
        title="Reset Your Password"
        open={isResetModalOpen}
        onCancel={() => setIsResetModalOpen(false)}
        centered
        footer={null}
        destroyOnClose
      >
        <Form layout="vertical" onFinish={handleResetPassword}>
          <Form.Item
            name="currentPassword"
            label="Current Password"
            rules={[{ required: true, message: "Please enter your current password." }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="newPassword"
            label="New Password"
            rules={[{ required: true, message: "Please enter a new password." }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="confirmPassword"
            label="Confirm New Password"
            dependencies={["newPassword"]}
            rules={[
              { required: true, message: "Please confirm your new password." },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("newPassword") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("Passwords do not match."));
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          <div className="flex justify-end gap-3 mt-4">
            <Button onClick={() => setIsResetModalOpen(false)}>Cancel</Button>
            <Button type="primary" htmlType="submit">
              Change Password
            </Button>
          </div>
        </Form>
      </Modal>
    </header>
  );
};

export default Navbar;





























// import {
//   ShoppingCart,
//   UserPlus,
//   LogIn,
//   LogOut,
//   Lock,
//   Contact,
// } from "lucide-react";
// import { Link } from "react-router-dom";
// import { useUserStore } from "../stores/useUserStore";
// import { useCartStore } from "../stores/useCartStore";
// import { useState } from "react";
// import { Button, Modal } from "antd";

// const Navbar = () => {
//   const { user, logout } = useUserStore();
//   const isAdmin = user?.role === "admin";
//   const { cart } = useCartStore();
//   const [isModalOpen, setisModalOpen] = useState(false);

//   const handleCancel = () => {
//     setisModalOpen(false);
//   };

//   return (
//     <header className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-90 backdrop-blur-md shadow-lg z-40 transition-all duration-300 border-b border-emerald-800">
//       <div className="container mx-auto px-4 py-3">
//         <div className="flex flex-wrap justify-between items-center">
//           <Link
//             to="/"
//             className="text-2xl font-bold text-emerald-400 items-center space-x-2 flex"
//           >
//             TrendLuxe
//           </Link>

//           <nav className="flex flex-wrap items-center gap-20">
//             <Link
//               to={"/"}
//               className="text-gray-300 hover:text-emerald-400 transition duration-300
// 					 ease-in-out"
//             >
//               Home
//             </Link>
//             {user && !isAdmin && (
//               <Link
//                 to={"/contact"}
//                 className="relative group text-gray-300 hover:text-emerald-400 transition duration-300 
// 							ease-in-out"
//               >
//                 <Contact
//                   className="inline-block mr-1 group-hover:text-emerald-400"
//                   size={20}
//                 />
//                 <span className="hidden sm:inline">Contact Us</span>
//               </Link>
//             )}

//             {user && (
//               <Link
//                 to={"/cart"}
//                 className="relative group text-gray-300 hover:text-emerald-400 transition duration-300 
// 							ease-in-out"
//               >
//                 <ShoppingCart
//                   className="inline-block mr-1 group-hover:text-emerald-400"
//                   size={20}
//                 />
//                 <span className="hidden sm:inline">Cart</span>
//                 {cart.length > 0 && (
//                   <span
//                     className="absolute -top-2 -left-2 bg-emerald-500 text-white rounded-full px-2 py-0.5 
// 									text-xs group-hover:bg-emerald-400 transition duration-300 ease-in-out"
//                   >
//                     {cart.length}
//                   </span>
//                 )}
//               </Link>
//             )}
//             {isAdmin && (
//               <Link
//                 className="bg-emerald-700 hover:bg-emerald-600 text-white px-3 py-1 rounded-md font-medium
// 								 transition duration-300 ease-in-out flex items-center"
//                 to={"/secret-dashboard"}
//               >
//                 <Lock className="inline-block mr-1" size={18} />
//                 <span className="hidden sm:inline">Dashboard</span>
//               </Link>
//             )}

//             {user ? (
//               <button
//                 className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 
// 						rounded-md flex items-center transition duration-300 ease-in-out"
//                 onClick={() => setisModalOpen(true)}
//               >
//                 <LogOut size={18} />
//                 <span className="hidden sm:inline ml-2">Log Out</span>
//               </button>
//             ) : (
//               <>
//                 <Link
//                   to={"/signup"}
//                   className="bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 
// 									rounded-md flex items-center transition duration-300 ease-in-out"
//                 >
//                   <UserPlus className="mr-2" size={18} />
//                   Sign Up
//                 </Link>
//                 <Link
//                   to={"/login"}
//                   className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 
// 									rounded-md flex items-center transition duration-300 ease-in-out"
//                 >
//                   <LogIn className="mr-2" size={18} />
//                   Login
//                 </Link>
//               </>
//             )}
//           </nav>
//           <Modal
//             // title={<div style={{ textAlign: "center" }}>Are You Sure?</div>}
//             open={isModalOpen}
//             onCancel={handleCancel}
//             centered
//             closeIcon={true}
//             footer={[
//               <div
//                 key="footer"
//                 style={{
//                   display: "flex",
//                   justifyContent: "center",
//                   gap: "10px",
//                 }}
//               >
//                 <Button
//                   type="primary"
//                   htmlType="submit"
//                   onClick={() => {
//                     logout();
//                     handleCancel();
//                   }}
//                 >
//                   Yes
//                 </Button>
//                 <Button type="link" onClick={handleCancel}>
//                   Cancel
//                 </Button>
//               </div>,
//             ]}
//             style={{
//               textAlign: "center", // Aligns content within the modal
//             }}
//           >
//             <div style={{ textAlign: "center" }}>
//               Are you sure you want to logout?
//             </div>
//           </Modal>
//         </div>
//       </div>
//     </header>
//   );
// };
// export default Navbar;
