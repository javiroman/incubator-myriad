# http://mesos.apache.org/documentation/latest/logging/
#
# POST <ip:port>/logging/toggle?level=[1|2|3]&duration=VALUE

curl "http://100.0.10.101:5050/logging/toggle?level=3&duration=1mins"
