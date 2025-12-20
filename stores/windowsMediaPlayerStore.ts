import { create } from 'zustand'

type windowsMediaPlayerStore = {
    currentMusicPlaying: string | null,
    setCurrentMusicPlaying: (value: string) => void,
}
export const useWindowsMediaPlayerStore = create<windowsMediaPlayerStore>((set) => ({
    currentMusicPlaying: '/musics/bring me back.mp3',
    setCurrentMusicPlaying: (value: string) => {
        set({
            currentMusicPlaying: value
        })
    }
}))