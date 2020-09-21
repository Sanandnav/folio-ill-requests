# Setting up a Github webook listener

## Apache Configuration
* Install [001-github_webhook.conf](../config/apache2/001-github_webhook.conf) file in `/etc/apache2/sites-available/`
* Update file with random port and uuid alias
* Link to it from `/etc/apache2/sites-enabled/`

## Prepare rebuild/now file
* Create directory:

  `mkdir /var/www/rebuild/`
* Set ownership:

  `chown www-data:www-data /var/www/rebuild`
* Set regular permissions to allow group writing:

  `chmod 775 /var/www/rebuild`
* Set advanced permissions so the app user can delete files created by `www-data`:

  `setfacl -d -m group:www-data:rw /var/www/rebuild/`

## Crontab
* Add check for file in app user's crontab:

  `*/5 * * * * test -f /var/www/rebuild/now && /bin/bash /home/folio-ill-requests/prod/scripts/pull_rebuild_and_go.sh >> ~/logs/prod_build.log`

