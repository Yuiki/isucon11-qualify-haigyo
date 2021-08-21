#!/bin/sh

sudo truncate -s 0 -c /var/log/nginx/access.log
sudo truncate -s 0 -c /var/log/mysql/mariadb-slow.log

git pull
cd ~/webapp/nodejs && npm install

# mariadb の設定をコピーする
sudo cp ~/webapp/conf/mysql/50-server.cnf /etc/mysql/mariadb.conf.d/50-server.cnf

sudo systemctl restart nginx
sudo systemctl restart mariadb

sudo systemctl restart isucondition.nodejs.service
