
import React from 'react'
import { useCatStore } from '@/stores/CatStore'

const CatBox2 = () => {

    //const { cats: { bigCats } } = useCatStore();
    const bigCats = useCatStore((state) => state.cats.bigCats);


    return (
        <div className='box'>
            <h1>Partial Status from catStore</h1>
            <p>Big Cats:{bigCats}</p>
            <p>{Math.random()}</p>
        </div>
    )
}

export default CatBox2