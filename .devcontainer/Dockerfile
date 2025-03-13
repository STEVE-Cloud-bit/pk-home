FROM ubuntu:latest

# Install system dependencies
RUN apt-get update && apt-get install -y \
    apache2 \
    mariadb-server \
    php \
    php-mysql \
    php-xml \
    php-curl \
    php-mbstring \
    php-gd \
    libapache2-mod-php \
    unzip \
    git \
    composer && \
    apt-get clean

# Enable Apache modules
RUN a2enmod rewrite && service apache2 restart

# Set document root
WORKDIR /var/www/html

# Clone FarmOS
RUN git clone --branch 2.x https://github.com/farmOS/farmOS.git . && \
    chown -R www-data:www-data /var/www/html

# Expose Apache and MySQL ports
EXPOSE 80 3306

CMD ["apachectl", "-D", "FOREGROUND"]
