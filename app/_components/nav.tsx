// components/Navbar.js
import { getSession } from "next-auth/react";
import Link from "next/link";
import { useState, useEffect } from "react";
import "../globals.css" // Import CSS module

const Navbar = () => {
  const [session, setSession] = useState({user:{name:"karthi"}});

  useEffect(() => {
    const fetchSession = async () => {
      const Session:any = await getSession();
      setSession(Session);
    };
    fetchSession();
  }, []);

  return (
    <nav className="navbar">
      <div className="container">
        <Link href="/" className="brand">
          Login
        </Link>
        <ul className="menu">
        <li><Link href="/signin/">Change Password</Link></li>
          {session ? (
            <li className="session">Hello, {session?.user?.name}</li>
          ) : (
            null
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
