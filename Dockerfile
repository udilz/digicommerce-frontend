FROM node:lts

WORKDIR /app

COPY package*.json ./
COPY . .

RUN npm install -g pnpm@latest
RUN pnpm install
RUN pnpm run build

CMD ["pnpm", "preview"]

EXPOSE 4173