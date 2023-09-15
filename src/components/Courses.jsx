import { useEffect } from "react";
import { useState } from "react";
import Course from "./Course";
import Proptypes from 'prop-types';

const Courses = ({selectedCourse, setSelectedCourse, totalCredit}) => {

    const [courses, setCourses] = useState([]);

    const getData = async() => {
        const response = await fetch('courseData.json');
        const data = await response.json();
        setCourses(data);
    }

    useEffect( () => {
        getData();
    }, [] )

    return (
        <div className="w-full md:w-2/3 lg:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {
                courses.map( course => <Course key={course.course_id} course={course} selectedCourse={selectedCourse} setSelectedCourse={setSelectedCourse} totalCredit={totalCredit}></Course> )
            }
        </div>
    );
};

Courses.propTypes = {
    selectedCourse: Proptypes.array.isRequired,
    setSelectedCourse: Proptypes.func.isRequired,
    totalCredit: Proptypes.number.isRequired
}

export default Courses;