#!/bin/sh

# Create a new database
mysql -u ubuntu -pubuntu -e "CREATE DATABASE projetdb;"

# Create a new user and grant privileges
mysql -u ubuntu -pubuntu -e "CREATE USER 'ubuntu' IDENTIFIED BY 'ubuntu';"
mysql -u ubuntu -pubuntu -e "GRANT ALL PRIVILEGES ON projetdb.* TO 'ubuntu';"
