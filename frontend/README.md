# Github Repository auf meinem Github Account (Tobias Barthold (7209370) / LoweloDev)
https://github.com/LoweloDev/blutabnahme_swt2
## Alternativ finden sie die App auch auf dem Stick inkl. aller nötigen Dateien.

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
### Windows:
1. https://learn.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-windows#install-nvm-windows-nodejs-and-npm
2. `nvm --version` um die Version zu überprüfen sodass sie sicher sind, dass NVM installiert wurde.

### Mac:
1. Homebrew installieren
2. Terminal öffnen
3. `brew install nvm`
4. `nvm --version` um die Version zu überprüfen sodass sie sicher sind, dass NVM install

### Linux:
1. `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash`
   oder
2. `wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
3. `source ~/.bashrc`
4. `nvm --version` um die Version zu überprüfen sodass sie sicher sind, dass NVM install

Installieren sie Node.js
1. `nvm install node 20`
2. `nvm use node 20`
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
2. `cd backend`
3. `npm install` um die benötigten Pakete zu installieren.
4. `docker-compose up --build` um die Anwendung zu starten.

# Testen - WICHTIG: Sie MÜSSEN, weil das Projekt neu gebuildet wurde, die Datenbank mit den Testdaten befüllen dazu habe ich Ihnen eine Postman Collection bereitgestellt, um die Daten einzufügen:
Postman installation: https://www.postman.com/downloads/
Die Postman Collection finden Sie im Abgabeordner.

1. Postman öffnen
2. Collection importieren
3. POST auf Laboraufträge ausführen, der Request heißt "BATCH Laborauftrag".

## QR Codes
Die QR Codes zum testen der Anwendung finden Sie ebenfalls im Abgabeordner. Die QR Codes sind entsprechend benannt.


# Troubleshooting
Sollten Sie aus irgendeinem Grund in der Tabelle "Laboraufträge" nach dem Login keine Daten sehen, habe ich Ihnen eine Postman Collection bereitgestellt, die Sie verwenden können, um die Daten zu füllen.
Sie finden die Collection im Abgabeordner. Diese können Sie in Postman importieren und den POST Request auf den Laborauftrag Endpunkt ausführen.

Postman installation: https://www.postman.com/downloads/


# Weitere Hinweise
Sie könnten die App auch auf dem Mobilgerät ausführen, was allerdings eine Rekonfiguration der docker-compose.yml erfordert sowie eine Rekonfiguration von Localhost auf die Host IP also die IP Ihres Rechners.
Die App ist Mobile First gebaut worden.
