from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
# poetry add <package>
"""
uvicorn app:app --reload
just for copy pasta
"""

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins (replace "*" with specific origins if needed)
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],  # Add additional HTTP methods as needed
    allow_headers=["*"],  # Allow all headers (replace "*" with specific headers if needed)
)

print(app)


@app.get("/")
def test_api():
    return {"message": "big ol' test API CALL"}





















def do_something():
    return 5
