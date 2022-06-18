class Skills {
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

// Collapsible Menu
skillList.forEach(skill => new Skills(skill, 'mySkills'));

// Accordion Menu
skillList.forEach(skill => new Skills(skill, 'accordionSkills'));