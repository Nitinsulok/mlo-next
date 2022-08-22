import Image from 'next/image'
import React from 'react'

export default function Card() {
    return (
        <div>
            <div className='main ms-5 my-2'>
                <h6 className='mb-2 fs-6'>Promo Codes for More Savings</h6>
            </div>

            <div className='container-fluid px-5'>
                <div className='row'>
                    <div className='col-sm-4'>
                        <div class="card lf-card-bg mb-3">
                            <div class="row g-0">
                                <div class="col-md-7 p-3">
                                    <img src="../img/card/card_1.png" class="img-fluid rounded-start" alt="..." />
                                </div>
                                <div class="col-md-5 p-1">
                                    <div class="card-body">
                                        <h6 class="card-title">#SPA2022<i class="fas fa-clone ms-2"></i></h6>
                                        <p class="card-text lf-card-footer">Use it for extra discount Spa</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-4'>
                        <div class="card lf-card-bg mb-3">
                            <div class="row g-0">
                                <div class="col-md-7 p-3">
                                    <img src="../img/card/card_2.png" class="img-fluid rounded-start" alt="..." />
                                </div>
                                <div class="col-md-5 p-1">
                                    <div class="card-body">
                                        <h6 class="card-title">#HAIR2022<i class="fas fa-clone ms-2"></i></h6>
                                        <p class="card-text lf-card-footer">Use it for extra discount Hair</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-4'>
                        <div class="card lf-card-bg mb-3">
                            <div class="row g-0">
                                <div class="col-md-7 p-3">
                                    <img src="../img/card/card_3.png" class="img-fluid rounded-start" alt="..." />
                                </div>
                                <div class="col-md-5 p-1">
                                    <div class="card-body">
                                        <h6 class="card-title">#SHOP222<i class="fas fa-clone ms-2"></i></h6>
                                        <p class="card-text lf-card-footer">Use it for extra discount Shop</p>
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