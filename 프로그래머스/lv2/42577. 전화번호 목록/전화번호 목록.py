def solution(phone_book):
    # 1.Hash map 생성
    hash_map = dict()
    for number in phone_book: 
        # 1개의 전화번호가 존재한다는 의미
        hash_map[number] = 1
        
    # 2.접두어가 Hash map에 존재하는지 찾기 
    for number in phone_book: 
        prefix = ""
        for num in number: 
            prefix += num
    
            # 3. 내 번호가 아니고, Hash map에 있다면
            if prefix != number and prefix in hash_map:
                return False
        
    return True