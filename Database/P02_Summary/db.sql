-- テーブル作成
CREATE TABLE data_table(number INTEGER, name TEXT,height INTEGER, weight INTEGER)

--tableを削除する
DROP TABLE data_table;

-- データを挿入
INSERT INTO data_table VALUES(1, '近本光司', 168, 60);
INSERT INTO data_table VALUES(2, '中野拓夢', 172, 80);
INSERT INTO data_table VALUES(3, '森下翔太', 180, 100);
INSERT INTO data_table VALUES(4, '大山悠輔', 158, 45);
INSERT INTO data_table VALUES(5, '佐藤輝明', 182, 94);
INSERT INTO data_table VALUES(6, '原口文仁', 165, 67);
INSERT INTO data_table VALUES(7, '坂本誠士郎', 177, 72);
INSERT INTO data_table VALUES(8, '木浪聖也', 158, 45);
INSERT INTO data_table VALUES(9, '木岩崎優', 168, 73);


-- 1. このクラスの人数を出力する
SELECT COUNT() FROM data_table;

-- 2. このクラスの身長の平均値を出力する
--  SELECT avg(身長) FROM 生徒テーブル
SELECT AVG(height)FROM data_table;

-- 3. 身長が一番高い人の名前と身長を出力する
SELECT name, MAX(height) FROM data_table;

-- 4. 体重が一番軽い人の名前と体重を出力する
SELECT name, MIN(weight) FROM data_table;

-- 5. 全員の体重の合計を出力する
-- SELECT sum(個数) FROM 在庫テーブル
SELECT SUM(weight) FROM data_table;

-- 6. 各人のBMIを計算して、名前とBMI値を出力する
-- 例))SELECT 製品名, 個数*単価 from 在庫テーブル
-- ※BMI = 体重 / 身長(m) × 身長(m)
SELECT name, (weight/(0.01*height)*(0.01*height)) FROM data_table;
-- BMW蚤の場合は→　
SELECT (weight/(0.01*height)*(0.01*height)) AS BMI FROM data_table;




-- dummy.csvを使用
-- personal_dataテーブルを作成し、db.dbにインポート
--tableを作る
CREATE TABLE personal_data(name TEXT,kana TEXT,age INTEGER,birthday TEXT,gender TEXT,email TEXT,tel TEXT,mobile_tel TEXT,zip TEXT,address TEXT,credit TEXT,exp TEXT)

-- CSVを読み込む処理
.mode csv
-- import + 「csvデータのファイル保存先のURL」
.import C:\Users\hit0037\Documents\MainWorkspace\Database\P01_SELECT\dummy.csv personal_data
-- import + 「csvファイル名」「tableの名前」
.import dummy.csv personal_data

-- 男性の平均年齢を出力
-- 表示するカラムは平均年齢を出力する式を『平均年齢』としてください。（別名を使用）
SELECT avg(age)FROM personal_data;

-- 『東京都』、『大阪府』、『京都府』に住んでいる人の人数を昇順にして表示
