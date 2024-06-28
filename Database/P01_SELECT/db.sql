--tableを作る
CREATE TABLE personal_data(name TEXT,kana TEXT,age INTEGER,birthday TEXT,gender TEXT,email TEXT,tel TEXT,mobile_tel TEXT,zip TEXT,address TEXT,credit TEXT,exp TEXT)

-- CSVを読み込む処理
.mode csv
-- import + 「csvデータのファイル保存先のURL」
.import C:\Users\hit0037\Documents\MainWorkspace\Database\P01_SELECT\dummy.csv personal_data
-- import + 「csvファイル名」「tableの名前」
.import dummy.csv personal_data

-- tableの削除
DROP TABLE product_master;

-- カラム一番上が例のため、消す処理
DELETE FROM personal_data WHERE name = '氏名'


-- 35以上の人のデータを摘出してください。
-- 表示するカラムは『氏名』『年齢』『住所』
SELECT name,age,address
 FROM personal_data
  WHERE age >= 35;

-- 34以下の男性のデータを抽出してください。
-- 表示するカラムは『氏名』と『年齢』と『住所』
-- でてこない！！！！
SELECT name,age,address
 FROM product_master
  WHERE age <= 34 AND gender = '男';


-- 4月生まれの女性のデータを摘出してください
-- 表示するカラムは『氏名』『年齢』『住所』
SELECT name,age,address
 FROM personal_data
  WHERE birthday LIKE '%04月%' AND gender = '女';


-- 大阪府在住の人のデータを摘出してください
-- 表示するカラムは『氏名』と『住所』
SELECT name,address
 FROM personal_data
  WHERE address LIKE '大阪府%';

-- 追加問題
-- 30歳代の東京在住の男性のデータを抽出してください。
-- 表示するカラムは『氏名』と『メールアドレス』
SELECT name,email ,age
FROM personal_data 
WHERE age BETWEEN 30 AND 39 AND address LIKE '東京都%' AND gender = '男' ;

-- 大阪府、京都府、兵庫県、滋賀県、奈良県、和歌山県在住の人のデータを抽出してください。
-- 表示するカラムは『年齢』と『住所』
SELECT name,address
FROM personal_data 
WHERE address LIKE '大阪府%' OR address LIKE '京都府%' OR address LIKE '兵庫県%' OR address LIKE '滋賀県%' OR address LIKE '奈良県%' OR address LIKE '和歌山県%';


-- 氏名に『木』が含まれるが氏名（ひらがな）に『き』が含まれない人のデータを抽出してください。
-- 表示するカラムは『氏名』と『年齢』と『メールアドレス』
SELECT name,age,email
FROM personal_data 
WHERE name LIKE '%木%' and kana NOT LIKE '%き%' ;
