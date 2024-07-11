# =============
# 配列
# =============
print("-- 配列 --")

# 文字列の配列
arr01 = ["a","b","c","d"]
print(arr01)
print(type(arr01))

# 様々な型を混同させることができる。
arr01 = ["a",1,False]
print(arr01)
print(type(arr01))

# 要素の取得方法
print("-- 要素の取得 --")
print(arr01[0])
print(arr01[1])
print(arr01[2])
# 示す要素がない場合のエラー
# print(arr01[3])
# IndexError: list index out of range

# 配列操作
print("-- 要素の操作 --")
arr01 = [6,4,8,6,5,2]
print(arr01)

# 要素の追加
# →　arr01 = [6,4,8,6,5,2]の配列最後に３が入る[6,4,8,6,5,2,3]に変更
arr01.append(3)
print(arr01)

# 要素の挿入
# →　arr01 = [6,4,8,6,5,2]　→　arr01 = [6,4,3,8,6,5,2]
arr01.insert(2,3)
print(arr01)

# 要素の削除
# その要素の値を削除(インデックスじゃないので気をつけて！)
# →　指定した要素の値を消す。※同じ値があれば左から消えていく。
arr01.remove(6)
print(arr01)

# インデックスを指定して削除する場合は
# →　左から４番目が消える
del arr01[4]
print(arr01)

# 要素を取得してからその要素を削除する。
print(arr01.pop())
print(arr01)

# 要素を取得してからその要素を削除する。(インデックス指定版)
print(arr01.pop(0))
print(arr01)

# 指定した要素の数
print(arr01.count(6))

# 配列の要素数の取得
print(len(arr01))

# ソート
arr01.sort()
print(arr01)

# 全削除
arr01.clear()
print(arr01)

# for文と組み合わせ
# ループ（何回繰り返すか）
arr01 = ["A","B","C","D","E"]

for element in arr01:
    print(element)
else:
    print("出力完了")


# 別
for count in range(2):
    print("おはよう")
    print("さよなら")



# while文と組み合わせ
# →　whileはTrueである限り回り続ける。ifを入れないと永遠にループしてしまう
print("-- while文と組み合わせ --")
while True:
    if len(arr01) == 0:
        break
    elif len(arr01) == 1:
        print(arr01.pop(0))
    else:
        # 上記elifに当てはまらない場合に動く（必ず記入しなくてもよい）
        print(arr01.pop(0),end=",")

