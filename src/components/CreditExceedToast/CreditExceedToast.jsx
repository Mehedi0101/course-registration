import { AiOutlineExclamationCircle } from 'react-icons/ai';

const CreditExceedToast = () => {
    return (
        <div className='toast-exist fixed'>
            <div className="toast toast-center">
                <div className="alert alert-info bg-red-500 text-white text-sm  max-[375px]:text-[10px] md:text-base">
                    <span className='flex items-center'><AiOutlineExclamationCircle className='text-2xl mr-2' />Maximum Credit Exceeded</span>
                </div>
            </div>
        </div>
    );
};

export default CreditExceedToast;