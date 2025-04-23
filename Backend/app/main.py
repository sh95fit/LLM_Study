from fastapi import FastAPI, HTTPException, Body
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import HTMLResponse
from routers import example
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(example.router)

@app.get("/", response_class=HTMLResponse)
async def read_root():
    return "<h1>Hello, FastAPI!</h1>"


# Pydantic 모델을 사용하여 요청 데이터 구조 정의
class LoginRequest(BaseModel):
    email: str
    password: str

# 예시 사용자 데이터 (실제 데이터베이스는 아닙니다)
fake_users_db = {
    "user@example.com": {
        "password": "password123"  # 일반 텍스트 비밀번호 예시
    }
}

# 로그인 API 엔드포인트
@app.post("/login")
async def login(request: LoginRequest):
    # 요청 받은 이메일과 비밀번호 가져오기
    email = request.email
    password = request.password

    # 이메일이 fake_users_db에 존재하는지 확인
    user = fake_users_db.get(email)
    if user is None:
        raise HTTPException(status_code=400, detail="Invalid email or password")

    # 비밀번호 확인
    if user["password"] != password:
        raise HTTPException(status_code=400, detail="Invalid email or password")

    # 로그인 성공 시 토큰 반환 (간단한 예시로 'fake_token' 사용)
    return {"message": "Login successful", "token": "fake_token"}

# 인증 상태 확인 API 엔드포인트
@app.get("/auth/status")
async def check_auth():
    # 인증된 상태인지 확인하는 로직을 작성할 수 있습니다.
    # 여기서는 간단한 예시로 인증된 상태라는 메시지 반환
    return {"status": "authenticated"}