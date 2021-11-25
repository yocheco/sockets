# zoom-cam-backend DEV
1. copy .demo.env to .env
2. ENV to dev
3. create SECRET_TOKEN String text to token app
4. run npm install
5. create new admin
6. create new admin in localhost:8080/api/user/register

# Production docker compose
1. copy .demo.env to .env
2. ENV to dev
3. create SECRET_TOKEN String text to token app
4. RUN docker-compose up -d
5. Mediante docker-compose ps, compruebe el estado de sus servicios:
    docker-compose ps

    Output:
    Name                 Command               State          Ports
------------------------------------------------------------------------
certbot     certbot certonly --webroot ...   Exit 0
nodejs      node app.js                      Up       8080/tcp
webserver   nginx -g daemon off;             Up       0.0.0.0:80->80/tcp
