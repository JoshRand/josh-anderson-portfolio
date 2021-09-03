FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html
COPY ./dist/josh-anderson-portfolio/ /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/nginx.conf
