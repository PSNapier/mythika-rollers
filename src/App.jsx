import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
//   const [count, setCount] = useState(0)

  return (
    <>
		<div className='m-5 grid grid-cols-4 text-neutral-200 text-md font-serif small-caps'>
			<div id='parent1' className='border-neutral-200 border-2'>
				<h1 className='p-2'>Parent 1:</h1>

				<div className='px-2'>Genopool<span className='float-right'>Multi? <input type='checkbox' className='dot' /></span></div>
				<input type='text' className='w-full'/>

				<div className='grid grid-cols-2 px-2 pt-2'>
					<span><input type='checkbox' className='dot' /> Male</span>
					<span><input type='checkbox' className='dot' /> Female</span>
				</div>

				<div className=''>
					<div className=''>Boop</div>
					<div className=''>Boop</div>
				</div>
			</div>

			<div id='parent2' className='border-neutral-200 border-2'>
				<h1>Parent 2:</h1>
			</div>

			<div id='selections' className='border-neutral-200 border-2'>
				<h1>Items:</h1>
				<h1>Pets:</h1>
			</div>

			<div id='output' className='border-neutral-900 border-2'></div>
		</div>
    </>
  )
}

export default App
