# -------------
# 変数とデータ型
# -------------

# 変数の宣言は不必要（初期化(値？)は必要）
# →　printは出力
print("--- 整数型 ---")
int01 = 123
print(int01)

# データ型の表示
# →　　typeは型の出力？
print(type(int01))
print(type(10))

print("10進数")
print(10)

print("2進数")
print(0b10)

print("10進数")
print(0o10)

print("10進数")
print(0x10)
# print(0x1c) 確認用



print("--- 浮動小数点型 ---")
float01 = 1.23
print(float01)
print(type(float01))

# 指数指定
print(1.2e-5)
print(type(1.2e-5))



print("--- 文字列型 ---")
# ""と''の違いはあるのか？を確認
str01 = "abc"
str02 = 'abc'

print(str01,str02)
print(type(str01),type(str02))



print("--- 論理型 ---")
# 頭文字は大文字で書く
bool01 = True
bool02 = False

print(bool01,bool02)
print(type(bool01),type(bool02))


