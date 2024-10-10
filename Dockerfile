# Utiliser l'image officielle de PostgreSQL
FROM postgres:latest

# Définir les variables d'environnement pour la configuration de PostgreSQL
ENV POSTGRES_DB=db
ENV POSTGRES_USER=admin
ENV POSTGRES_PASSWORD=admin

# Copier les scripts d'initialisation dans le répertoire de démarrage de PostgreSQL
# (optionnel, si vous avez des scripts d'initialisation)
# COPY init.sql /docker-entrypoint-initdb.d/

# Exposer le port par défaut de PostgreSQL
EXPOSE 5432