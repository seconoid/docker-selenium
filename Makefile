.DEFAULT_GOAL := help


build: # コンテナをビルド
	docker-compose build

serve: # selenium コンテナ立ち上げ
	docker-compose up -d

test: # テストを実行
	docker-compose run --rm nodejs npm run test

down: # コンテナの終了
	docker-compose down

open_vnc: # VNCView の立ち上げ(pass: secret)
	open vnc://localhost:5900

open_hub: # selenium hub を表示
	open http://localhost:4444/grid/console


.PHONY: help
help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'