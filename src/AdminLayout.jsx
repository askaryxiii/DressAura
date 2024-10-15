import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/user/NotFound";
import AdminHeader from "./components/admin/AdminHeader";
import AdminSideBar from "./components/admin/AdminSideBar";
import ShowProduct from "./pages/admin/productSection/ShowProduct";
import EditProduct from "./pages/admin/productSection/EditProduct";
import AddProduct from "./pages/admin/productSection/AddProduct";
import ProductDashboard from "./pages/admin/productSection/ProductDashboard";
import Dashboard from "./pages/admin/Dashboard";
import UserDashboard from "./pages/admin/userSection/UserDashboard";
import ShowUser from "./pages/admin/userSection/ShowUser";
import EditUser from "./pages/admin/userSection/EditUser";
import AddUser from "./pages/admin/userSection/AddUser";

const AdminLayout = () => {
  return (
    <div className="bg-gray-50">
      <AdminHeader />
      <AdminSideBar />
      <div className="lg:ml-[16.7%]">
        <Routes>
          {/* user routes */}
          <Route path="/users" element={<UserDashboard />} />
          <Route path="/users/:userId" element={<ShowUser />} />
          <Route path="/users/edit/:userId" element={<EditUser />} />
          <Route path="/users/add" element={<AddUser />} />

          {/* products routes */}
          <Route path="/" element={<ProductDashboard />} />
          <Route path="/products" element={<ProductDashboard />} />
          <Route path={`/products/:productId`} element={<ShowProduct />} />
          <Route path={`/products/edit/:productId`} element={<EditProduct />} />
          <Route path={`/products/add`} element={<AddProduct />} />
          {/* not found route */}
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminLayout;
