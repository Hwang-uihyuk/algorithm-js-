function solution(skill, skill_trees) {
    let res = 0
    
    let filteredTrees = skill_trees.map(tree => 
        tree.split("").filter(ele => skill.includes(ele))
    )
    
    for(let i = 0; i<filteredTrees.length; i++){
        let isVal = true;
        for(let j = 0; j <filteredTrees[i].length; j++){
            if(skill[j] !==filteredTrees[i][j]){
                isVal = false;
                break
            }
        }
        if(isVal) res ++
    }
    return res
//     //skill의 요소들이 있는지 확인
//     let filteredTrees = skill_trees.map(tree => {
//         return tree.split("").filter(ele => skill.includes(ele))
//     });
    
//     console.log(filteredTrees)
//     return skill;
}