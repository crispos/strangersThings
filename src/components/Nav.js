import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        if (localStorage.getItem("token")) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, []);

  return (
    <div id="navigationBar">
        <div id="navigationLinks">
            <span>
                <Link to="/">Items For Sale</Link>
            </span>
            <div>
                { isLoggedIn ? 
                    (
                        <div>
                            <span>
                                <Link to="/posts/new">Add Item to Sell</Link>
                            </span>
                            <span>
                                <Link
                                    to="/"
                                    onClick={() => {
                                        localStorage.removeItem("token");
                                        localStorage.removeItem("username")
                                        window.location.reload(false)
                                    }}
                                >
                                Logout
                                </Link>
                            </span>
                        </div>
                    ) : 
                    (
                        <div>
                            <div>
                                <span>
                                <Link to="/login">Login</Link>
                                </span>
                                <span>
                                <Link to="/register">Create New Account</Link>
                                </span>
                            </div>
                        </div>
                    )
                }
            </div>
      </div>
    </div>
  ); 
}

export default Nav;