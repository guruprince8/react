# FROM node:alpine
# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# COPY . .
# RUN npm run build
# EXPOSE 3000
# CMD ["npm", "start"]
FROM nginx:alpine
COPY build/ /usr/share/nginx/html