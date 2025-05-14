#!/bin/bash

# Wait for SQL Server to be available
echo "⏳ Waiting for SQL Server..."

# Wait for the DB to be available, with a timeout of 60 seconds
./wait-for-it.sh db:1433 --timeout=60 --strict -- echo "✅ SQL Server is up!"

# Now that the DB is up, start the Express app
echo "Starting Express app..."
npm run start
