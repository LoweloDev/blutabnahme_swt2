# Prequisites
Sie sollten folgende Software installiert haben:
- NVM (Node Version Manager)
- Node.js
- npm
- Angular CLI

# Installation
Installieren Sie die Software wie folgt:

## NVM, NODEJS, NPM
Installieren Sie NVM:
1. `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash`
2. `source ~/.bashrc`
3. `nvm --version` um die Version zu überprüfen sodass sie sicher sind, dass NVM installiert wurde.

Installieren sie Node.js und npm:
1. `nvm install node 20`
2. `nvm use`
3. `node --version` um die Version zu überprüfen sodass sie sicher sind, dass Node.js installiert wurde.
4. `npm --version` um die Version zu überprüfen sodass sie sicher sind, dass npm installiert wurde.

## Angular CLI
Installieren Sie Angular CLI:
1. `npm install -g @angular/cli`

# Docker
Installieren sie Docker:

## Windows
[Docker Desktop for Windows](https://hub.docker.com/editions/community/docker-ce-desktop-windows)

## Mac
[Docker Desktop for Mac](https://hub.docker.com/editions/community/docker-ce-desktop-mac)

## Linux
[Docker Desktop for Linux](https://hub.docker.com/editions/community/docker-ce-desktop-linux)

# Frontend
1. in den Ordner `frontend` wechseln:
`cd frontend`
2. `npm install` um die benötigten Pakete zu installieren.
3. `ng serve` um die Anwendung zu starten.

# Backend
1. in den Ordner `backend` wechseln:
2. `npm install` um die benötigten Pakete zu installieren.
3. `docker-compose up --build` um die Anwendung zu starten.
