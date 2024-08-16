-- dummy.csvのデータで行います。
-- personal_dataテーブルを作成し、db.dbにインポートしてください。
CREATE TABLE
    personal_data (
        name TEXT,
        kana TEXT,
        age INTEGER,
        birthday TEXT,
        gender TEXT,
        email TEXT,
        tel TEXT,
        mobile TEXT,
        zip TEXT,
        prefectures TEXT,
        address TEXT
    );

 -- CSVを読み込む処理
.mode csv
-- import + 「csvデータのファイル保存先のURL」
.import C:\Users\hit0037\Documents\MainWorkspace\Database\P03_Advance\dummy.csv personal_data
-- import + 「csvファイル名」「tableの名前」
.import dummy.csv personal_data

-- 男性の平均年齢を出力してください。
-- 表示するカラムは平均年齢を出力する式を『平均年齢』としてください。(別名を使ってください。)
SELECT AVG(age) AS '平均年齢' FROM personal_data WHERE gender = '男';

-- 東京都在住の女性の合計年齢を出力してください。
-- 表示するカラムは合計年齢を出力する式を『合計年齢』としてください。(別名を使ってください。)
SELECT SUM(age) AS '平均年齢' FROM personal_data WHERE gender = '女' AND prefectures = '東京都';


-- 『東京都』、『大阪府』、『京都府』に住んでいる人の人数を昇順にして表示してください。
-- 表示するカラムは『東京都』、『大阪府』、『京都府』を『都道府県』としてください。
-- 数を数えるカラムはを『人数』としてください。
SELECT prefectures AS 都道府県, COUNT() AS 人数 FROM personal_data GROUP BY prefectures HAVING prefectures IN('東京都','大阪府','京都府') ORDER BY 人数 ASC;

-- 全国の平均年齢以上の住んでいる人の人数を昇順にして表示してください。
-- 表示するカラムはすべて日本語表記にしてください。
-- 数を数えるカラムはを『人数』としてください。
SELECT prefectures AS 都道府県, COUNT() AS 人数 FROM personal_data WHERE age >= (SELECT AVG(age) FROM personal_data) GROUP BY prefectures ORDER BY 人数 ASC;