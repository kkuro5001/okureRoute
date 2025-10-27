#　サーバーの起動方法
cd frontend
npm start

cd ../backend
python app.py

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
