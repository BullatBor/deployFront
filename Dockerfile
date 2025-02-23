FROM node:alpine AS builder

WORKDIR /app

COPY package*.json .
COPY yarn.lock .

RUN yarn install

COPY . .

RUN yarn build

FROM nginx:1.21.0-alpine

COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD [ "nginx", "-g", "daemon off;" ]