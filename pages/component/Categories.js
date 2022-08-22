import Image from 'next/image'
import React from 'react'

export default function Categories() {
    return (
        <div className="container-fluid main px-5">
            <section className="category" id="promo-code">
                <div className="accordion pb-3" id="accordionExample">
                    <div className="accordion-item">
                        <div className="cat-box">
                            <div className="container p-4">
                                <p>categories</p>
                                <div className="accordion-header pb-3" id="salon-hair">
                                    <button className="acc-btn" type="button" data-bs-toggle="collapse" data-bs-target="#salon-hair-con"
                                        aria-expanded="true" aria-controls="salon-hair-con">
                                        Salon/Hair Care
                                        <i class="fas fa-caret-right"></i>
                                    </button>
                                </div>
                                {/* end */}

                                <div className="accordion-header pb-3" id="food-drinks">
                                    <button className="acc-btn" type="button" data-bs-toggle="collapse" data-bs-target="#food-drinks-con"
                                        aria-expanded="true" aria-controls="food-drinks-con">
                                        Food & Drinks
                                        <i class="fas fa-caret-right"></i>
                                    </button>
                                </div>
                                {/* end */}

                                <div className="accordion-header pb-3" id="spa-massage">
                                    <button className="acc-btn" type="button" data-bs-toggle="collapse" data-bs-target="#spa-massage-con"
                                        aria-expanded="true" aria-controls="spa-massage-con">
                                        Spa & Massage
                                        <i class="fas fa-caret-right"></i>
                                    </button>
                                </div>
                                {/* end */}

                                <div className="accordion-header pb-3" id="health">
                                    <button className="acc-btn" type="button" data-bs-toggle="collapse" data-bs-target="#health-con"
                                        aria-expanded="true" aria-controls="health-con">
                                        Health & Fitness
                                        <i class="fas fa-caret-right"></i>
                                    </button>
                                </div>
                                {/* end */}

                                <div className="accordion-header pb-3" id="tattoos">
                                    <button className="acc-btn" type="button" data-bs-toggle="collapse" data-bs-target="#tattoos-con"
                                        aria-expanded="true" aria-controls="tattoos-con">
                                        Tattoos
                                        <i class="fas fa-caret-right"></i>
                                    </button>
                                </div>
                                {/* end */}

                                <div className="accordion-header pb-3" id="electronics">
                                    <button className="acc-btn" type="button" data-bs-toggle="collapse" data-bs-target="#electronics-con"
                                        aria-expanded="true" aria-controls="electronics-con">
                                        Electronics
                                        <i class="fas fa-caret-right"></i>
                                    </button>
                                </div>
                                {/* end */}

                                <div className="accordion-header pb-3" id="fashion">
                                    <button className="acc-btn" type="button" data-bs-toggle="collapse" data-bs-target="#fashion-con"
                                        aria-expanded="true" aria-controls="fashion-con">
                                        Fashion
                                        <i class="fas fa-caret-right"></i>
                                    </button>
                                </div>
                                {/* end */}
                                <div className="more-c">
                                    <div className="accordion-header m" id="more">
                                        <button className="acc-btn more" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                                            aria-expanded="true" aria-controls="collapseOne">
                                            More
                                        </button>
                                    </div>
                                    {/* end */}
                                </div>
                            </div>
                        </div>

                        <div className="cat-content">
                            <div id="salon-hair-con" className="accordion-collapse collapse show" aria-labelledby="salon-hair"
                                data-bs-parent="#accordionExample">
                                <div className="accordion-body pe-0 ps-5">
                                    <div className="compo">
                                        <div className="cat-card">
                                            <h6>Main hair saloon</h6>
                                            <p>upto 30% discount on salon offers</p>
                                        </div>
                                        {/* end */}
                                        <div className="cat-card">
                                            <h6>Main hair saloon</h6>
                                            <p>upto 30% discount on salon offers</p>
                                        </div>
                                        {/* end */}
                                        <div className="cat-card">
                                            <h6>Main hair saloon</h6>
                                            <p>upto 30% discount on salon offers</p>
                                        </div>
                                        {/* end */}
                                        <div className="cat-card">
                                            <h6>Main hair saloon</h6>
                                            <p>upto 30% discount on salon offers</p>
                                        </div>
                                        {/* end */}
                                        {/* row-2 */}
                                        <div className="cat-card">
                                            <h6>Main hair saloon</h6>
                                            <p>upto 30% discount on salon offers</p>
                                        </div>
                                        {/* end */}
                                        <div className="cat-card">
                                            <h6>Main hair saloon</h6>
                                            <p>upto 30% discount on salon offers</p>
                                        </div>
                                        {/* end */}
                                        <div className="cat-card">
                                            <h6>Main hair saloon</h6>
                                            <p>upto 30% discount on salon offers</p>
                                        </div>
                                        {/* end */}
                                        <div className="cat-card">
                                            <h6>Main hair saloon</h6>
                                            <p>upto 30% discount on salon offers</p>
                                        </div>
                                        {/* end */}
                                        {/* row-3 */}
                                        <div className="cat-card">
                                            <h6>Main hair saloon</h6>
                                            <p>upto 30% discount on salon offers</p>
                                        </div>
                                        {/* end */}
                                        <div className="cat-card">
                                            <h6>Main hair saloon</h6>
                                            <p>upto 30% discount on salon offers</p>
                                        </div>
                                        {/* end */}
                                        <div className="cat-card">
                                            <h6>Main hair saloon</h6>
                                            <p>upto 30% discount on salon offers</p>
                                        </div>
                                        {/* end */}
                                        <div className="cat-card">
                                            <h6>Main hair saloon</h6>
                                            <p>upto 30% discount on salon offers</p>
                                        </div>
                                        {/* end */}
                                        {/* row-4 */}
                                        <div className="cat-card">
                                            <h6>Main hair saloon</h6>
                                            <p>upto 30% discount on salon offers</p>
                                        </div>
                                        {/* end */}
                                        <div className="cat-card">
                                            <h6>Main hair saloon</h6>
                                            <p>upto 30% discount on salon offers</p>
                                        </div>
                                        {/* end */}
                                        <div className="cat-card">
                                            <h6>Main hair saloon</h6>
                                            <p>upto 30% discount on salon offers</p>
                                        </div>
                                        {/* end */}
                                        <div className="cat-card">
                                            <h6>Main hair saloon</h6>
                                            <p>upto 30% discount on salon offers</p>
                                        </div>
                                        {/* end */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* food-drinks */}
                        <div className="cat-content">
                            <div id="food-drinks-con" className="accordion-collapse collapse" aria-labelledby="food-drinks"
                                data-bs-parent="#accordionExample">
                                <div className="accordion-body pe-0 ps-5">
                                    <div className="compo">
                                        <div className="cat-card">
                                            <h6>Food Drinks</h6>
                                            <p>upto 10% discount on food offers</p>
                                        </div>
                                        {/* end */}
                                        <div className="cat-card">
                                            <h6>Food Drinks</h6>
                                            <p>upto 10% discount on food offers</p>
                                        </div>
                                        {/* end */}
                                        <div className="cat-card">
                                            <h6>Food Drinks</h6>
                                            <p>upto 10% discount on food offers</p>
                                        </div>
                                        {/* end */}
                                        <div className="cat-card">
                                            <h6>Food Drinks</h6>
                                            <p>upto 10% discount on food offers</p>
                                        </div>
                                        {/* end */}
                                        {/* row-2 */}
                                        <div className="cat-card">
                                            <h6>Food Drinks</h6>
                                            <p>upto 10% discount on food offers</p>
                                        </div>
                                        {/* end */}
                                        <div className="cat-card">
                                            <h6>Food Drinks</h6>
                                            <p>upto 10% discount on food offers</p>
                                        </div>
                                        {/* end */}
                                        <div className="cat-card">
                                            <h6>Food Drinks</h6>
                                            <p>upto 10% discount on food offers</p>
                                        </div>
                                        {/* end */}
                                        <div className="cat-card">
                                            <h6>Food Drinks</h6>
                                            <p>upto 10% discount on food offers</p>
                                        </div>
                                        {/* end */}
                                        {/* row-3 */}
                                        <div className="cat-card">
                                            <h6>Food Drinks</h6>
                                            <p>upto 10% discount on food offers</p>
                                        </div>
                                        {/* end */}
                                        <div className="cat-card">
                                            <h6>Food Drinks</h6>
                                            <p>upto 10% discount on food offers</p>
                                        </div>
                                        {/* end */}
                                        <div className="cat-card">
                                            <h6>Food Drinks</h6>
                                            <p>upto 10% discount on food offers</p>
                                        </div>
                                        {/* end */}
                                        <div className="cat-card">
                                            <h6>Food Drinks</h6>
                                            <p>upto 10% discount on food offers</p>
                                        </div>
                                        {/* end */}
                                        {/* row-4 */}
                                        <div className="cat-card">
                                            <h6>Food Drinks</h6>
                                            <p>upto 10% discount on food offers</p>
                                        </div>
                                        {/* end */}
                                        <div className="cat-card">
                                            <h6>Food Drinks</h6>
                                            <p>upto 10% discount on food offers</p>
                                        </div>
                                        {/* end */}
                                        <div className="cat-card">
                                            <h6>Food Drinks</h6>
                                            <p>upto 10% discount on food offers</p>
                                        </div>
                                        {/* end */}
                                        <div className="cat-card">
                                            <h6>Food Drinks</h6>
                                            <p>upto 10% discount on food offers</p>
                                        </div>
                                        {/* end */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* spa-massage */}
                        <div className="cat-content">
                            <div id="spa-massage-con" className="accordion-collapse collapse" aria-labelledby="spa-massage"
                                data-bs-parent="#accordionExample">
                                <div className="accordion-body pe-0 ps-5">
                                    <div className="compo">
                                        <div className="cat-card">
                                            <h6>Spa / Massage</h6>
                                            <p>upto 10% discount on spa offers</p>
                                        </div>
                                        {/* end */}
                                        <div className="cat-card">
                                            <h6>Spa / Massage</h6>
                                            <p>upto 10% discount on spa offers</p>
                                        </div>
                                        {/* end */}
                                        <div className="cat-card">
                                            <h6>Spa / Massage</h6>
                                            <p>upto 10% discount on spa offers</p>
                                        </div>
                                        {/* end */}
                                        <div className="cat-card">
                                            <h6>Spa / Massage</h6>
                                            <p>upto 10% discount on spa offers</p>
                                        </div>
                                        {/* end */}
                                        {/* row-2 */}
                                        <div className="cat-card">
                                            <h6>Spa / Massage</h6>
                                            <p>upto 10% discount on spa offers</p>
                                        </div>
                                        {/* end */}
                                        <div className="cat-card">
                                            <h6>Spa / Massage</h6>
                                            <p>upto 10% discount on spa offers</p>
                                        </div>
                                        {/* end */}
                                        <div className="cat-card">
                                            <h6>Spa / Massage</h6>
                                            <p>upto 10% discount on spa offers</p>
                                        </div>
                                        {/* end */}
                                        <div className="cat-card">
                                            <h6>Spa / Massage</h6>
                                            <p>upto 10% discount on spa offers</p>
                                        </div>
                                        {/* end */}
                                        {/* row-3 */}
                                        <div className="cat-card">
                                            <h6>Spa / Massage</h6>
                                            <p>upto 10% discount on spa offers</p>
                                        </div>
                                        {/* end */}
                                        <div className="cat-card">
                                            <h6>Spa / Massage</h6>
                                            <p>upto 10% discount on spa offers</p>
                                        </div>
                                        {/* end */}
                                        <div className="cat-card">
                                            <h6>Spa / Massage</h6>
                                            <p>upto 10% discount on spa offers</p>
                                        </div>
                                        {/* end */}
                                        <div className="cat-card">
                                            <h6>Spa / Massage</h6>
                                            <p>upto 10% discount on spa offers</p>
                                        </div>
                                        {/* end */}
                                        {/* row-4 */}
                                        <div className="cat-card">
                                            <h6>Spa / Massage</h6>
                                            <p>upto 10% discount on spa offers</p>
                                        </div>
                                        {/* end */}
                                        <div className="cat-card">
                                            <h6>Spa / Massage</h6>
                                            <p>upto 10% discount on spa offers</p>
                                        </div>
                                        {/* end */}
                                        <div className="cat-card">
                                            <h6>Spa / Massage</h6>
                                            <p>upto 10% discount on spa offers</p>
                                        </div>
                                        {/* end */}
                                        <div className="cat-card">
                                            <h6>Spa / Massage</h6>
                                            <p>upto 10% discount on spa offers</p>
                                        </div>
                                        {/* end */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* health-fitness */}
                        <div className="cat-content">
                            <div id="health-con" className="accordion-collapse collapse" aria-labelledby="health"
                                data-bs-parent="#accordionExample">
                                <div className="accordion-body pe-0 ps-5">
                                    <div className="compo">
                                        <div className="cat-card">
                                            <h6>Health & Fitness</h6>
                                            <p>upto 10% discount on health offers</p>
                                        </div>
                                        {/* end */}
                                        <div className="cat-card">
                                            <h6>Health & Fitness</h6>
                                            <p>upto 10% discount on health offers</p>
                                        </div>
                                        {/* end */}
                                        <div className="cat-card">
                                            <h6>Health & Fitness</h6>
                                            <p>upto 10% discount on health offers</p>
                                        </div>
                                        {/* end */}
                                        <div className="cat-card">
                                            <h6>Health & Fitness</h6>
                                            <p>upto 10% discount on health offers</p>
                                        </div>
                                        {/* end */}
                                        {/* row-2 */}
                                        <div className="cat-card">
                                            <h6>Health & Fitness</h6>
                                            <p>upto 10% discount on health offers</p>
                                        </div>
                                        {/* end */}
                                        <div className="cat-card">
                                            <h6>Health & Fitness</h6>
                                            <p>upto 10% discount on health offers</p>
                                        </div>
                                        {/* end */}
                                        <div className="cat-card">
                                            <h6>Health & Fitness</h6>
                                            <p>upto 10% discount on health offers</p>
                                        </div>
                                        {/* end */}
                                        <div className="cat-card">
                                            <h6>Health & Fitness</h6>
                                            <p>upto 10% discount on health offers</p>
                                        </div>
                                        {/* end */}
                                        {/* row-3 */}
                                        <div className="cat-card">
                                            <h6>Health & Fitness</h6>
                                            <p>upto 10% discount on health offers</p>
                                        </div>
                                        {/* end */}
                                        <div className="cat-card">
                                            <h6>Health & Fitness</h6>
                                            <p>upto 10% discount on health offers</p>
                                        </div>
                                        {/* end */}
                                        <div className="cat-card">
                                            <h6>Health & Fitness</h6>
                                            <p>upto 10% discount on health offers</p>
                                        </div>
                                        {/* end */}
                                        <div className="cat-card">
                                            <h6>Health & Fitness</h6>
                                            <p>upto 10% discount on health offers</p>
                                        </div>
                                        {/* end */}
                                        {/* row-4 */}
                                        <div className="cat-card">
                                            <h6>Health & Fitness</h6>
                                            <p>upto 10% discount on health offers</p>
                                        </div>
                                        {/* end */}
                                        <div className="cat-card">
                                            <h6>Health & Fitness</h6>
                                            <p>upto 10% discount on health offers</p>
                                        </div>
                                        {/* end */}
                                        <div className="cat-card">
                                            <h6>Health & Fitness</h6>
                                            <p>upto 10% discount on health offers</p>
                                        </div>
                                        {/* end */}
                                        <div className="cat-card">
                                            <h6>Health & Fitness</h6>
                                            <p>upto 10% discount on health offers</p>
                                        </div>
                                        {/* end */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* tattoos */}
                        <div className="cat-content">
                            <div id="tattoos-con" className="accordion-collapse collapse" aria-labelledby="tattoos"
                                data-bs-parent="#accordionExample">
                                <div className="accordion-body pe-0 ps-5">
                                    <div className="compo">
                                        <div className="cat-card">
                                            <h6>Tattoos</h6>
                                            <p>upto 10% discount on tattoos offers</p>
                                        </div>
                                        {/* end */}
                                        <div className="cat-card">
                                            <h6>Tattoos</h6>
                                            <p>upto 10% discount on tattoos offers</p>
                                        </div>
                                        {/* end */}
                                        <div className="cat-card">
                                            <h6>Tattoos</h6>
                                            <p>upto 10% discount on tattoos offers</p>
                                        </div>
                                        {/* end */}
                                        <div className="cat-card">
                                            <h6>Tattoos</h6>
                                            <p>upto 10% discount on tattoos offers</p>
                                        </div>
                                        {/* end */}
                                        {/* row-2 */}
                                        <div className="cat-card">
                                            <h6>Tattoos</h6>
                                            <p>upto 10% discount on tattoos offers</p>
                                        </div>
                                        {/* end */}
                                        <div className="cat-card">
                                            <h6>Tattoos</h6>
                                            <p>upto 10% discount on tattoos offers</p>
                                        </div>
                                        {/* end */}
                                        <div className="cat-card">
                                            <h6>Tattoos</h6>
                                            <p>upto 10% discount on tattoos offers</p>
                                        </div>
                                        {/* end */}
                                        <div className="cat-card">
                                            <h6>Tattoos</h6>
                                            <p>upto 10% discount on tattoos offers</p>
                                        </div>
                                        {/* end */}
                                        {/* row-3 */}
                                        <div className="cat-card">
                                            <h6>Tattoos</h6>
                                            <p>upto 10% discount on tattoos offers</p>
                                        </div>
                                        {/* end */}
                                        <div className="cat-card">
                                            <h6>Tattoos</h6>
                                            <p>upto 10% discount on tattoos offers</p>
                                        </div>
                                        {/* end */}
                                        <div className="cat-card">
                                            <h6>Tattoos</h6>
                                            <p>upto 10% discount on tattoos offers</p>
                                        </div>
                                        {/* end */}
                                        <div className="cat-card">
                                            <h6>Tattoos</h6>
                                            <p>upto 10% discount on tattoos offers</p>
                                        </div>
                                        {/* end */}
                                        {/* row-4 */}
                                        <div className="cat-card">
                                            <h6>Tattoos</h6>
                                            <p>upto 10% discount on tattoos offers</p>
                                        </div>
                                        {/* end */}
                                        <div className="cat-card">
                                            <h6>Tattoos</h6>
                                            <p>upto 10% discount on tattoos offers</p>
                                        </div>
                                        {/* end */}
                                        <div className="cat-card">
                                            <h6>Tattoos</h6>
                                            <p>upto 10% discount on tattoos offers</p>
                                        </div>
                                        {/* end */}
                                        <div className="cat-card">
                                            <h6>Tattoos</h6>
                                            <p>upto 10% discount on tattoos offers</p>
                                        </div>
                                        {/* end */}
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* electronics */}
                        <div className="cat-content">
                            <div id="electronics-con" className="accordion-collapse collapse" aria-labelledby="electronics"
                                data-bs-parent="#accordionExample">
                                <div className="accordion-body pe-0 ps-5">
                                    <div className="compo">
                                        <div className="cat-card">
                                            <h6>Electronics</h6>
                                            <p>upto 10% discount on electronics offers</p>
                                        </div>
                                        {/* end */}
                                        <div className="cat-card">
                                            <h6>Electronics</h6>
                                            <p>upto 10% discount on electronics offers</p>
                                        </div>
                                        {/* end */}
                                        <div className="cat-card">
                                            <h6>Electronics</h6>
                                            <p>upto 10% discount on electronics offers</p>
                                        </div>
                                        {/* end */}
                                        <div className="cat-card">
                                            <h6>Electronics</h6>
                                            <p>upto 10% discount on electronics offers</p>
                                        </div>
                                        {/* end */}
                                        {/* row-2 */}
                                        <div className="cat-card">
                                            <h6>Electronics</h6>
                                            <p>upto 10% discount on electronics offers</p>
                                        </div>
                                        {/* end */}
                                        <div className="cat-card">
                                            <h6>Electronics</h6>
                                            <p>upto 10% discount on electronics offers</p>
                                        </div>
                                        {/* end */}
                                        <div className="cat-card">
                                            <h6>Electronics</h6>
                                            <p>upto 10% discount on electronics offers</p>
                                        </div>
                                        {/* end */}
                                        <div className="cat-card">
                                            <h6>Electronics</h6>
                                            <p>upto 10% discount on electronics offers</p>
                                        </div>
                                        {/* end */}
                                        {/* row-3 */}
                                        <div className="cat-card">
                                            <h6>Electronics</h6>
                                            <p>upto 10% discount on electronics offers</p>
                                        </div>
                                        {/* end */}
                                        <div className="cat-card">
                                            <h6>Electronics</h6>
                                            <p>upto 10% discount on electronics offers</p>
                                        </div>
                                        {/* end */}
                                        <div className="cat-card">
                                            <h6>Electronics</h6>
                                            <p>upto 10% discount on electronics offers</p>
                                        </div>
                                        {/* end */}
                                        <div className="cat-card">
                                            <h6>Electronics</h6>
                                            <p>upto 10% discount on electronics offers</p>
                                        </div>
                                        {/* end */}
                                        {/* row-4 */}
                                        <div className="cat-card">
                                            <h6>Electronics</h6>
                                            <p>upto 10% discount on electronics offers</p>
                                        </div>
                                        {/* end */}
                                        <div className="cat-card">
                                            <h6>Electronics</h6>
                                            <p>upto 10% discount on electronics offers</p>
                                        </div>
                                        {/* end */}
                                        <div className="cat-card">
                                            <h6>Electronics</h6>
                                            <p>upto 10% discount on electronics offers</p>
                                        </div>
                                        {/* end */}
                                        <div className="cat-card">
                                            <h6>Electronics</h6>
                                            <p>upto 10% discount on electronics offers</p>
                                        </div>
                                        {/* end */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* fashion */}
                        <div className="cat-content">
                            <div id="fashion-con" className="accordion-collapse collapse" aria-labelledby="fashion"
                                data-bs-parent="#accordionExample">
                                <div className="accordion-body pe-0 ps-5">
                                    <div className="compo">
                                        <div className="cat-card">
                                            <h6>Fashion</h6>
                                            <p>upto 10% discount on fashion offers</p>
                                        </div>
                                        {/* end */}
                                        <div className="cat-card">
                                            <h6>Fashion</h6>
                                            <p>upto 10% discount on fashion offers</p>
                                        </div>
                                        {/* end */}
                                        <div className="cat-card">
                                            <h6>Fashion</h6>
                                            <p>upto 10% discount on fashion offers</p>
                                        </div>
                                        {/* end */}
                                        <div className="cat-card">
                                            <h6>Fashion</h6>
                                            <p>upto 10% discount on fashion offers</p>
                                        </div>
                                        {/* end */}
                                        {/* row-2 */}
                                        <div className="cat-card">
                                            <h6>Fashion</h6>
                                            <p>upto 10% discount on fashion offers</p>
                                        </div>
                                        {/* end */}
                                        <div className="cat-card">
                                            <h6>Fashion</h6>
                                            <p>upto 10% discount on fashion offers</p>
                                        </div>
                                        {/* end */}
                                        <div className="cat-card">
                                            <h6>Fashion</h6>
                                            <p>upto 10% discount on fashion offers</p>
                                        </div>
                                        {/* end */}
                                        <div className="cat-card">
                                            <h6>Fashion</h6>
                                            <p>upto 10% discount on fashion offers</p>
                                        </div>
                                        {/* end */}
                                        {/* row-3 */}
                                        <div className="cat-card">
                                            <h6>Fashion</h6>
                                            <p>upto 10% discount on fashion offers</p>
                                        </div>
                                        {/* end */}
                                        <div className="cat-card">
                                            <h6>Fashion</h6>
                                            <p>upto 10% discount on fashion offers</p>
                                        </div>
                                        {/* end */}
                                        <div className="cat-card">
                                            <h6>Fashion</h6>
                                            <p>upto 10% discount on fashion offers</p>
                                        </div>
                                        {/* end */}
                                        <div className="cat-card">
                                            <h6>Fashion</h6>
                                            <p>upto 10% discount on fashion offers</p>
                                        </div>
                                        {/* end */}
                                        {/* row-4 */}
                                        <div className="cat-card">
                                            <h6>Fashion</h6>
                                            <p>upto 10% discount on fashion offers</p>
                                        </div>
                                        {/* end */}
                                        <div className="cat-card">
                                            <h6>Fashion</h6>
                                            <p>upto 10% discount on fashion offers</p>
                                        </div>
                                        {/* end */}
                                        <div className="cat-card">
                                            <h6>Fashion</h6>
                                            <p>upto 10% discount on fashion offers</p>
                                        </div>
                                        {/* end */}
                                        <div className="cat-card">
                                            <h6>Fashion</h6>
                                            <p>upto 10% discount on fashion offers</p>
                                        </div>
                                        {/* end */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
             <div>
        </div>
    </section>
            <hr />

        </div>
    )
}