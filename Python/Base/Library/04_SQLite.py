# =============
# データベース
# =============

import sqlite3

# 接続処理
# →　con=connectionの略
con = sqlite3.connect("InputOutput/Person.db")

# # テーブル生成
# # SQLをテキストで準備
# sql = "CREATE TABLE person(id,name,gender,age)"
# # SQL実行
# con.execute(sql)

# →　上記一度実行後、2回目実行するとalready(すでに作成済み)と
# →　データを削除して再度実行するコードをいれて実行　DROP TABLE product_master;


# レコード挿入
sql = "INSERT INTO person VALUES(1,'木内和也',1,35)"
# executeで実行
con.execute(sql)

# 全件取得
sql = "SELECT * FROM person"
# 戻り値を受け取る
res = con.execute(sql)

# カーソル型なので表示できない
# print(res)
for record in res:
    print(record)

# 更新
sql = "UPDATE person SET name='{}' WHERE id={}".format("木内和也1",1)
con.execute(sql)

# コミット
con.commit()
# 接続解除
con.close()

