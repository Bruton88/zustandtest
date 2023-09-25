
import React from 'react'
import { useCatStore } from '@/stores/CatStore'

const CatBox = () => {
    // const bigCats = useCatStore(state => state.cats.bigCats);
    // const smallCats = useCatStore(state => state.cats.smallCats);
    // const increaseBigCats = useCatStore(state => state.increaseBigCats);
    // const increaseSmallCats = useCatStore(state => state.increaseSmallCats);
    // const summary = useCatStore(state => state.summary);

    const { cats: { bigCats, smallCats }, increaseBigCats, increaseSmallCats, summary } = useCatStore();

    console.log(summary())
    return (
        <div className='box'>
            <h1>Cat Box</h1>
            <p>Big Cats:{bigCats}</p>
            <p>Small Cats:{smallCats}</p>
            <p>{Math.random()}</p>

            <div>
                <button onClick={increaseBigCats}>add big cats</button>
                <button onClick={increaseSmallCats}>add small cats</button>
            </div>


        </div>
    )
}

export default CatBox