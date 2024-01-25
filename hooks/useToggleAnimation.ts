
export const useToggleAnimation = (animationClass: string, toggable: boolean) => {
    const intersectionObserver = new IntersectionObserver((observables) => {
        observables.forEach((entry) => {
            if(entry.isIntersecting) { 
                entry.target.classList.add(animationClass);
            } else { 
                if (toggable) {
                  entry.target.classList.remove(animationClass);
                }
            }
        })
    });

    return {
        intersectionObserver
    }

}