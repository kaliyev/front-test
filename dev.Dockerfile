# dev.Dockerfile for local development
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Install dependencies (will use cache if package.json and yarn.lock haven't changed)
COPY package.json yarn.lock ./
RUN yarn install

# Copy the rest of the app
COPY . .

# Expose Vite default port
EXPOSE 5173

# Start the dev server
CMD ["yarn", "dev"]
