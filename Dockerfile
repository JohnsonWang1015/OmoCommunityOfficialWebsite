FROM node:22-bullseye

# 安裝 Bun.sh
RUN curl -fsSL https://bun.sh/install | bash

# 將 Bun 的路徑添加到環境變量中
ENV PATH="/root/.bun/bin:$PATH"

# 設置工作目錄
WORKDIR /app

# 複製專案
COPY . .

# 安裝依賴
RUN bun install

# 建立 production build
RUN bun run build

# 暴露應用程式的端口
EXPOSE 4000

# 啟動應用程式
CMD ["bun", "server-docker.js"]
