from pydantic import BaseModel,Field


class User(BaseModel):
    user_id: str = Field(..., description="Unique identifier for the user")
    name: str = Field(..., description="Name of the user")
    email: str = Field(..., description="Email address of the user")
    age: int = Field(..., description="Age of the user")
    created_at: str = Field(..., description="Timestamp when the user was created")
    updated_at: str = Field(..., description="Timestamp when the user was last updated")