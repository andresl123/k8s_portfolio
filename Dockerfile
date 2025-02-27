FROM nginx:latest
COPY ./k8s_portfolio.html /usr/share/nginx/html/index
EXPOSE 80