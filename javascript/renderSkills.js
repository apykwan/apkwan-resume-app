class Skills {
    constructor(skills) {
        this.skills = skills;
        this.render();
    }

    render() {
        const rootDiv = document.getElementById('mySkills');

        // create h4 element
        const h4El = document.createElement('h4');
        h4El.textContent = this.skills.name;
        // create icon 
        const icon = document.createElement('i');
        icon.className = `${this.skills.icon} mr-2`;
        h4El.insertAdjacentElement('afterbegin', icon);

        rootDiv.append(h4El);
    }
}

skillList.forEach(skill => new Skills(skill));