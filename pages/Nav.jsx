import Link from 'next/link'
import Image from 'next/image'
import React, { useState, useEffect } from 'react';

export default function Nav() {

  useEffect(() => {
    const users = localStorage.getItem('user')
    
    if(users === 'admin') {
      
    }
  })

  return (
    <>


<div className="cut"></div>
<div className="container-fluid">
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" href="/">
      <img src="/img/logo.png" width={60} alt="logo"/>
    </Link>
  
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">

      
      </ul>
  

      <div className="users">




      </div>
   
     <form>

      <Link className='item btn btn-success mx-3' href="/login">login</Link>
     </form>
 


    </div>
  </div>
</nav>
</div>
<div className="cut"></div>
    </>
  )
}
