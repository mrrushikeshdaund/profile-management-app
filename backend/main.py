from fastapi import FastAPI
from routers.user_route import router as user_router
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI();

origin = [
    "http://localhost:3000",  # Adjust this to your frontend URL
    "http://127.0.0.1:3000"  
]

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=origin,  # Allows all origins, adjust as needed
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods, adjust as needed
    allow_headers=["*"],  # Allows all headers, adjust as needed
)

app.include_router(user_router,prefix="/users", tags=["users"])

@app.get("/")
def profile_management():
    return {"message": "Welcome to the Profile Management API!"}