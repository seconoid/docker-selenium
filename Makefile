.DEFAULT_GOAL := help


build:
	docker-compose build

serve:
	docker-compose up -d

test:
	docker-compose run --rm nodejs npm run test

down:
	docker-compose down

.PHONY: help
help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'