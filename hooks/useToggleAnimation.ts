
export const useToggleAnimation = (animationClass: string) => {
    const intersectionObserver = new IntersectionObserver((observables) => {
        console.log('Observables', observables);
        observables.forEach((entry) => {
            if(entry.isIntersecting) { 
                entry.target.classList.add(animationClass);
            } else { 
                // entry.target.classList.remove(animationClass);
            }
        })
    });

    return {
        intersectionObserver
    }

}