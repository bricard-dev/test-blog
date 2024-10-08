# Utiliser l'image officielle de PostgreSQL
FROM postgres:latest

# Définir les variables d'environnement pour la configuration de PostgreSQL
ENV POSTGRES_DB=mydatabase
ENV POSTGRES_USER=myuser
ENV POSTGRES_PASSWORD=mypassword

# Copier les scripts d'initialisation dans le répertoire de démarrage de PostgreSQL
# (optionnel, si vous avez des scripts d'initialisation)
# COPY init.sql /docker-entrypoint-initdb.d/

# Exposer le port par défaut de PostgreSQL
EXPOSE 5432