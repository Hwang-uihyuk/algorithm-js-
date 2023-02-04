function solution(arr) {
    //만약에 [4,3,1,2] 이건데 여기서 가장 작은거
    let minVal = Math.min.apply(null,arr)
    let fil = arr.filter(v => v !== minVal)
    return fil.length > 0 ? fil : [-1];
}