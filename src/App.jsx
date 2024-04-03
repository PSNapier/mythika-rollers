import './App.css'
import { useState } from 'react'

function App() {

const [textContent, setTextContent] = useState('');
function rngRange(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

// const items = () => {
// 	const dictionary = [
// 		`Nero's Luck`,
// 		`Arativa's Spirit`,
// 		`Solasdrake`,
// 		`Shadowsdrake`,
// 		`Furion`,
// 		`Shellpin`,
// 		`Stamvaul`,
// 		`Tolerance Crystal`,
// 	]

// 	for (let i = 0; i < dictionary.length; i++) {
// 		document.getElementById('items').innerHTML += `<div><input type="checkbox">${dictionary[]}</input>`
// 	}
// }

const rollFoal = () => {
	const numberOfPups = () => {
		const parent1 = () => {
			return 'runt';
		}
		const parent2 = () => {
			return 'omega';
		}

		const dictionary = {
			runt: [1,3],
			omega: [2,3],
			beta: [2,4],
			alpha: [3,4],
		}

		const fertilityElkPet = () => {
			let output = false;
			// check if fertilityElkPet is present
			return output;
		}

		if (fertilityElkPet()) {
			return 4;
		}
		else {
			if (parent1() === 'runt' || parent2() === 'runt') {
				return rngRange(dictionary.runt[0], dictionary.runt[1]);
			}
		}
		console.log(parent1, parent2);
	}


	const newTextContent = `${numberOfPups()}
		Number) Species, Gender, Status, ___ Rank
		B: ___ Build, ____ Ears, ____ Tail, ___ Bonus Trait
		M: (Mutation)
		G: (Genotype)
		P: (Phenotype)
		Skills: +1 Attack, +1 Speed, +1 Defence
		Runes: +1 Elemancy, +1 Medic, +1 Dark, +1 Void
		Hereditary Traits:
		(List hereditary traits here)
		`
	setTextContent(newTextContent);
}

  return (
    <>
		<div className='m-5 grid grid-cols-4 text-neutral-200 text-md font-serif small-caps bg-neutral-800 bg-opacity-75'>
			<div id='parent1' className='border-neutral-200 border-2'>
				<h1 className='p-2'>Parent 1:</h1>

				<div className='px-2'>Genopool<span className='float-right'>Multi? <input type='checkbox' className='dot' /></span></div>
				<input type='text' className='w-full'/>

				<div className='grid grid-cols-2 px-2 pt-2'>
					<span><input type='checkbox' className='dot' /> Male</span>
					<span><input type='checkbox' className='dot' /> Female</span>
				</div>

				<div className='grid grid-cols-5 text-xs outline outline-3 mt-2'>
					<div className='grid outline outline-3 col-span-2 p-2'>
						<div>Species</div>
						<div>Rank</div>
						<div>Build</div>
						<div>Ear Trait</div>
						<div>Tail Trait</div>
						<div>Bonus Trait</div>
						<div>Mutation</div>
						<div>Heredetary<br></br>Traits</div>
					</div>
					<div className='grid col-span-3 p-2'>
						<div>Select One Here</div>
						<div>Select One Here</div>
						<div>Select One Here</div>
						<div>Select One Here</div>
						<div>Select One Here</div>
						<div>Select One Here</div>
						<div>Select One Here</div>
						<div>Select One Here</div>
					</div>
				</div>

				<div className='outline outline-3 text-center w-full'>
					<div className='flex justify-between px-1 text-xs p-1'>
						<div>Attack</div>
						<div>Speed</div>
						<div>Defence</div>
					</div>
					<div className='grid grid-cols-3 [&>div]:outline [&>div]:outline-3 [&>div]:h-5'>
						<div></div>
						<div></div>
						<div></div>
					</div>
				</div>

				<div className='outline outline-3 text-center w-full'>
					<div className="flex justify-between px-1 text-xs p-1">
						<div>Elemancy</div>
						<div>Medic</div>
						<div>Dark</div>
						<div>Void</div>
					</div>
					<div className='grid grid-cols-4 [&>div]:outline [&>div]:outline-3 [&>div]:h-5'>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
					</div>
				</div>
			</div>

			<div id='parent2' className='border-neutral-200 border-2'>
				<h1>Parent 2:</h1>
			</div>

			<div id='selections' className='border-neutral-200 border-2'>
				<h1>Items:</h1>
				<div id='items'></div>
				<h1>Pets:</h1>
			</div>

			<div id='output' className='border-neutral-900 border-2'>
				<div id='result' className='w-full h-4/5 p-2 text-xs'>{textContent}</div>
				<button className='bg-neutral-200 text-neutral-900 px-2' onClick={rollFoal}>Roll</button>
			</div>
		</div>
    </>
  )
}

export default App
