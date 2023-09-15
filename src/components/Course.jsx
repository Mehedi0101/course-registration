import Proptypes from 'prop-types';
import { FiDollarSign } from 'react-icons/fi';
import { HiOutlineBookOpen } from 'react-icons/hi';

const Course = ({course, selectedCourse, setSelectedCourse}) => {

    const { course_title, cover_img, course_description, price, credit } = course;

    const handleSelect = () => {
        if(!selectedCourse.find(selected => selected.course_id === course.course_id)){
            setSelectedCourse([...selectedCourse, course]);
        }
    }

    return (
        <div className='p-4 flex flex-col justify-between'>
            <div>
                <img className='w-full rounded-lg' src={cover_img} alt="" />
            </div>
            <h2 className='text-lg font-semibold text-[#1C1B1B] my-3'>{course_title}</h2>
            <p className='text-[#1c1b1b99] text-justify text-sm'>{course_description}</p>
            <div className='my-3'>
                <div className='flex gap-2 justify-between mb-2 flex-row md:flex-col xl:flex-row'>
                    <div className='flex items-center gap-1 mx-0 md:mx-auto xl:mx-0'>
                        <FiDollarSign className='text-xl text-[#1C1B1B]'/>
                        <p className='text-[#1c1b1b99] font-medium'>Price: {price}</p>
                    </div>
                    <div className='flex items-center gap-1 mx-0 md:mx-auto xl:mx-0'>
                        <HiOutlineBookOpen className='text-2xl text-[#1C1B1B]' />
                        <p className='text-[#1c1b1b99] font-medium'>Credit: {credit}hrs</p>
                    </div>
                </div>

                <button className='bg-blue-500 active:bg-blue-700 text-white text-lg font-semibold w-full py-2 rounded-lg transition-colors duration-75' onClick={handleSelect}>Select</button>
            </div>
        </div>
    );
};


Course.propTypes = {
    course: Proptypes.object.isRequired,
    selectedCourse: Proptypes.array.isRequired,
    setSelectedCourse: Proptypes.func.isRequired
}

export default Course;