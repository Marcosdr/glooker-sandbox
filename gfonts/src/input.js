export const draw = (data) => {
    console.log(data);
    function getTitle(data) {
        let title = data.style.title.defaultValue;

        if (data.style.title.value.length > 0) {
            title = data.style.title.value;
        }
        title = '<div class="heading">' + title + '</div>';
        return title;
    }

    function getSection(data) {
        let section = data.style.section.defaultValue;

        if (data.style.section.value.length > 0) {
            section = data.style.section.value;
        }
        section = '<div class="section">' + section + '</div>';
        return section;
    }

    function getContent(data) {
        let content = data.style.content.defaultValue;

        if (data.style.content.value.length > 0) {
            content = data.style.content.value;
        }
        content = '<div class="content">' + content + '</div>';
        return content;
    }

    function getParagraph(data) {
        let paragraph = data.style.paragraph.defaultValue;

        if (data.style.paragraph.value.length > 0) {
            paragraph = data.style.paragraph.value;
        }
        paragraph = '<div class="paragraph">' + paragraph + '</div>';
        return paragraph;
    }

    if (document.querySelector('div')) {
        var oldDiv = document.querySelector('div');
        oldDiv.parentNode.removeChild(oldDiv);
    }
    let inputDiv = document.createElement('div');
    inputDiv.innerHTML = getTitle(data) + getSection(data) + getParagraph(data) + getContent(data);
    document.body.appendChild(inputDiv);
};