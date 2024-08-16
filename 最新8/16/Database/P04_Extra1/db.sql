-- 学生テーブル
-- 学籍番号,氏名,性別
CREATE Table
    student (no TEXT, name TEXT, gender TEXT);

-- '0001','長岡 一馬','男'
-- '0002','中本 知佳','女'
-- '0003','松本 義文','男'
-- '0004','佐竹 友香','女'
INSERT INTO student VALUES('0001','長岡 一馬','男');
INSERT INTO student VALUES('0002','中本 知佳','女');
INSERT INTO student VALUES('0003','松本 義文','男');
INSERT INTO student VALUES('0004','佐竹 友香','女');

-- 試験結果テーブル
-- 学籍番号,教科,点数
CREATE Table
    test_result (no TEXT, subject TEXT, score INTEGER);
-- 0001,国語,30
-- 0001,英語,30
-- 0002,国語,70
-- 0002,数学,80
-- 0003,理科,92
-- 0004,社会,90
-- 0004,理科,35
-- 0004,英語,22
INSERT INTO  test_result VALUES('0001','国語',30);
INSERT INTO  test_result VALUES('0001','英語',30);
INSERT INTO  test_result VALUES('0002','国語',70);
INSERT INTO  test_result VALUES('0002','数学',80);
INSERT INTO  test_result VALUES('0003','理科',92);
INSERT INTO  test_result VALUES('0004','社会',90);
INSERT INTO  test_result VALUES('0004','理科',35);
INSERT INTO  test_result VALUES('0004','英語',22);

-- 性別が男である生徒の名前を一覧で表示せよ。
SELECT name FROM student WHERE gender = '男';

-- 1教科でも30点以下の点数を取った生徒の名前を一覧で表示せよ。
-- ただし、重複は許さないものとする。
SELECT DISTINCT name FROM student JOIN test_result ON student.no = test_result.no WHERE score <= 30;

-- 性別ごとに、最も高かった試験の点数を表示せよ。
SELECT gender, MAX(score) FROM student JOIN test_result ON student.no = test_result.no GROUP BY gender;

-- 教科ごとの試験の平均点が50点以下である教科を表示せよ。
SELECT subject FROM test_result WHERE 50 >= (SELECT AVG(score) FROM test_result test_avg WHERE test_avg.subject = test_result.subject) GROUP BY subject;

-- 試験結果テーブルの点数の右に、その教科の平均点を表示せよ。
SELECT test_result.* , (SELECT AVG(score) FROM test_result test_avg WHERE test_avg.subject = test_result.subject) 平均点 FROM test_result;


