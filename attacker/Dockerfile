FROM kalilinux/kali-rolling

RUN apt-get update && apt-get install -y --no-install-recommends nmap \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /scripts
COPY scripts/ .
RUN chmod +x *.sh

CMD ["sleep", "infinity"]