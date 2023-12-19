export const useScrollTo = (elementId: string, behavior: ScrollBehavior, block: ScrollLogicalPosition, inline: ScrollLogicalPosition) => {
    const scrollTo = () => {
        const element = document.getElementById(elementId);
        if (!element) return
        element.scrollIntoView({behavior: behavior, block: block, inline: inline})
    }
    return {
        scrollTo
    }
}