import { skillList } from './data/skillList.js';

class Skills {
    static clearOtherRoot(rootId) {
        const otherRoot = document.getElementById(rootId);
        while(otherRoot.firstChild) {
            otherRoot.removeChild(otherRoot.firstChild);
        }
    }

    constructor(skills, root) {
        this.id = skills.name;
        this.skills = skills;
        this.rootDiv = document.getElementById(root);
        this.render();
        this.draggable();
    }

    render() {
        // create h4 element
        const h4El = document.createElement('h4');
        h4El.setAttribute('draggable', true);
        h4El.setAttribute('id', this.id);
        h4El.classList = 'skill p-1';
        h4El.textContent = this.skills.name;
        // create icon 
        const icon = document.createElement('i');
        icon.className = `${this.skills.icon} mr-2`;
        h4El.insertAdjacentElement('afterbegin', icon);

        this.rootDiv.append(h4El);
    }

    draggable() {
        document.getElementById(this.id).addEventListener('dragstart', event => {
            event.dataTransfer.setData('text/plain', this.id);			
            event.dataTransfer.effectAllowed = 'move';
            document.getElementById(this.id).classList.add('droppable');
        });

        document.getElementById(this.id).addEventListener('dragend', event => {
            document.getElementById(this.id).classList.remove('droppable');			
           
        });
    }
}

// Toggle between large and smaller screens
export const renderSkills = () => {
    if (window.innerWidth > 992) {
        // Collapsible Menu
        Skills.clearOtherRoot('accordionSkills');
        Skills.clearOtherRoot('mySkills');
        skillList.forEach(skill => new Skills(skill, 'mySkills'));
    } else {
        // Accordion Menu
        Skills.clearOtherRoot('mySkills');
        Skills.clearOtherRoot('accordionSkills');
        skillList.forEach(skill => new Skills(skill, 'accordionSkills'));
    }
};

// Skills drag and drop
export const dragAndDrop = () => {
    document.querySelectorAll('.skill').forEach(skill => {
        skill.addEventListener('dragenter', event => {
            if (event.dataTransfer.types[0] === 'text/plain') {						
                event.preventDefault();
            event.target.classList.add('over');			
            }						
        });

        skill.addEventListener('dragleave', event => {								
            event.target.classList.remove('over');
        });

        skill.addEventListener('dragover', event => {								
            event.preventDefault();
            return false;
        });

        skill.addEventListener('drop', event => {
            // stops the browser from redirecting.
            event.stopPropagation();        

            const skillId = event.dataTransfer.getData('text/plain');
            let draggable = document.getElementById(skillId);

            let target = null;
            if (draggable === skill) return;

            // exchange innerHTML with target element
            target = skill.innerHTML;
            skill.innerHTML = draggable.innerHTML;
            draggable.innerHTML = target;

            event.target.classList.remove('over');
        });
    });
};
