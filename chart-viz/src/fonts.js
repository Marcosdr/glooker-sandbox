
export const load = (url) => {
    var link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';

    //link.href = 'http://fonts.googleapis.com/css?family=Oswald&effect=neon';
    document.head.appendChild(link);
    link.href = url;
};
