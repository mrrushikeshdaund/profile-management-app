import boto3


# Connect to local DynamoDB
dynamodb = boto3.resource(
    'dynamodb',
    endpoint_url="http://localhost:5002",  # Local instance
    region_name="us-west-2",
    aws_access_key_id="fakeMyKeyId",
    aws_secret_access_key="fakeSecretAccessKey"
)