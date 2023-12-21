import { polyfill } from "seamless-scroll-polyfill"; 
export const useScrollTo = (elementId?: string, behavior?: ScrollBehavior, block?: ScrollLogicalPosition, inline?: ScrollLogicalPosition) => {
    const scrollTo = () => {
        const element = document.getElementById(elementId!);
        if (!element) return
        // patch method for Safari
        polyfill();
        element.scrollIntoView({behavior: behavior, block: block, inline: inline})
    }
    const scrollToTopOfPage = () => {
        polyfill();
        setTimeout(() => {
            window.scrollTo(0, -1);
        }, 100);
    }
    return {
        scrollTo,
        scrollToTopOfPage
    }
}