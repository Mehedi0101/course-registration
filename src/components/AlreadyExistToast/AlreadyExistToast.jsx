import { AiOutlineExclamationCircle } from 'react-icons/ai';
import Proptypes from 'prop-types';
import './AlreadyExistToast.css';

const AlreadyExistToast = ({ course_title }) => {
    return (
        <div className='toast-exist fixed'>
            <div className="toast toast-center">
                <div className="alert alert-info bg-green-500 text-white text-sm  max-[375px]:text-[10px] md:text-base">
                    <span className='flex items-center'><AiOutlineExclamationCircle className='text-2xl mr-2' />{course_title} is already added to the cart</span>
                </div>
            </div>
        </div>
    )
};

AlreadyExistToast.propTypes = {
    course_title: Proptypes.string.isRequired
}

export default AlreadyExistToast;