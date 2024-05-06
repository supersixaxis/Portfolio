import React from 'react'
import '../style/navbar.css'
export default function Navbar() {
  return (
    <div class="bg-color-primaire  flex justify-center">
      <nav class="flex items-center gap-10 py-6 text-center text-2xl ">
        <button className="hover:text-blue-500">Home</button>
        <button className="hover:text-blue-500">Projets</button>
        <button className="hover:text-blue-500">About</button>
        <button className="hover:text-blue-500">Contact</button>
      </nav>
    </div>
  );
}
