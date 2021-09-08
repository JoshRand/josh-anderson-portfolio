
#!/bin/sh
dir=$(pwd)
while [ true ]
  do
    certbot renew - deploy-hook $dir/copy-certificates.sh
    sleep 1d # Check once a day
  done