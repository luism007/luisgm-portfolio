export const useWindowSize = () => {
    
    const getWindowWidth = () => {
        return window.screen.width;
    }

    return {
        getWindowWidth
    }
}