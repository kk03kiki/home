# 1の段から9の段までの答えを出力してください。
for i in range(1, 10):
	for j in range(1, 10):
		print(i * j)



# 1の段から9の段までの式と答えをセットで出力してください。

# 揃えない場合
# for i in range(1, 10):
# 	for j in range(1, 10):
# 		print(f"{i} * {j} = {i*j}", end=" ")
# 	print()
	
# 揃える場合
for i in range(1, 10):
    for j in range(1, 10):
        kirei=i * j
        # 答えのマスが最大２マスなので、３でも可能
        print(f'{kirei:>4}', end="")
    print()

# 先生の回答
#     for i in range(1,10):
#     for j in range(1,10):
#         print(f"{i} * {j} = {i*j}")


# 1の段から9の段までの九九表を出力してください。
for i in range(1,10):
    for j in range(1,10):
        ans = i * j
        print(ans,end=" ") if ans > 9 else print(" ",ans,end=" ",sep="")
    print()
