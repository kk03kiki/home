# =============
# 自作ライブラリの利用とCUIアプリケーション
# =============
import Logic
from DatabaseManager import db,ses

print("DBシステムを開始しました。")

# 課題：
# 更新機能と削除機能を追加してください。
# 更新機能の仕様：
# 変更したいカラムに文字を入力
# 空白にした場合は変更なし
# 削除機能は物理削除で実装してください。

# 無限ループ
while True:
    cmd = input("[1]追加[2]確認[q]終了[u]更新[d]削除\n>")
    if cmd == "1":# データの追加
        print("データを追加します。")
        Logic.add(ses)
    elif cmd == "2":# データの確認
        print("データを確認します。")
        Logic.getAll(ses)
    elif cmd == "q" or cmd == "Q":# システムの終了
        break
    elif cmd == "u": #データの更新
        print("データを更新します。")
        Logic.getUpdate(ses)
    elif cmd == "d": #データの削除
        print("データを削除します。")
        Logic.getDelete(ses)

# DBの終了処理
db.dispose()
print("システムが終了しました。")
    