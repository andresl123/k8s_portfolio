FROM nginx:latest
COPY ./k8s_portfolio.html /usr/share/nginx/html
EXPOSE 80