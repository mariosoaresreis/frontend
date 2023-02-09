FROM nginx:mainline

RUN chmod g+rwx /var/cache/nginx /var/run /var/log/nginx

RUN sed -i.bak 's/listen\(.*\)80;/listen 8080;/' /etc/nginx/conf.d/default.conf

EXPOSE 8080

COPY nginx.conf /etc/nginx/nginx.conf

RUN sed -i.bak 's/^user/#user/' /etc/nginx/nginx.conf

ARG dist

COPY $dist /usr/share/nginx/html/

RUN chown -R nginx /usr/share/nginx/html/ && \
  chown -R nginx /usr/share/nginx/html/* && \
  chmod -R g=u /usr/share/nginx/html/ && \
  chmod -R g=u /usr/share/nginx/html/* 

RUN addgroup nginx root

USER nginx