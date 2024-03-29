import React, { useContext } from 'react';
import { CourseDataContext } from '../../Layout/Main';
import CourseCard from './CourseCard';

import CourseSideNav from './CourseSideNav';

const Courses = () => {
       
    /*
    |-------------
    |  Get Couse side navbar data , from Course data context api .
    |  CourseDataContext api is locatde on layout -> Mains.js 
    */
    const {courses} = useContext(CourseDataContext); //context api    

    return (
        <div className='py-10 bg-white'>
            <h2 className='font-[Poppins] text-blue-500 text-center md:text-5xl font-extrabold'> Our Courses</h2>
            <div className='px-10 md:px-20 flex flex-col md:flex-row gap-10 mt-10'>

                 {/* left side  */}

                 <div className="flex-none md:w-1/4 mb-36">
                    <div className='sticky top-32 h-[340px] '>

                        {/* course sideNavbar  */}
                        <CourseSideNav/>

                    </div>
                 </div>

                 
                  {/* Right side  */}
                 <div className="grow">
                     <div className='grid md:grid-cols-3 gap-10'>

                        {/* all course cards  */}

                        {
                        courses.map(course=><CourseCard key={course.id} course={course}/>)
                        }

                     </div>
                     
                  </div>

            </div>
        </div>
    );
};

export default Courses;