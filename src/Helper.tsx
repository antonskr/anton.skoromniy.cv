const elementVisibilityCheck = (el:HTMLDivElement, threshold:number, mode?:string) =>
{
    mode = mode || 'visible';

    const rect = el.getBoundingClientRect();

    threshold = rect.height * threshold || 0;

    const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    const above = rect.bottom - threshold < 0;
    const below = rect.top - viewHeight + threshold >= 0;

    return mode === 'above' ? above : (mode === 'below' ? below : !above && !below);
};


export {
    elementVisibilityCheck
}
