heroku local web &

sleep 3

python ./test/post.py

pidof heroku | kill -SIGTERM
