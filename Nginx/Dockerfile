# Nginx/Dockerfile
FROM nginx:1.27-alpine-slim

# 보안 관련 nginx 기본 설정
RUN apk add --no-cache openssl && \
    mkdir -p /etc/nginx/certs && \
    openssl req -x509 -nodes -days 3650 -newkey rsa:2048 \
        -keyout /etc/nginx/certs/nginx.key \
        -out /etc/nginx/certs/nginx.crt \
        -subj "/C=KR/ST=Seoul/L=Seoul/O=MyCompany/OU=IT Department/CN=example.com" && \
    rm -rf /var/cache/apk/*

# 기존 default.conf 파일 삭제 및 보안이 추가된 default.conf 복사
COPY default.conf /etc/nginx/conf.d/default.conf

# 보안 헤더 및 디폴트 서버 정보 제거가 포함된 nginx.conf 파일 복사
COPY nginx.conf /etc/nginx/nginx.conf
