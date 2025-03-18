import WorkSection from './components/homePage/workSection';
import heart from '/assets/images/svgs/heart.svg';

function App() {

  return (
    <>
      <div className='h-screen w-full flex justify-center items-center'>
        {/* <h1 className='text-2xl font-extrabold'>Welcome to MMF project <img className='inline bg-red-600' src={heart} alt="" /></h1> */}
         <WorkSection />
      </div> 
    </>
  )
}

export default App
