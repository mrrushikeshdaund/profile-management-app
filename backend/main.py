from fastapi import FastAPI
from routers.user_route import router as user_router

app = FastAPI();

app.include_router(user_router,prefix="/users", tags=["users"])

@app.get("/")
def profile_management():
    return {"message": "Welcome to the Profile Management API!"}