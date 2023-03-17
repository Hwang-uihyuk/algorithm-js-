function solution(slice, n) {
    //slice 는 조각수
    // n은 몇명
    // 무조건 slice 배수로 더해줘야함
    for(let i = 1; i<1000; i++)
        {
            //slice 는 조각수인데 
            // 갯수랑 
            if(slice*i >= n)
            {
                res = i
                break
            }
        }
    
    return res

}