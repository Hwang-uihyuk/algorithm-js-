function solution(skill, skill_trees) {
        const skill_regex = new RegExp(`[^${skill}]`, 'g');
    
       console.log( skill_trees.map(tree => tree.replace(skill_regex, '')))
    
    skill_trees = skill_trees.map(tree => tree.replace(skill_regex, ''))
      	.filter(tree => !skill.indexOf(tree))
    
    console.log(skill_trees)
    
    return skill_trees.length;
}