import { create } from 'zustand'
import { QuickStartGuideData } from '@/utils/defaultAppData'

type WindowItemType = {
    id: string;
    title: string;
    icon: React.ReactNode;
    content: React.ReactNode;
    startX: number;
    startY: number;
    defaultWidth: number;
    defaultHeight: number;
}
type Applications = {
    windowItem: WindowItemType[],
    addWindowItem: (title: string, icon: React.ReactNode, content: React.ReactNode, defaultWidth: number, defaultHeight: number) => void,
    activeId: string | null,
    setActiveId: (id: string) => void,
    closeWindowItem: (id: string) => void
}
export const useApplicationStore = create<Applications>((set) => ({
    windowItem: [{
        id: QuickStartGuideData.id,
        title: QuickStartGuideData.title,
        content: QuickStartGuideData.content,
        icon: QuickStartGuideData.icon,
        startX: 620,
        startY: 220,
        defaultWidth: 800,
        defaultHeight: 500

    }],
    addWindowItem: (title, icon, content, defaultWidth, defaultHeight) => {
        // Calculate perfect center
        let startX = window.innerWidth / 2 - defaultWidth / 2;
        let startY = window.innerHeight / 2 - defaultHeight / 2;

        // Keep window inside screen bounds
        startX = Math.max(0, Math.min(startX, window.innerWidth - defaultWidth));
        startY = Math.max(0, Math.min(startY, window.innerHeight - defaultHeight));

        const offset = 20;
        startX += Math.floor(Math.random() * offset);
        startY += Math.floor(Math.random() * offset);

        const id = crypto.randomUUID();

        set((state) => ({
            windowItem: [
                ...state.windowItem,
                {
                    id,
                    title,
                    icon,
                    content,
                    startX,
                    startY,
                    defaultWidth,
                    defaultHeight,
                },
            ],
            activeId: id
        }));
    },


    activeId: 'quickstart',
    setActiveId: (id) => {
        set({
            activeId: id
        })
    },
    closeWindowItem: (id) => {
        set((state) => ({
            windowItem: state.windowItem.filter(item => item.id != id)
        }))
    }

}))