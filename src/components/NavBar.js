/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './Cart/CartWidget'

const NavBar = () => {


  return (
  <div className="navbar bg-base-100"><font></font>
    <div className="navbar-start"><font></font>
      <div className="dropdown"><font></font>
        <label tabIndex="0" className="btn btn-ghost btn-circle"><font></font>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg><font></font>
        </label><font></font>
        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"><font></font>
          <li><Link to={'/categoria/Jabones'}>Jabones</Link></li><font></font>
          <li><Link to={'/categoria/Velas'}>Velas</Link></li><font></font>
          <li><Link to={'/categoria/Difusor'}>Aromatizadores</Link></li><font></font>
          <li><Link to={'/categoria/Box'}>Box</Link></li><font></font>
        </ul><font></font>
      </div><font></font>
    </div><font></font>
    <div className="navbar-center"><font></font>
      <Link className="btn btn-ghost normal-case text-xl" to ='/'>G A R D E N I A</Link><font></font>
    </div><font></font>
    <div className="navbar-end"><font></font>
        <CartWidget/>
      <button className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg><font></font>
      </button><font></font>
    </div><font></font>
  </div>
  )
}

export default NavBar

