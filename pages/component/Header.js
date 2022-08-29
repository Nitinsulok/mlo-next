import Image from 'next/image'
import React from 'react'

export default function Header() {
    return (
        <div>
            <nav class="navbar navbar-light bg-light">
                <div class="container-fluid d-flex px-5">
                    <a class="navbar-brand" href="#">
                        <button className='btn btn-primary' href="/">MLO</button>
                    </a>
                    <div className="search-box d-flex">
                        <span className="input-group-append">
                            <button className="search-btn btn" type="button">
                                <i class="fas fa-search"></i>

                            </button>
                        </span>
                        <input className="py-2  search_input" type="search" placeholder="Search" id="example-search-input" />
                    </div>
                    <div className='d-flex'>
                        <ul className="nav">
                            <li className="nav-item">
                                <a className="nav-link text-dark" aria-current="page" href="#">About us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="#">Help</a>
                            </li>
                            <li className="nav-item p-2 me-2">
                                <a><img src="../img/Cart.png"></img></a>
                            </li>
                        </ul>
                        <button type="button" className="btn text-dark border bg-light" href="/signup">Sign up</button>
                        <button type="button" className="btn btn-primary ms-3">Log in</button>
                    </div>
                </div>
            </nav>
            <div className='main ms-5 my-3'>
                <h6 className='mb-2 fs-6'>Home  /</h6>
                <h4 className='fs-4'>Top deals</h4>
            </div>
        </div>
    )
}
