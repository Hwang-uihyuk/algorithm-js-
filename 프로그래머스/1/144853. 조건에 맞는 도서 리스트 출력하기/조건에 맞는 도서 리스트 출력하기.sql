-- 코드를 입력하세요
SELECT BOOK_ID, DATE_FORMAT(PUBLISHED_DATE, '%Y-%m-%d') as published_date
FROM book
where category = '인문' and YEAR(published_date) = 2021
order by published_date
