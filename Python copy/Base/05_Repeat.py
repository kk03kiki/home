# =============
# 反復構文
# =============

print("--- for文 ---")
# 配列の要素を一つずつ取り出し繰り返し処理を行う。

# rangeは配列（0~9が表示される）
print("0 - 9")
for i in range(10):
    print(i,end=",")
print()

# 1,2,3,4,5,6,7,8,9, と表示される（1~9が表示される）
print("1 - 9")
for i in range(1,10):
    print(i,end=",")
print()

# a,b,c,d,e,f,g,と表示される
print("文字を一文字ずつ取り出す")
str01 = "abcdefg"
for c in str01:
    print(c,end=",")
print()

# int01 = 0が10未満の時に表示される(0~9)
print("--- while文 ---")
print("0 - 9")
int01 = 0
while int01 < 10:
    print(int01,end=",")
    int01 += 1
print()

print("-- continue,break --")
# 乱数を発生させて
# 3の倍数のときは何も表示しない (continue)
# 3の倍数では無い時はメッセージ
# 4の時は終了 (break)

# 乱数ライブラリのインポート
import random
count = 0

while True:
    # カウントアップ
    count += 1
    # 乱数を発生(randint)
    rnd = random.randint(1,9)
    # 値の表示
    print(f"{count} : {rnd}")
    if rnd == 4:
        # whileを終了
        break
    elif rnd % 3 == 0:
        # whileの先頭に戻る
        continue
    print("3の倍数じゃないよ！")
print(f"{count}回繰り返しました。")
    

print("-- elseについて --")
# forとwhileに対するelseについて
arr01 = ["A","B","C","D"]

for element in arr01:
    print(element,end=",")
else:
    print("出力完了")


print("-- elseとbreakについて --")
# breakで終了した場合はelseが実行されない(出力完了でない)
for element in arr01:
    print(element,end=",")
    if element == "C":
        break
else:
    print("出力完了")


# おまけ
# 配列の要素と添字を扱いたい時にenumerate関数を利用する。
# →　番号を振りたい場合（enumerate　列挙型）
# →　enumerate(配列,何番から数えるか)
arr02 = ["りんご","みかん","もも","ぶどう","メロン"]
for index,element in enumerate(arr02,1):
    print(index,element)
