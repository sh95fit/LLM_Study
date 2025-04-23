# Backend/Dockerfile

FROM python:3.13-slim

# build-essential : Python 패키지 빌드 시 C 컴파일러가 필요함
# 해당 패키지에는 gcc, g++, make, libc-dev 등이 C/C++ 컴파일러 셋이 포함되어 있음 (poetry install 시 필요)
RUN apt-get update && apt-get install -y \ 
    build-essential curl && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

# PYTHONDONTWRITEBYTECODE=1 : Python이 .pyc 파일을(컴파일된 바이트코드)를 생성하지 않도록 설정
# Docker 컨테이너에서는 읽기 전용 이미지에 가까워 .pyc 파일을 생성해도 캐싱 효과가 거의 없으므로 비활성화
# PYTHONUNBUFFERED=1 : Python의 출력을 버퍼링하지 않도록 설정하여, 로그를 즉시 출력하도록 설정
# Python 출력을 버퍼링하지 않고 즉시 출력하도록 하여 로그가 실시간으로 Docker 로그 혹은 stdout/stderr에 즉시 반영되도록 하여 디버깅 효율성 증대
ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1


# 작업 디렉토리로 이동
WORKDIR /app

# pyproject.toml 및 poetry.lock 파일 복사 후 의존성 설치
COPY ./app/pyproject.toml ./app/uv.lock /app/

# uv 설치 (빠르고 안전한 pip 대체 도구)
RUN pip install uv
RUN pip install uvicorn fastapi

# 의존성 설치
RUN uv sync

# 파일이 설치된 경로 추가
ENV PATH="/root/.local/bin:$PATH"

# 나머지 소스코드 복사
COPY ./app /app

# 포트 노출
EXPOSE 8000

# FastAPI 서버 실행
CMD [ "uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000", "--reload", "--workers", "4", "--timeout-keep-alive", "30" ]