import {Component, Input, OnInit} from '@angular/core';
import skillsConfig from '../../assets/skill-config.json';
import skillsData from '../../assets/skills.json';

interface Skill {
  name: string;
  type: string;
}

interface SkillConfig {
  name: string;
  displayName: string;
  badgeColor: string;
}

@Component({
  selector: 'app-skill-element',
  templateUrl: './skill-element.component.html',
  styleUrl: './skill-element.component.css'
})

export class SkillElementComponent implements OnInit {
  @Input() skillName: string = '';
  skillBadge: string | undefined = '';


  ngOnInit() {
    console.log('skillName=' + this.skillName)
    let skills: Skill[] = [];
    // @ts-ignore
    let skillsTypes: SkillConfig[] = skillsConfig;
    if (skills.length == 0) {
      skills = skillsData;
    }
    const found = findSkillByName(skills, this.skillName);
    const foundType = found?.type;
    this.skillBadge = findBadgeColor(skillsConfig, foundType)
    console.log("badge=" + this.skillBadge)
  }
}

function findSkillByName(skills: Skill[], skillName: string): Skill | undefined {
  return skills.find(skill => skill.name.toLowerCase() === skillName.toLowerCase());
}

function findBadgeColor(skillTypes: any, name: string | undefined): string | undefined {
  if(name == undefined) {
    return "badge-dark"
  }
  const skillType = skillTypes[name];
  if (skillType) {
    return skillType.badgeColor;
  }
  return skillType;
}

