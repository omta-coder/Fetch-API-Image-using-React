import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='flex items-center justify-center gap-x-4 mt-10 mb-10'>
        <NavLink 
          style={(n) => ({
            textDecoration: n.isActive ? "underline" : "initial",
        })}
         className={(n)=>{
            return n.isActive ? 'text-red-500' : 'text-gray-500'
        }} to="/">Home</NavLink>
        <NavLink
          style={(n) => ({
            textDecoration: n.isActive ? "underline" : "initial",
        })}
         className={(n)=>{
            return n.isActive ? 'text-red-500' : 'text-gray-500'
        }} to="/create">Create</NavLink>
        <NavLink
          style={(n) => ({
            textDecoration: n.isActive ? "underline" : "initial",
        })}
        className={(n)=>{
            return n.isActive ? 'text-red-500' : 'text-gray-500'
        }} to="/show">Show</NavLink>
    </div>
  )
}

export default Nav