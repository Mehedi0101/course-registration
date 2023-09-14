import { useEffect } from "react";
import { useState } from "react";
import Course from "./Course";

const Courses = () => {

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
        <div className="w-full md:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                courses.map( course => <Course key={course.course_id} course={course}></Course> )
            }
        </div>
    );
};

export default Courses;