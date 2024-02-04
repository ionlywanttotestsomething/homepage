import { Component, Input, OnInit } from '@angular/core';
import skillsConfig from '../../../assets/skill-config.json';
import skillsData from '../../../assets/skills.json';
import { Skill } from '../../models/skill';

@Component({
  selector: 'app-skill-element',
  templateUrl: './skill-element.component.html',
  styleUrl: './skill-element.component.css',
})
export class SkillElementComponent implements OnInit {
  @Input() skillName: string = '';
  skillBadge: string | undefined = '';

  ngOnInit() {
    let skills: Skill[] = [];
    if (skills.length == 0) {
      skills = skillsData;
    }
    const found = findSkillByName(skills, this.skillName);
    const foundType = found?.type;
    this.skillBadge = findBadgeColor(skillsConfig, foundType);
  }
}

function findSkillByName(skills: Skill[], skillName: string): Skill | undefined {
  return skills.find((skill) => skill.name.toLowerCase() === skillName.toLowerCase());
}

function findBadgeColor(skillTypes: any, name: string | undefined): string | undefined {
  if (name == undefined) {
    return 'badge-dark';
  }
  const skillType = skillTypes[name];
  if (skillType) {
    return skillType.badgeColor;
  }
  return skillType;
}
