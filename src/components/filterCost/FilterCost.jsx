import React, { useState } from 'react';
import './filterCost.scss';


export function FilterCost(props) {
    const [min, setMin] = useState(props.min);
    const [max, setMax] = useState(props.max);

    function changeMin(event) {
        setMin(event.target.value);
    }
    function changeMax(event) {
        setMax(event.target.value);
    }


    return (
        <>
            <div className='filterBox'>
                <h5>Сортировать по цене</h5>
                <div>
                    <span>min: </span>
                    <input type="text" id='minCost' defaultValue={props.min} onChange={changeMin} className='inputFilter min' />
                    <span> max: </span>
                    <input type="text" id='maxCost' defaultValue={props.max} onChange={changeMax} className='inputFilter max' />
                    <button onClick={() => props.watchChange(min, max)} className='submit' >Применить</button>
                </div>

            </div>
        </>
    )
}

