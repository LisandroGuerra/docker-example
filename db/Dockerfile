FROM mariadb:11.1.2-jammy

# EXPOSE 3306

LABEL version="11.1.2"
LABEL description="MariaDB Server"

HEALTHCHECK --start-period=5m \
  CMD mariadb -e 'SELECT @@datadir;' || exit 1

CMD ["mariadbd"]