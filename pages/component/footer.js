import Image from 'next/image'
import React from 'react'

export default function Footer() {
    return (
        <div>
            <div class="container-fluid mt-5 p-0">
                <footer>
                    <div class="container-fluid lf-footer-bg p-4">
                        <div class="row p-2">
                            <div class="col-lg-6 col-md-12 mb-4">
                                <h5 class="mb-3" style={{ letterSpacing: "2px"}}>MLO</h5>
                                <p style={{fontSize:"13px"}}>
                                    nearbuy helps you discover the best things to do, eat and buy – wherever you are! Make every day awesome with nearbuy. Dine at the finest restaurants, relax at the best spas, pamper yourself with exciting wellness and shopping offers or just explore your city intimately… you will always find a lot more to do with nearbuy. From tattoo parlors to music concerts, movie tickets to theme parks, everything you want is now within reach. Don't stop yet! Take it wherever you go with the nearbuy mobile app. Based on your location and preference, our smart search engine will suggest new things to explore every time you open the app. What's more, with offers on everything around you... you are sure to try something new every time.
                                </p>
                            </div>
                            <div class="col-lg-2 col-md-6 mb-4 mt-3 d-flex">
                                <div className='vertical'></div>
                                <ul class="list-unstyled mb-0 ms-4 p-3">
                                <h5 class="mb-3" style={{ letterSpacing: "2px" }}>Company</h5>
                                    <li class="mb-1">
                                        <a href="#!" className='text-decoration-none text-light'>Frequently Asked Questions</a>
                                    </li>
                                    <li class="mb-1">
                                        <a href="#!" className='text-decoration-none text-light'>Delivery</a>
                                    </li>
                                    <li class="mb-1">
                                        <a href="#!" className='text-decoration-none text-light'>Pricing</a>
                                    </li>
                                    <li>
                                        <a href="#!" className='text-decoration-none text-light'>Where we deliver?</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-lg-2 col-md-6 mb-4 mt-3 p-3">
                                <ul class="list-unstyled mb-0 ms-2">
                                <h5 class="mb-3" style={{ letterSpacing: "2px" }}>Help</h5>
                                    <li class="mb-1">
                                        <a href="#!" className='text-decoration-none text-light'>Frequently Asked Questions</a>
                                    </li>
                                    <li class="mb-1">
                                        <a href="#!" className='text-decoration-none text-light'>Delivery</a>
                                    </li>
                                    <li class="mb-1">
                                        <a href="#!" className='text-decoration-none text-light'>Pricing</a>
                                    </li>
                                    <li>
                                        <a href="#!" className='text-decoration-none text-light'>Where we deliver?</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-lg-2 col-md-6 mb-4 mt-3 p-3">
                                <h5 class="mb-3" style={{ letterSpacing: "2px" }}>Follow us</h5>
                                <ul class="list-unstyled mb-0">
                                    <li class="mb-1">
                                        <a href="#!" className='text-decoration-none text-light'>Frequently Asked Questions</a>
                                    </li>
                                    <li class="mb-1">
                                        <a href="#!" className='text-decoration-none text-light'>Delivery</a>
                                    </li>
                                    <li class="mb-1">
                                        <a href="#!" className='text-decoration-none text-light'>Pricing</a>
                                    </li>
                                    <li>
                                        <a href="#!" className='text-decoration-none text-light'>Where we deliver?</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>

            </div>
        </div>
    )
}