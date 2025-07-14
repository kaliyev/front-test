FROM node:18-alpine
WORKDIR /app
COPY . .
RUN yarn install && yarn build && yarn global add serve
EXPOSE 80
CMD ["serve", "-s", "dist", "-l", "80"]
