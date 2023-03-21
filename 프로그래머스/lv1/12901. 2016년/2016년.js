function solution(a, b) {
        let arr = ['SUN',"MON","TUE",'WED','THU','FRI','SAT']
        let qwe = new Date(`'2016/${a}/${b}'`).getDay();
        
       
        return arr[qwe]
}