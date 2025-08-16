from database.db_connection import dynamodb
from models.users_model import User
import logging

def create_user_table():
    """
    Create a DynamoDB table for users if it does not already exist.
    """
    try:
        table = dynamodb.create_table(
            TableName='Users',
            KeySchema=[
                {
                    'AttributeName': 'user_id',
                    'KeyType': 'HASH'  # Partition key
                }
            ],
            AttributeDefinitions=[
                {
                    'AttributeName': 'user_id',
                    'AttributeType': 'S'  # String type
                }
            ],
            ProvisionedThroughput={
                'ReadCapacityUnits': 5,
                'WriteCapacityUnits': 5
            }
        )
        logging.info("Table created successfully.")
        return table
    except dynamodb.meta.client.exceptions.ResourceInUseException:
        logging.info("Table already exists.")
        return dynamodb.Table('Users')  # Return existing table
    

def get_user_table():
    """
    Get the DynamoDB table for users.
    """
    return {'message': 'User table is ready', 'table_name': 'Users'}

def insert_user(user_data:User):
    """
    Insert a new user into the Users table.
    """
    table = dynamodb.Table('Users')
    try:
        response = table.put_item(Item=user_data)
        return {'message': 'User inserted successfully', 'response': response}
    except Exception as e:
        logging.error(f"Error inserting user: {e}")
        return {'error': str(e)}
    
def get_all_users():
    """
    Retrieve all users from the Users table.
    """
    table = dynamodb.Table('Users')
    try:
        response = table.scan()
        return {"message":"Get all the users",'data': response.get('Items', [])}
    except Exception as e:
        logging.error(f"Error retrieving users: {e}")
        return {'error': str(e)}
    

def login_user(user_id: str, password: str):
    """
    Login a user by checking user_id and password.
    """
    table = dynamodb.Table('Users')
    try:
        response = table.get_item(Key={'user_id': user_id})
        user = response.get('Item')
        if user and user.get('password') == password:
            return {'message': 'Login successful', 'user': user}
        else:
            return {'message': 'Invalid credentials'}
    except Exception as e:
        logging.error(f"Error logging in user: {e}")
        return {'error': str(e)}