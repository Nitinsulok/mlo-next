import Head from 'next/head';
import Image from 'next/image';

export default function Login() {
  return (
    <div>
      <div className='lf-main'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-5 mt-5'>
              <form className='mt-5'>
                <h1 className='text-light mb-4 ms-5'>Sign up</h1>
                <div class="form-outline mb-4 px-5">
                  <input type="Username" id="form2Example11" class="form-control w-75"
                    placeholder="Username" />
                </div>
                <div class="form-outline mb-4 px-5">
                  <input type="email" id="form2Example11" class="form-control w-75"
                    placeholder="Email" />
                </div>

                <div class="form-outline mb-4 px-5">
                  <i class="fas fa-eye-slash"></i>
                  <input type="password" id="form2Example22" class="form-control w-75" placeholder="password" />
                </div>

                <hr className='w-75 ms-2 text-light' />
                <div className='ms-2'>
                  <img src="../img/image2.png" className='lf-icon p-1 ms-5'></img>
                  <img src="../img/image1.png" className='lf-icon p-2 ms-5'></img>
                  <img src="../img/image2.png" className='lf-icon p-1 ms-5'></img>
                  {/* <span className='lf-icon'>...</span> */}
                </div>
                <div className='mt-5 ms-2'>
                  <button className='btn border w-25 text-light ms-5'>Log in</button>
                  <button className='btn btn-primary w-25 ms-4'>Sign up</button>
                </div>
              </form>
            </div>
            <div className='col-sm-7 text-light text-center mt-5'>
              <div className='mt-5 pt-5'>
                <h1 className='my-5' style={{fontSize:"4rem"}}>THE LIFESTYLE</h1>
                <i class="fas fa-eye-slash"></i>
                <h4>Massa, rhoncus fames sapien condimentum praesent odio in morbi nam. Massa mi massa ipsum nibh mauris id in. Turpis pretium sollicitudin aliquet nisi a. Urna eu in nam pulvinar vitae vitae. Id bibendum nec congue in odio nulla id.</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
