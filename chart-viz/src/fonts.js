
export const load = (param) => {
    var link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';

    //link.href = 'http://fonts.googleapis.com/css?family=Oswald&effect=neon';
    document.head.appendChild(link);

    link.href = 'http://fonts.googleapis.com/css?family=' + param.family + '&effect=' + param.effect;
};
