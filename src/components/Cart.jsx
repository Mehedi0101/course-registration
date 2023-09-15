import Proptypes from 'prop-types';

const Cart = ({selectedCourse, totalCredit}) => {

    const totalPrice = selectedCourse.reduce((total, selected) => total += selected.price, 0).toFixed(2);

    const remainingCredits = (20 - totalCredit);

    return (
        <div className="w-full md:w-1/4 p-6">
            <p className='text-lg font-bold text-blue-500'>Credit Hour Remaining {remainingCredits} hr</p>

            <hr className='border-[#1c1b1b33] my-4' />

            <h2 className='text-[#1C1B1B] text-xl font-bold'>Course Name</h2>
            <ol className='list-decimal ml-5 mt-5 leading-8 text-[#1c1b1b99]'>
                {
                    selectedCourse.map(selected => <li key={selected.course_id}>{selected.course_title}</li>)
                }
            </ol>

            <hr className='mt-6 mb-4 border-[#1c1b1b33]' />

            <p className='text-[#1c1b1bcc] font-medium'>Total Credit Hour : {totalCredit}</p>

            <p className='text-[#1c1b1bcc] font-semibold mt-8'>Total Price : {totalPrice} USD</p>
        </div>
    );
};

Cart.propTypes = {
    selectedCourse: Proptypes.array.isRequired,
    totalCredit: Proptypes.number.isRequired
}

export default Cart;