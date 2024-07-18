# =============
# Web
# =============

import requests
import json

# DogAPI
# API通信を開始
URL = "https://dog.ceo/api/breeds/image/random"
# リクエストを送信し、レスポンスを取得
res = requests.get(URL)
# レスポンスのテキストデータを取得
dat = res.text
# テキストをjson解析(dict型に変換)
dic = json.loads(dat)
# 表示
print(dic["message"])

# 犬の画像の取得
res2 = requests.get(dic["message"])
# バイナリデータとして取得
dat2 = res2.content
# ファイルを（バイナリデータの）画像のデータとして書き込み
file = open("InputOutput/dog.jp","wb")
# 書き込み
file.write(dat2)
# 書き込み終了
file.close()