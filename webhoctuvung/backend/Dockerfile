# Dockerfile chuẩn cho NodeJS backend
FROM node:18

# Set thư mục làm việc trong container
WORKDIR /app

# Copy file package.json và package-lock.json
COPY package*.json ./

# Cài dependency
RUN npm install

# Copy hết code vào
COPY . .

# Nêu rõ port app sẽ xài
EXPOSE 4000

# Command để start app
CMD ["npm", "start"]
