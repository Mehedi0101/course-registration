import './App.css'
import Cart from './components/Cart'
import Courses from './components/Courses'

function App() {

  return (
    <div className='w-11/12 mx-auto'>

      <h1 className='text-[#1C1B1B] text-2xl md:text-3xl lg:text-4xl font-bold text-center my-5'>Course Registration</h1>

      <div className='flex gap-6 mt-10 flex-col-reverse md:flex-row'>
        <Courses></Courses>
        <Cart></Cart>
      </div>

    </div>
  )
}

export default App
