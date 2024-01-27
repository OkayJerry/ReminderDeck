# Author  : Prof. MM Ghassemi <ghassem3@msu.edu>

# Instantiate Ubuntu 20.04
FROM ubuntu:20.04
LABEL maintainer "Jerry Hoskins <hoskin41@msu.edu>"
LABEL description="This is a project for SpartaHack 9."

# Update Ubuntu Software repository
RUN apt update
RUN apt -y install python3-pip
RUN apt -y install vim

# Add the Flask application and install requirements
RUN mkdir /app
COPY . /app
WORKDIR /app
RUN pip install --upgrade pip
RUN pip install --no-cache-dir -r requirements.txt

# Open ports, set environment variables, start gunicorn.
EXPOSE 8080 
ENV PORT 8080
ENV FLASK_ENV=production  
CMD exec gunicorn --bind :$PORT --workers 1 --threads 8 --timeout 0 app:app
# ----------------------------------------------------- 