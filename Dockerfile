FROM nginx:latest
COPY ./k8s_portfolio.html /usr/share/nginx/html/index.html
EXPOSE 80