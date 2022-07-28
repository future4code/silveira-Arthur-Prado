export const goToLoginPage = (navigate) => {
  navigate("/");
};
export const goToCartPage = (navigate) => {
  navigate("/cart");
};
export const goToFeedPage = (navigate) => {
  navigate("/feed");
};
export const goToProfilePage = (navigate) => {
  navigate("/profile");
};
export const goToRestaurantsPage = (navigate, id) => {
  navigate(`/feed/${id}`);
};
export const goToSignUpPage = (navigate) => {
  navigate("/signUp");
};
export const goToSignUpAdressPage = (navigate) => {
  navigate("/signUp/adress");
};
export const goBack = (navigate) => {
  navigate(-1);
};
