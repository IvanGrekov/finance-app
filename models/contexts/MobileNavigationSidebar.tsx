import React, { createContext, useState, useContext, PropsWithChildren } from 'react';

interface IMobileNavigationSidebarContextProps {
    open: boolean;
    toggleSidebar: () => void;
}

const MobileNavigationSidebarContext = createContext<
    IMobileNavigationSidebarContextProps | undefined
>(undefined);

export function MobileNavigationSidebarContextProvider({
    children,
}: PropsWithChildren): JSX.Element {
    const [open, setOpen] = useState(false);

    const toggleSidebar = (): void => setOpen((prev) => !prev);

    return (
        <MobileNavigationSidebarContext.Provider value={{ open, toggleSidebar }}>
            {children}
        </MobileNavigationSidebarContext.Provider>
    );
}

export const useMobileNavigationSidebar = (): IMobileNavigationSidebarContextProps => {
    const context = useContext(MobileNavigationSidebarContext);

    if (!context) {
        throw new Error('useSidebar must be used within a SidebarProvider');
    }

    return context;
};
