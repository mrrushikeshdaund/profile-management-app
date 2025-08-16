from service.user_service import create_user_table, get_user_table,insert_user,get_all_users,login_user
from fastapi import APIRouter


router = APIRouter()


@router.get("/create-user-table")
def create_table():
    """
    Endpoint to create the user table in DynamoDB.
    """
    table = create_user_table()
    return {"message": "User table created or already exists", "table_name": table.name}


@router.get("/get-user-table")
def get_table():
    """
    Endpoint to get the user table information.
    """
    table_info = get_user_table()
    return table_info

@router.post("/insert-user")
def add_user(user_data:dict):
    """
    Endpoint to insert a new user into the Users table.
    """
    response = insert_user(user_data)
    return response

@router.get("/get-all-users")
def fetch_all_users():
    """
    Endpoint to retrieve all users from the Users table.
    """
    response = get_all_users()
    return response

@router.post("/login")
def login_user_check(user_data: dict):
    """
    Endpoint to login a user by checking user_id and password.
    """
    response =  login_user(user_data["user_id"], user_data["password"])
    return response