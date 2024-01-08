function stroke_anim(delay, duration, strokeWidth, timingFunction, strokeColor, repeat) {
    let paths = document.getElementsByClassName("anim");
    let mode=repeat?'infinite':'forwards'
    for (let i = 0; i < paths.length; i++) {
        const path = paths[i];
        const length = path.getTotalLength();
        path.style["stroke-dashoffset"] = `${length}px`;
        path.style["stroke-dasharray"] = `${length}px`;
        path.style["stroke-width"] = `${strokeWidth}px`;
        path.style["stroke"] = `${strokeColor}`;
        path.style["animation"] = `${duration}s svg-text-anim ${mode} ${timingFunction}`;
        path.style["animation-delay"] = `1500ms, ${i * delay}s`;
    }
}
stroke_anim(0.1,9,1,'ease-in-out','#ffffff',false);