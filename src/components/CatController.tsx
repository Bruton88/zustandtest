import { useCatStore } from '@/stores/CatStore'
import { shallow } from 'zustand/shallow'

const CatController = () => {
    //useSelector只能返回第一层的
    // const { increaseBigCats, increaseSmallCats } = useCatStore();
    // const increaseBigCats = useCatStore.use.increaseBigCats();
    // const increaseSmallCats = useCatStore.use.increaseSmallCats();
    // const { increaseBigCats, increaseSmallCats } = useCatStore(
    //     (state) => ({
    //         increaseBigCats: state.increaseBigCats,
    //         increaseSmallCats: state.increaseSmallCats,
    //     }), shallow
    // )
    const [increaseBigCats, increaseSmallCats] = useCatStore(
        (state) => [state.increaseBigCats, state.increaseSmallCats],
        shallow,
    );

    return (
        <div className='box'>
            <h1>Cat Controller</h1>

            <p>{Math.random()}</p>

            <div>
                <button onClick={increaseBigCats}>add big cats</button>
                <button onClick={increaseSmallCats}>add small cats</button>
            </div>
        </div>
    )
}

export default CatController