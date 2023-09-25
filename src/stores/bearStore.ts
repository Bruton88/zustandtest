import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';

type TBearStoreState = {
    bears: number,
    color: string,
    size: string,
    increasePopulation: () => void,
    removeAllBears: () => void,
    // getOwner: () => Promise<string>,
    // reset: () => void,
}

export const useBearStore = create<TBearStoreState>()(
    persist(
        (set) => ({
            bears: 0,
            color: "red",
            size: "big",
            increasePopulation: () => set((state) => ({
                ...state,//第一层不需要
                bears: state.bears + 1
            })
            ),
            removeAllBears: () => set({ bears: 0 }),
            //解决clear storage 值未能初始化
            // reset: () => set(state => ({
            //     bears: state.bears,
            //     color: "red",
            //     size: "big",
            // }))
            //     getOwner: async () => {
            //         const res = await fetch('https://api.github.com/users/1');
            //         const owner = await res.json();
            //         return owner.name;
            //     }
        }), {
        name: "bear store",
        // storage: createJSONStorage(() => sessionStorage),
        // partialize: (state) => ({
        //     bears: state.bears,
        // })
        partialize: (state) =>
            Object.fromEntries(
                Object.entries(state).filter(
                    ([key]) => !["color", "size"].includes(key)
                )
            ),



    }))