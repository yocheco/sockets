# 🐳 Docker Compose
build: CMD=build --pull --force-rm --no-cache
up: CMD=up -d
stop: CMD=stop
down: CMD=down

doco build up stop down:
	@docker-compose $(CMD)

rebuild:
	make stop
	make down
	make build
	make up

restart:
	make stop
	make down
	make start

test:
	artillery run artillery.yaml
