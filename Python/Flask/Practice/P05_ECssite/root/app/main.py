# Shopの商品一覧画面へ遷移

from flask import Flask, render_template
from shop import shop_blueprint

app = Flask(__name__)
app.register_blueprint(shop_blueprint)

@app.route('/')
def index():
  return render_template('index.html')

if __name__ == '__main__':
  app.run(debug=True)