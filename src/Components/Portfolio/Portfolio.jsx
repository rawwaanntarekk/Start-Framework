import React from 'react'
import img1  from "./Images/poert1.png"
import img2  from "./Images/port2.png"
import img3  from "./Images/port3.png"
import style from "./Portfolio.module.css"

export default function Portfolio() {
  return (
    <div>
      <section>
        <div className={`light-main`}>
            <div className={` content text-center `}>
            <h2 className='text-uppercase fs-1 fw-bold mt-4'>portfolio component</h2>
            <div className={`bdarkBorder`}>
          <i class="fa-solid fa-star"></i>
          </div>
            </div>
        </div>

        <div className="container my-5">
         <div className="row gy-5">
         <div className={`col-sm-12 col-md-6 col-lg-4 ${style.imgContainer} `}>
            <img src={`${img1}`} alt="" className='w-100 rounded-2' />
            <div className={`${style.layer} d-flex justify-content-center align-items-center`}>
            <i class="fa-solid fa-plus display-1 text-white  "></i>
            </div>
         </div>
         <div className={`  col-sm-12 col-md-6 col-lg-4 ${style.imgContainer}`}>
            <img src={`${img2}`} alt="" className='w-100 rounded-2' />
              <div className={`${style.layer} d-flex justify-content-center align-items-center`}>
            <i class="fa-solid fa-plus display-1 text-white  "></i>
            </div>

         </div>
         <div className={`  col-sm-12 col-md-6 col-lg-4 ${style.imgContainer}`}>
            <img src={`${img3}`} alt="" className='w-100 rounded-2' />
              <div className={`${style.layer} d-flex justify-content-center align-items-center`}>
            <i class="fa-solid fa-plus display-1 text-white  "></i>
            </div>

         </div>
         <div className={` col-sm-12 col-md-6 col-lg-4 ${style.imgContainer}`}>
            <img src={`${img1}`} alt="" className='w-100 rounded-2' />
              <div className={`${style.layer} d-flex justify-content-center align-items-center`}>
            <i class="fa-solid fa-plus display-1 text-white  "></i>
            </div>

         </div>
         <div className={`  col-sm-12 col-md-6 col-lg-4 ${style.imgContainer}`}>
            <img src={`${img2}`} alt="" className='w-100 rounded-2' />
              <div className={`${style.layer} d-flex justify-content-center align-items-center`}>
            <i class="fa-solid fa-plus display-1 text-white  "></i>
            </div>

         </div>
         <div className={`  col-sm-12 col-md-6 col-lg-4 ${style.imgContainer}`}>
            <img src={`${img3}`} alt="" className='w-100 rounded-2' />
              <div className={`${style.layer} d-flex justify-content-center align-items-center`}>
            <i class="fa-solid fa-plus display-1 text-white  "></i>
            </div>

         </div>
        
         </div>
        </div>
      </section>
    </div>
  )
}
