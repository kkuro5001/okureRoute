# サーバーの起動方法
cd backend
venv\Scripts\Activate # 仮想環境を有効化
cd ../app
python main.py # Flaskサーバー起動(http://127.0.0.1:5000/api/hello)

cd frontend
npm start # React起動 (http://localhost:3000)

# git branch関連
git branch <ブランチ名> #ブランチの作成
git checkout <ブランチ名> #ブランチの切り替え
git branch -d <ブランチ名> #ブランチの削除


# Gitで変更をpushする方法

# ルートフォルダに戻る
cd ../

# 変更をステージング
git add .

# コミット
git commit -m "作業内容の説明を書く"

# リモートに push
git push origin ブランチ名

# Github慈雨でPull Requestを作成
# 承認後それがマージされる

# リモートの最新情報を取得 (masterブランチに反映する場合)
git checkout master # master に切り替え
git pull origin master #リモートmasterの変更をマージ
