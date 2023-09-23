import { Fragment, useState } from 'react'
import './style.css'

const NewPlanet = () => {

    const galaxy = ['Galaxy Name','Milky Way', 'Massier 83', 'Black Eye Galaxy', 'Pinwheel', 'Canis Major Dwarf', 'Somewhere else...'];
    
    return(
        <Fragment>
            <div className='submit'>
                <span>If you found new planet you can add it to our directory (Reactive forms demo)</span>
            </div>
            <div className='inputs'>
                <input className='input' type='text' placeholder='Planet Name'></input>
                <select className='select'>
                    {galaxy.map((item, index) => <option value={index}>{item}</option>)}
                </select>
                <input className='input' type='number' placeholder='Diametr (km)'></input>
                <input className='input' type='number' placeholder='Distance (mln km)' ></input>
                <input className='input' type='text' placeholder='Your Name' ></input>
                <input className='input' type='text' placeholder='Email' ></input>
            </div>
            <button className='button'>Submit</button>
        </Fragment>
    )
}

export default NewPlanet