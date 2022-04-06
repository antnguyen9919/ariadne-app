import Link from 'next/link'
import React from 'react'

// import style from '../styles/Nav.module.css'
const Nav = () => {
  return (
    <div>
       <nav className="navbar sticky navbar-expand-lg navbar-dark bg-black">
  <div className="container">
    <Link href="/"><a className="navbar-brand" >
        <img src = '/icon-192x192.png' alt="AriadneMaps" width="50" height="40"/>
    </a></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
        <li className="nav-item hover">
          <Link href="/"><a className="nav-link  " aria-current="page" >Overview</a></Link>
        </li>
        <li className="nav-item">
        <Link href="/dashboard"><a className="nav-link " aria-current="page" >Analytics</a></Link>
        </li>
        <li className="nav-item">
        <Link href="/billing"><a className="nav-link  " aria-current="page" >Billing</a></Link>
        </li>
        <li className="nav-item">
        <Link href="/account"><a className="nav-link  " aria-current="page" >Account</a></Link>
        </li>
        <li className="nav-item">
        <Link href="/settings"><a className="nav-link  " aria-current="page" >Settings</a></Link>
        </li>
        <li className="nav-item">
        <Link href="/helps"><a className="nav-link  " aria-current="page" >Help</a></Link>
        </li>
        <li className="nav-item">
        <Link href="/download"><a className="nav-link  " aria-current="page" >Download</a></Link>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
       </div>
  )
}

export default Nav