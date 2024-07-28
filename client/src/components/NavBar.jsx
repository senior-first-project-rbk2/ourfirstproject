import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { jwtDecode } from "jwt-decode";
function NavBar() {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem("user");
    if (storedToken) {
      try {
        const decodedToken = jwtDecode(storedToken);
        setUser(decodedToken);
      } catch (error) {
        console.error("Error decoding token:", error);
      }
    }
  }, []);
  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  return (
    <div className="navbar__container">
      <img
        className="image__logo"
        src="./src/assets/image.webp"
        alt="image"
        onClick={() => {
          navigate("/");
        }}
      />

      <div className="search__container">
        <input placeholder="search" />
        <div className="option">
          <FontAwesomeIcon className="search__icon" icon={faSearch} />
        </div>
      </div>
      <div className="option">
        {user && user.role === "admin" && (
            <button
              className="admin__btn"
              onClick={() => {
                navigate("/BackOffice");
              }}
            >
              Admin Page
            </button>
          )}
        {user ? (
          <button className="sign__in__msg" onClick={logout}>
            Logout
          </button>
        ) : (
          <button
            className="sign__in__msg"
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </button>
        )}
        <div className="cart">
          <FontAwesomeIcon
            className="shopping__cart__icon"
            icon={faShoppingCart}
            onClick={() => {
              navigate("/cart");
            }}
          />
          <span className="add__item__cart">0</span>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
