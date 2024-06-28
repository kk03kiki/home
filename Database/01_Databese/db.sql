--tableを作る
-- →　コメントを付けるときはハイフン２つ（--）
CREATE TABLE product_master(number TEXT, name TEXT, maker TEXT, price INTEGER);

--tableを削除する
DROP TABLE product_master;

--データの挿入（追加）
INSERT INTO product_master VALUES('A-123-Z', 'キッチンペーパー', '大阪製紙', 248);
INSERT INTO product_master VALUES(' B-345-Y', 'ティッシュペーパー', ' 京都ペーパー', 398);
INSERT INTO product_master VALUES('A-567-X', 'クッキングシート', '滋賀キッチン', 128);
INSERT INTO product_master VALUES('C-111-Z', 'バススポンジ', '滋賀キッチン', 98);
INSERT INTO product_master VALUES(' B-987-X', '綿棒', '奈良綿業', 98);
INSERT INTO product_master VALUES(' B-987-X', 'スポーツドリンク', '奈良綿業', 98);
INSERT INTO product_master VALUES(' B-987-X', 'ニュースペーパー', '奈良綿業', 98);
INSERT INTO product_master VALUES(' B-987-X', 'トイレットペーパー', '奈良綿業', 98);
INSERT INTO product_master VALUES(' B-987-X', 'スポーツドリンク', '奈良綿業', 98);
INSERT INTO product_master VALUES(' B-987-X', 'ペーパータオル', '奈良綿業', 98);

--すべてのデータのすべてのカラムを取得する
SELECT * FROM product_master;

--すべてのデータの製品名を取得する
SELECT name FROM product_master

--製品名が「バススポンジ」のデータを取得する
SELECT * FROM product_master WHERE name = 'バススポンジ'

--単価が100以上の製品名を取得する
SELECT name FROM product_master WHERE price >= 100



--価が100円以上300円未満の製品名を取得する
SELECT name, FROM product_master WHERE price >= 100 and price < 300;
--別解（BERWEEN句）以上、以下なので、上のSQLと微妙に違うので注意
SELECT name, FROM product_master WHERE price BETWEEN 100 AND 300;

--単価が100円未満か300円以上の製品名と個数を取得する
SELECT name quantity FROM product_master WHERE price < 100 OR price >= 300;

--製品名が「バススポンジ」と「綿棒」のデータを取得する
SELECT * FROM product_master WHERE name = 'バススポンジ' OR name = '綿棒' ;
--指定したリストとの比較
SELECT * FROM product_master WHERE name IN('バススポンジ','綿棒') ;


--あいまい検索
SELECT * FROM product_master WHERE name LIKE '%スポ%';

-- 前方一致
SELECT * FROM product_master WHERE name LIKE 'スポ%';

-- 後方一致
SELECT * FROM product_master WHERE name LIKE '%スポ';

-- レコードの更新
-- 更新されない！！！
UPDATE product_master SET name = 'キッチンペーパーホルダー02' WHERE number= 'A-223-Z';

-- レコードの削除
DELETE FROM product_master WHERE number = 'A-223-Z'



