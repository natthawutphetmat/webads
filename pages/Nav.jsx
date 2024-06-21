import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

export default function Nav() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem('user');
    setUser(user);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <>
      <div className="cut"></div>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link className="navbar-brand" href="/">
              <Image src="/img/logo.png" width={60} height={60} alt="logo"/>
            </Link>
        
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {/* Add your navbar items here */}
              </ul>
              <div className="users">
                {user ? (
                  <div className="d-flex align-items-center">
                    <span className="navbar-text me-3">Welcome, {user}</span>
                    <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
                  </div>
                ) : (
                  <Link className='btn btn-success mx-3' href="/login">login</Link>
                )}
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="cut"></div>
    </>
  );
}
