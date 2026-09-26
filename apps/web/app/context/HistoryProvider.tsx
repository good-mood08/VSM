'use client'

import {createContext, useContext, useEffect, useState, ReactNode} from 'react'
import {usePathname} from 'next/navigation'

const HistoryContext = createContext<{previousPath: string | null}>({previousPath: null});

export function HistoryProvider({children}: {children: ReactNode}){
    const pathname = usePathname()
    const [history, setHistory] = useState<string[]>([]);

    useEffect(() => {
        setHistory((prev) => {
            if(prev[prev.length - 1] === pathname) return prev;
            return [...prev, pathname];
        })
    }, [pathname]);

    const previousPath = history.length > 1 ? history[history.length - 2] : null;
    const Provider = HistoryContext.Provider as any

    return (
        <Provider value={{previousPath}}>
            {children}
        </Provider>
    )
}

export const useHistory = () => useContext(HistoryContext);