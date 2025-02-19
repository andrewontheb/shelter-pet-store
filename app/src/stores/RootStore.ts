import { PetStore } from './PetStore';

export class RootStore {
    petStore: PetStore;

    private static instance: RootStore;

    private constructor() {
        this.petStore = new PetStore(this);
    }

    public static getInstance(): RootStore {
        if (!RootStore.instance) {
            RootStore.instance = new RootStore();
        }
        return RootStore.instance;
    }
}
const rootStore = RootStore.getInstance();
export default rootStore;
