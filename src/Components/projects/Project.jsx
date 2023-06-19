import React from 'react';
import "./project.css";
import "./projectsContent.css";

const Project = () => {
  return (
    <section className="project section" id="projects">
        <h2 className='section__title>'>Projects</h2>
        <span className="section__subtitle">Projects Links</span>

        <div className="project__container container grid">

            <div className='project__content' id="project1">
                <h3 className="project__title">Responsive Word Counter</h3>

                <div className='project__box'>
                    <div className="project__group">

                        <div className='project__data'>
                            <div>
                        
                            <h3 className="project__level"><a href="https://akki765.github.io/word-counter/">Project Demo<i class='bx bx-right-arrow-alt' ></i> </a></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className='project__content' id="project2">
                <h3 className="project__title">Calculator App</h3>

                <div className='project__box'>
                    <div className="project__group">

                        <div className='project__data'>
                            <div>
                        
                            <h3 className="project__level"><a href="https://akki765.github.io/Calculator-React-App/">Project Demo<i class='bx bx-right-arrow-alt' ></i> </a></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className='project__content' id="project3">
                <h3 className="project__title">Cards</h3>

                <div className='project__box'>
                    <div className="project__group">

                        <div className='project__data'>
                            <div>
                        
                            <h3 className="project__level"><a href="https://akki765.github.io/BS-Task7/">Project Demo<i class='bx bx-right-arrow-alt' ></i> </a></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='project__content' id="project4">
                <h3 className="project__title">Builderz Page</h3>

                <div className='project__box'>
                    <div className="project__group">

                        <div className='project__data'>
                            <div>
                        
                            <h3 className="project__level"><a href="https://akki765.github.io/BS-Task6/">Project Demo<i class='bx bx-right-arrow-alt' ></i> </a></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='project__content' id="project5">
                <h3 className="project__title">Animated Running Train</h3>

                <div className='project__box'>
                    <div className="project__group">

                        <div className='project__data'>
                            <div>
                        
                            <h3 className="project__level"><a href="https://akki765.github.io/JS-Task8/">Project Demo<i class='bx bx-right-arrow-alt' ></i> </a></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </section>
  )
}

export default Project;