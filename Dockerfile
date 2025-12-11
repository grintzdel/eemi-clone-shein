FROM node:20-alpine

WORKDIR /app

COPY package*.json .

COPY . .

RUN npm install --legacy-peer-deps

RUN npm run build

ENV PORT=4001

EXPOSE 4001

CMD ["npm", "run", "start"]