import { create } from 'zustand'
type systemTrayStore = {
    volumeStatus: boolean,
    setVolumeStatus: () => void,

}

export const useSystemTrayStore = create<systemTrayStore>((set) => ({
    volumeStatus: true,
    setVolumeStatus: () => {
        set((state) => ({
            volumeStatus: !state.volumeStatus
        }))
    }
}))