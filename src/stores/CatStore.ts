import { createSelectors } from "@/app/utils/createSelectors";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

type TCatStoreState = {
    cats: {
        bigCats: number,
        smallCats: number,
    }
    increaseBigCats: () => void,
    increaseSmallCats: () => void,
    summary: () => void,
}

export const useCatStore = createSelectors(
    create<TCatStoreState>()
        (
            immer(
                devtools(
                    persist(
                        (set, get) => ({
                            cats: {
                                bigCats: 0,
                                smallCats: 0,
                            },
                            increaseBigCats: () =>
                                set((state) => { state.cats.bigCats++ }
                                    // ({
                                    //         cats: {
                                    //             ...state.cats,
                                    //             bigCats: state.cats.bigCats + 1,
                                    //         }
                                    //     })
                                ),


                            increaseSmallCats: () =>
                                set((state) => { state.cats.smallCats++ }
                                    //  ({
                                    //         cats: {
                                    //             ...state.cats,
                                    //             smallCats: state.cats.smallCats + 1,
                                    //         }
                                    //     })
                                ),
                            summary: () => {

                                const total = get().cats.bigCats + get().cats.smallCats;
                                return `there are total ${total} bear`;
                            }
                        }
                        ), { name: "cat store" },),
                    { enabled: true, name: "cat store" }),
            )
        )
)