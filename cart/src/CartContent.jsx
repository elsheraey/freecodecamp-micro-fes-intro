import React, { useState, useEffect } from "react";

import { login, jwt } from "./cart";
import Login from "./Login";

export default function CartContent() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    return jwt.subscribe((val) => setToken(val ?? ""));
  }, []);

  return <div>
    <Login/> 
    
    <div>
      JWT: {token}
    </div>
  </div>;
}