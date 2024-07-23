from flask_wtf import FlaskForm
from wtforms import StringField, EmailField, SubmitField
from wtforms.validators import DataRequired, Email

class InputForm(FlaskForm){
    name = StringField('名前', [validators=('入力必須')])
    email = EmailField'メールアドレス',validators=[Email('メールアドレスのフォーマットではありません')]
    submit =SubmitField('送信')
}