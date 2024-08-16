-- 並び替え（年齢を昇順）
SELECT * FROM personal_data ORDER BY age ASC;

-- 並び替え（年齢を降順）
SELECT * FROM personal_data ORDER BY age DESC;

-- グルーピング（性別でグルーピング）（グルーピングはグループ化）
SELECT * FROM personal_data GROUP BY gender;

-- 集計(データの工数取得)
SELECT COUNT() FROM personal_data;

-- 性別でグルーピングを行って個数を取得
SELECT gender, COUNT() FROM personal_data GROUP BY gender;

-- 性別でグルーピングを行って個数を取得
SELECT gender, COUNT() FROM personal_data GROUP BY gender HAVING gender = 2;

