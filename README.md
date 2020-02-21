
# chat-space DB設計
## usersテーブル
|Column|Type|Options|
|------|----|-------|
|email|string|null: false|
|password|string|null: false|
|username|string|null: false|
### Association
- has_many :posts
- has_many :groups, through: :groups_users
- has_many :groups_users

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|groupname|string|null: fales|
### Association
- has_many :posts
- has_many :users, through: :group_users
- has_many :group_users

## users_groupsテーブル
|Column|Type|Options|
|------|----|-------|
|users_id|strings|null: fales, foreign_key: true|
|groups_id|strings|null: fales, foreign_key: true|
### Association
- belongs_to :group
- belongs_to :user

## pustsテーブル
|Column|Type|Options|
|------|----|-------|
|text|strings|null: fales|
|users_id|strings|null: fales, foreign_key: true|
|groups_id|strings|null: fales, foreign_key: true|
### Association
- belongs_to :groups
- belongs_to :users

