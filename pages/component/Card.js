import Image from 'next/image'
import React from 'react'

export default function Card() {
    return (
        <div>
            <div className='main ms-5 my-2'>
                <h6 className='mb-2 fs-6'>Promo Codes for More Savings</h6>
            </div>

            <div className='container'>
                <div className='row'>
                    <div className='col-sm-4'>
                        <div class="card mb-3" style={{ maxWidth: "540px", maxHeight: "200px" }}>
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src="../img/card/card_1.png" class="img-fluid rounded-start" alt="..." />
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">#SPA2022<i class="fas fa-clone ms-5"></i></h5>
                                        <p class="card-text">Use it for extra discount on Spa</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-4'>
                        <div class="card mb-3" style={{ maxWidth: "540px", maxHeight: "200px" }}>
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src="../img/card/card_2.png" class="img-fluid rounded-start" alt="..." />
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">#HAIR2022<i class="fas fa-clone ms-5"></i></h5>
                                        <p class="card-text">Use it for extra discount on Hair</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-4'>
                        <div class="card mb-3" style={{ maxWidth: "540px", maxHeight: "200px" }}>
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src="../img/card/card_3.png" class="img-fluid rounded-start" alt="..." />
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">#SHOP2022<i class="fas fa-clone ms-5"></i></h5>
                                        <p class="card-text">Use it for extra discount on Shop</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}