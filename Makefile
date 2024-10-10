# .PHONY: up down psql

# Démarrer les services définis dans docker-compose.yml
up:
	docker-compose up -d

# Arrêter les services définis dans docker-compose.yml
down:
	docker-compose down

# Accéder à une session interactive de PostgreSQL dans le conteneur
psql:
	docker exec -it db_postgres psql -U admin -d db