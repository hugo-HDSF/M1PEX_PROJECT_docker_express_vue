# Makefile

# This will build the docker containers for both front-end and back-end
build:
	docker compose up --build

build -d:
	docker compose up --build -d

# This will start the docker containers
up:
	docker compose up -d

# This will stop the docker containers
down:
	docker compose down

# This will show the logs of the containers
logs:
	docker compose logs -f

# Additional commands can be added as needed