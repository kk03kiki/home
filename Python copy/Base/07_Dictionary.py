# =============
# 辞書型
# =============
print("-- 辞書型 --")

# 波括弧で宣言
dic01 = {1:"abc",3:"def"}

# 取得方法
print(dic01[1],dic01[3])
print(type(dic01))

dic01 = {True:"t",False:"f",30:"abc","abc":30}
print(dic01)
print(dic01)
print(dic01[True])
print(dic01[False])
print(dic01[30])
print(dic01["abc"])


# 要素の操作

# 要素の編集(既存のkeyの値を編集)
dic01["abc"] = 50
print(dic01)

# 要素の追加(新しいのkeyの値を編集)
dic01["aaa"] = 90
print(dic01)

# 要素の削除
# →　値だけが消える　30: ''  ※keyが消えるわけではない
print(dic01.pop(30))
print(dic01)



# 存在しないKeyを指定した場合
# print(dic01["bbb"])

# 存在するかCheck
print("bbb" in dic01)
print("aaa" in dic01)

# Keyが存在しない時
print(dic01.get("bbb"))# Keyが存在しない場合はNoneになる。
print(dic01.get("aaa"))
