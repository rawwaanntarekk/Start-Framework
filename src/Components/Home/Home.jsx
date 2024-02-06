import React from 'react'
import style from './Home.module.css'
import me from './images/photo_2023-06-17_19-14-21.jpg'

export default function Home() {
  return (
    <div className=''>
       <div className="green-main flex-column">
        <div className="">
        <div className={`${style.image}`}>
          <img src={`${me}`} alt="" className={`${style.imge}`} />
        </div>
        <div className="content text-center">
          <h2 className='text-uppercase fs-1 fw-bold mt-4'> start framework</h2>
          <div className="b-border mb-3 ">
          <i class="fa-solid fa-star"></i>
          </div>
          <p className='text-capitalize'> graphic artist - web designer - illustrator</p>
        </div>
        </div>

      </div>
    </div>
  )
}
