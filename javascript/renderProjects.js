class Projects {
    static clearOtherRoot(rootId) {
        const otherRoot = document.getElementById(rootId);
        while(otherRoot.firstChild) {
            otherRoot.removeChild(otherRoot.firstChild);
        }
    }

    constructor(project, root) {
        this.proj = project;
        this.rootDiv = document.getElementById(root);
        this.render();
    }
    
    render() {
        const projectEl = document.createElement('div');
        projectEl.classList.add('card', 'rounded-3', 'shadow-sm', 'mb-3');
        this.rootDiv.append(projectEl);

        // create card body
        const projectBodyEl = document.createElement('div');
        projectBodyEl.classList.add('card-body');
        projectEl.append(projectBodyEl);

        // create card body h4
        const bodyH4 = document.createElement('h4');
        bodyH4.classList.add('card-title', 'mb-3');
        bodyH4.textContent = this.proj.name;
        // create icon for h4
        const h4Icon = document.createElement('i');
        h4Icon.className = `${this.proj.icon} mr-2`;
        bodyH4.insertAdjacentElement('afterbegin', h4Icon);
        projectBodyEl.append(bodyH4);
        
        // create project link
        const projLinkEl =  document.createElement('p');
        projLinkEl.classList.add('p-2', 'mb-3', 'bg-dark', 'text-white');
        const projLink = document.createElement('a');
        projLink.className = ('text-white');
        projLink.setAttribute('href', this.proj.link);
        projLink.setAttribute('target', '_blank');
        projLink.textContent = this.proj.link;
        projLinkEl.append(projLink);
        projectBodyEl.append( projLinkEl);

        // create highlight container
        const projectHighlightEl = document.createElement('div');
        projectHighlightEl.classList.add('p-2', 'mb-3', 'bg-dark', 'text-white');
        const h6Highlight = document.createElement('h6');
        h6Highlight.textContent = 'Highlights'
        // create highlight list
        const ulHighlight = document.createElement('ul');
        this.proj.highlights.forEach(highlight => {
            const list = document.createElement('li');
            list.textContent = highlight;
            ulHighlight.append(list);
        });
        // append both h6 and ul to card body
        projectHighlightEl.append(h6Highlight);
        projectHighlightEl.append(ulHighlight);
        projectBodyEl.append(projectHighlightEl);

        // create card footer
        const projectFooterEl = document.createElement('div');
        projectFooterEl.classList.add('card-footer');
        const footer =  document.createElement('p');
        footer.classList.add('text-lead');
        footer.textContent = this.proj.description;
        projectFooterEl.append(footer);
        projectBodyEl.append(projectFooterEl);
    }
}

// Toggle between large and smaller screens
const renderProjects = () => {
    if (window.innerWidth > 992) {
        // Collapsible Menu
        Projects.clearOtherRoot('accordionProjects');
        Projects.clearOtherRoot('projects');
        projectList.forEach(proj => new Projects(proj, 'projects'));
    } else {
        // Accordion Menu
        Projects.clearOtherRoot('projects');
        Projects.clearOtherRoot('accordionProjects');
        projectList.forEach(proj => new Projects(proj, 'accordionProjects'));
    }
};

renderProjects();
window.addEventListener('resize', renderProjects);