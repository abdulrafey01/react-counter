import React from 'react'

export default function Navbar({totalCounters}) {
  return (
    <div>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="#">
            Navbar {" "}
            <span className="badge badge-pill badge-secondary">
              {totalCounters}
            </span>
          </a>
        </nav>
    </div>
  )
}

