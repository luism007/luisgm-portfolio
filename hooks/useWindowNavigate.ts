export const useWindowNavigate = () => {
    const navigateTo = (url: string, newTab?: boolean) => {
        if (newTab) { 
            window.open(url, '_blank');
        }
        return;
    }

    return {
        navigateTo
    }
}