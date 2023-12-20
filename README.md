# M1PEX_PROJECT_docker_express_vue

## Description

express/vue app - M1PEX

git repository : https://github.com/hugo-HDSF/M1PEX_PROJECT_docker_express_vue

## Getting Started

### Prerequisites

> docker and docker compose v2 are required, see https://docs.docker.com/get-docker/

> I recommend using colima on mac, see https://github.com/abiosoft/colima

### Installation

> I also recommend using nvm for node version management, see https://github.com/nvm-sh/nvm

```Shell
nvm install
nvm use
```
### Deploy

```Shell
make build
```

or

```Shell
make build -d
```

> navigate to http://localhost:3000 for client

> navigate to http://localhost:4000 for server
> API documentation referenced in
`server/src/domains/product/router/product.router.js`
