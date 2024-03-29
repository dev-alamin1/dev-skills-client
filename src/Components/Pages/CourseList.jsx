import React from 'react';
import { Link } from 'react-router-dom';

const CourseList = (props) => {
      const {id,courseName} = props.course
      
    return (
             <li className='mb-2 px-2'>
                <Link to={`/course/${id}`}>
                    <button className="btn btn-outline btn-primary w-full">{courseName}</button>
                </Link>
            </li>
    );
};

export default CourseList;