class Skills {
    static clearOtherRoot(rootId) {
        const otherRoot = document.getElementById(rootId);
        while(otherRoot.firstChild) {
            otherRoot.removeChild(otherRoot.firstChild);
        }
    }

    constructor(skills, root) {
        this.skills = skills;
        this.rootDiv = document.getElementById(root);
        this.render();
    }

    render() {
        // create h4 element
        const h4El = document.createElement('h4');
        h4El.textContent = this.skills.name;
        // create icon 
        const icon = document.createElement('i');
        icon.className = `${this.skills.icon} mr-2`;
        h4El.insertAdjacentElement('afterbegin', icon);

        this.rootDiv.append(h4El);
    }
}

// Toggle between large and smaller screens
const renderSkills = () => {
    if (window.innerWidth > 992) {
        // Collapsible Menu
        Skills.clearOtherRoot('accordionSkills')
        skillList.forEach(skill => new Skills(skill, 'mySkills'));
    } else {
        // Accordion Menu
        Skills.clearOtherRoot('mySkills')
        skillList.forEach(skill => new Skills(skill, 'accordionSkills'));
    }
};

renderSkills();
window.addEventListener('resize', renderSkills);