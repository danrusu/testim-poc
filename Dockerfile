FROM testim/docker-cli

WORKDIR /opt/testim

COPY . .

ENTRYPOINT [ "./run.sh" ]
