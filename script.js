
function block1 () {
    document.body.style.background = `rgb( ${rnd(255)}, ${rnd(255)},${rnd(255)})`;
}

const rnd = ( arg ) => {
    return Math.floor(Math.random() * arg);
}

