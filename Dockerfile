# -------- Base --------
FROM node:20-bullseye AS base
WORKDIR /app
COPY package*.json ./

# -------- Dependencies --------
FROM base AS deps
RUN npm ci

# -------- Development --------
FROM deps AS development
ENV NODE_ENV=development
WORKDIR /app
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev", "--", "-H", "0.0.0.0"]

# -------- Production --------
FROM node:20-bullseye AS production
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
