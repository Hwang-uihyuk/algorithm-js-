function solution(s) {
    s = s.toLowerCase().split(' ')
    s = s.map(v => v !=='' ? v[0].toUpperCase()+v.slice(1,v.length) : '').join(' ')
    // test = 'my. name   is hyu'
    // console.log(test.split(' '))
    return s;
}