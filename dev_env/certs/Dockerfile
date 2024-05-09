FROM alpine:latest

RUN apk add --no-cache openssl curl socat

RUN curl https://get.acme.sh | sh

WORKDIR /certs

COPY update-cert.sh ./update-cert.sh
RUN chmod +x ./update-cert.sh

ENTRYPOINT ["./update-cert.sh"]
