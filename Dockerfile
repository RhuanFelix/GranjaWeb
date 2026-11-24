FROM node:26-alpine as build

WORKDIR /app

COPY package*.json .

RUN npm ci

COPY . .

RUN npm run build

FROM nginx:1.31.8-alpine as production

COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80/tcp

CMD ["/usr/sbin/nginx", "-g", "daemon off;"]