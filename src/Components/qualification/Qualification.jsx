import React from 'react';
import "./qualification.css";

const Qualification = () => {
  return (

    <section className='qualification section' id="qualification">
        <h2 className='section__title>'>Qualification</h2>
        <span className="section__subtitle">My Personal Journey</span>
            <div className="qualification__data">
                <div className='qualification__info grid'>

                    <div className="qualification__box">
                    <i class='bx bxs-graduation qualification__icon' ></i>
                        <h3 className='qualification__title'>UnderGraduate</h3>
                        <h6 className="qualification__description">Vellore Institute of Technology</h6>
                        <h6 className='qualification__subtitle'><i class='bx bx-calendar qualification__icon' ></i>2020 - Present</h6>
                    </div>


    <div className="qualification__box">
    <i class='bx bxs-school qualification__icon' ></i>
        <h3 className='qualification__title'>12th/Intermediate</h3>
        <h6 className="qualification__description">S.M. Inter College</h6>
        <h6 className='qualification__subtitle'><i class='bx bx-calendar qualification__icon' ></i>2017 - 2019</h6>
    </div>


</div>
</div>
</section>
  )
}

export default Qualification;