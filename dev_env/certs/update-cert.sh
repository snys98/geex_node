#!/bin/sh

cd /root/.acme.sh

# Check if certificate already exists
if ./acme.sh --list | grep -q $DOMAIN; then
    # Renew the certificate
    ./acme.sh --renew -d $DOMAIN --ecc --server letsencrypt --debug -m "acme@$DOMAIN"
else
    # Issue a new certificate
    ./acme.sh --issue --dns dns_ali -d $DOMAIN -d *.$DOMAIN --keylength ec-256 --server letsencrypt --debug -m "acme@$DOMAIN"
fi

# Install the certificate to the /certs directory
cp ./${DOMAIN}_ecc/$DOMAIN.cer /certs/$DOMAIN.crt
cp ./${DOMAIN}_ecc/$DOMAIN.key /certs/$DOMAIN.key
cat ./${DOMAIN}_ecc/$DOMAIN.cer ./${DOMAIN}_ecc/$DOMAIN.key > /certs/$DOMAIN.pem
openssl pkcs12 -export -out /certs/$DOMAIN.pfx -inkey /certs/$DOMAIN.key -in /certs/$DOMAIN.crt -certfile ./${DOMAIN}_ecc/ca.cer -password pass:$CERT_PASSWORD
