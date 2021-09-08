FROM nginx:1.15
RUN apt-get update && \ 
    apt-get install -y certbot python-certbot-nginx 
COPY ./nginx.conf /etc/nginx/conf.d/default.conf 
# COPY ./renew-ssl.sh . 
# COPY ./copy-certificates.sh . 
# RUN ./renew-ssl.sh & 
COPY ./dist/josh-anderson-portfolio/ /usr/share/nginx/html
