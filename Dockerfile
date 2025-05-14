# Dockerfile
FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

FROM node:alpine

WORKDIR /app

COPY --from=0 /app/dist ./dist
COPY --from=0 app/package*.json ./
COPY --from=0 /app/node_modules ./node_modules

EXPOSE 3000
CMD ["npm", "run", "start"]

