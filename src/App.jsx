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

const rollRandom = () => {

}

const clear = () => {

}

  return (
    <>
		<div className='m-5 flex text-neutral-200 text-md font-serif small-caps bg-neutral-800 bg-opacity-75 [&>div]:w-1/4'>
			<div id='parent1' className='border-neutral-200 border-2'>
				<h1 className='p-2'>Parent 1:</h1>

				<div className='px-2'>Genopool<span className='float-right'>Multi? <input type='checkbox' className='dot' /></span></div>
				<input type='text' className='w-full small-caps'/>

				<div className='grid grid-cols-2 px-2 pt-2'>
					<span><input type='checkbox' className='dot' /> Male</span>
					<span><input type='checkbox' className='dot' /> Female</span>
				</div>

				<div className='grid grid-cols-5 text-xs outline outline-3 mt-2 p-2'>
					<div className='col-span-2'>Species</div><select className='col-span-3 text-neutral-900 small-caps'><option value='select'>Select</option></select>
					<div className='col-span-2'>Rank</div><select className='col-span-3 text-neutral-900 small-caps'><option value='select'>Select</option></select>
					<div className='col-span-2'>Build</div><select className='col-span-3 text-neutral-900 small-caps'><option value='select'>Select</option></select>
					<div className='col-span-2'>Ear Trait</div><select className='col-span-3 text-neutral-900 small-caps'><option value='select'>Select</option></select>
					<div className='col-span-2'>Tail Trait</div><select className='col-span-3 text-neutral-900 small-caps'><option value='select'>Select</option></select>
					<div className='col-span-2'>Bonus Trait</div><select className='col-span-3 text-neutral-900 small-caps'><option value='select'>Select</option></select>
					<div className='col-span-2'>Mutation</div><select className='col-span-3 text-neutral-900 small-caps'><option value='select'>Select</option></select>
					<div className='col-span-2'>Hereditary Traits</div><select className='col-span-3 text-neutral-900 small-caps'><option value='select'>Select</option></select>
				</div>

				<div className='outline outline-3 text-center w-full'>
					<div className='grid grid-cols-3 text-sm p-1'>
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
					<div className='grid grid-cols-4 text-xs p-1'>
						<div>Elemancy</div>
						<div>Medic</div>
						<div>Dark</div>
						<div>Void</div>
					</div>
					<div className='grid grid-cols-4 [&>div]:outline [&>div]:outline-3 [&>div]:h-5'>
						{/* <div contentEditable='true'></div> */}
						<div></div>
						<div></div>
						<div></div>
						<div></div>
					</div>
				</div>
			</div>

			<div id='parent2' className='border-neutral-200 border-2'>
				<h1 className='p-2'>Parent 2:</h1>

				<div className='px-2'>Genopool<span className='float-right'>Multi? <input type='checkbox' className='dot' /></span></div>
				<input type='text' className='w-full small-caps'/>

				<div className='grid grid-cols-2 px-2 pt-2'>
					<span><input type='checkbox' className='dot' /> Male</span>
					<span><input type='checkbox' className='dot' /> Female</span>
				</div>

				<div className='grid grid-cols-5 text-xs outline outline-3 mt-2 p-2'>
					<div className='col-span-2'>Species</div><select className='col-span-3 text-neutral-900 small-caps'><option value='select'>Select</option></select>
					<div className='col-span-2'>Rank</div><select className='col-span-3 text-neutral-900 small-caps'><option value='select'>Select</option></select>
					<div className='col-span-2'>Build</div><select className='col-span-3 text-neutral-900 small-caps'><option value='select'>Select</option></select>
					<div className='col-span-2'>Ear Trait</div><select className='col-span-3 text-neutral-900 small-caps'><option value='select'>Select</option></select>
					<div className='col-span-2'>Tail Trait</div><select className='col-span-3 text-neutral-900 small-caps'><option value='select'>Select</option></select>
					<div className='col-span-2'>Bonus Trait</div><select className='col-span-3 text-neutral-900 small-caps'><option value='select'>Select</option></select>
					<div className='col-span-2'>Mutation</div><select className='col-span-3 text-neutral-900 small-caps'><option value='select'>Select</option></select>
					<div className='col-span-2'>Hereditary Traits</div><select className='col-span-3 text-neutral-900 small-caps'><option value='select'>Select</option></select>
				</div>

				<div className='outline outline-3 text-center w-full'>
					<div className='grid grid-cols-3 text-sm p-1'>
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
					<div className='grid grid-cols-4 text-xs p-1'>
						<div>Elemancy</div>
						<div>Medic</div>
						<div>Dark</div>
						<div>Void</div>
					</div>
					<div className='grid grid-cols-4 [&>div]:outline [&>div]:outline-3 [&>div]:h-5'>
						{/* <div contentEditable='true'></div> */}
						<div></div>
						<div></div>
						<div></div>
						<div></div>
					</div>
				</div>
			</div>

			<div id='selections' className='border-neutral-200 border-2 p-2'>
				<h1>Items</h1>
					<div id='items' className='text-sm'>
						<div><input id='neros-luck' type='checkbox'></input> Nero's Luck</div>
						<div><input id='arativas-spirit' type='checkbox'></input> Arativa's Spirit</div>
						<div><input id='solasdrake' type='checkbox'></input> Solasdrake</div>
						<div><input id='shadowsdrake' type='checkbox'></input> Shadowsdrake</div>
						<div><input id='furion' type='checkbox'></input> Furion</div>
						<div><input id='shellpin' type='checkbox'></input> Shellpin</div>
						<div><input id='stamvaul' type='checkbox'></input> Stamvaul</div>
						<div><input id='tolerance-crystal' type='checkbox'></input> Tolerance Crystal</div>
					</div>

				<h1 className='mt-2'>Pets</h1>
				<div id='pets' className='text-sm'>
					<div><input id='tolerance-crystal' type='checkbox'></input> Behopheonix</div>
					<div><input id='tolerance-crystal' type='checkbox'></input> Rune Spirit</div>
					<div><input id='tolerance-crystal' type='checkbox'></input> Fertility Elk</div>
				</div>

				<div className='grid grid-cols-2 mt-2 text-xs'>
					<div>Species</div><select className='text-neutral-900 small-caps'><option value='select'>Select</option></select>
					<div>Gender</div><select className='text-neutral-900 small-caps'><option value='select'>Select</option></select>
					<div>Rank</div><select className='text-neutral-900 small-caps'><option value='select'>Select</option></select>
					<div>Build</div><select className='text-neutral-900 small-caps'><option value='select'>Select</option></select>
					<div>Ear Trait</div><select className='text-neutral-900 small-caps'><option value='select'>Select</option></select>
					<div>Tail Trait</div><select className='text-neutral-900 small-caps'><option value='select'>Select</option></select>
					<div>Bonus Trait</div><select className='text-neutral-900 small-caps'><option value='select'>Select</option></select>
					<div>Mutation</div><select className='text-neutral-900 small-caps'><option value='select'>Select</option></select>
					<div>Coat Colour</div><select className='text-neutral-900 small-caps'><option value='select'>Select</option></select>
					<div>Markings</div><select className='text-neutral-900 small-caps'><option value='select'>Select</option></select>
					<div>Hereditary Traits</div><select className='text-neutral-900 small-caps'><option value='select'>Select</option></select>
				</div>
			</div>

			<div id='output'>
				<div id='result' className='w-full h-[90%] p-2 text-xs'>
					<div className='bg-neutral-900 w-full h-full p-2'>{textContent}</div>
				</div>
				
				<div className='flex justify-center'>
					<button className='text-neutral-200 px-2 small-caps hover:scale-110' onClick={rollFoal}>Roll</button>
					|
					<button className='text-neutral-200 px-2 small-caps hover:scale-110' onClick={rollRandom}>Random</button>
					|
					<button className='text-neutral-200 px-2 small-caps hover:scale-110' onClick={clear}>Clear</button>
				</div>
			</div>
		</div>
    </>
  )
}

export default App
