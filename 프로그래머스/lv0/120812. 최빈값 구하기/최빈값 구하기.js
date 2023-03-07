function solution(array) {
    let cnt = new Array(Math.max(...array) + 1).fill(0);

    for (let i = 0; i < array.length; i++) {
        cnt[array[i]]++;
    }

    let maxVal = Math.max(...cnt);
    let indices = [];
    for (let i = 0; i < cnt.length; i++) {
        if (cnt[i] === maxVal) {
            indices.push(i);
        }
    }

    return indices.length === 1 ? indices[0] : -1;
}