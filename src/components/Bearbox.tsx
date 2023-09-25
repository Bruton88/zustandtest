import React from 'react'
import { useBearStore } from '@/stores/bearStore'

const Bearbox = () => {
    // const bears = useBearStore(state => state.bears);
    // const increasePopulation = useBearStore(state => state.increasePopulation);
    // const removeAllbears = useBearStore(state => state.removeAllBears);
    const { bears, increasePopulation, removeAllBears } = useBearStore();
    return (
        <div className='box'>
            <h1>Bear Box</h1>
            <p>bears:{bears}</p>
            <div>
                <button onClick={increasePopulation}>Add Bear</button>
                <button onClick={removeAllBears}>Remove Bear</button>
                <button onClick={useBearStore.persist.clearStorage}>Clear Storage</button>
            </div>
        </div>
    )
}

export default Bearbox