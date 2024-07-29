# =============
# エクセル操作
# =============
# Python公式ではないので、DLする
import openpyxl

# ワークブックを作成
wb = openpyxl.Workbook()
# アクティブシートを取得
ws = wb.active
# A1セルに書き込み
ws["A1"] = "Excelこんにちは"
# ブックの保存
wb.save("InputOutput/ExcelFile.xlsx")
