import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartPage from "../Pages/Cart/CartPage";
import FeedPage from "../Pages/Feed/FeedPage";
import LoginPage from "../Pages/Login/LoginPage";
import ProfilePage from "../Pages/Profile/ProfilePage";
import RestaurantsPage from "../Pages/Restaurants/RestaurantsPage";
import SignUpPage from "../Pages/SignUp/SignUpPage";
import SignUpAdressPage from "../Pages/SignUpAdress/SignUpAdressPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="/signUp" element={<SignUpPage />} />
        <Route path="/signUp/adress" element={<SignUpAdressPage />} />
        <Route path="/feed" element={<FeedPage />} />
        <Route path="/feed/:restaurantId" element={<RestaurantsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
