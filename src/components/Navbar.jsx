import React from 'react'
import '../style/navbar.css'
export default function Navbar() {
  return (
    <div class="navbarContainer flex justify-center">
      <nav class=" flex items-center gap-10 text-center py-6 text-2xl" >
        <button>Home</button>
        <button>Projets</button>
        <button>Contact</button>
      </nav>
    </div>
  );
}
