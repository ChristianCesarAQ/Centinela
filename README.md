# Centinela-IA

Sistema de monitoreo de red en tiempo real que detecta anomalias (Isolation Forest),
consulta contexto via RAG y decide/ejecuta contencion automatica (LangGraph + MCP)
en una VLAN de cuarentena, con cifrado hibrido (RSA/ECC + AES-256).

## Estructura del proyecto
```
Centinela/
├── backend/ # FastAPI + MCP server + LangGraph + RAG (Chroma)
├── sensor/ # Captura de trafico (scapy) + Isolation Forest
├── attacker/ # Contenedor con nmap para pruebas de ataque
├── frontend/ # React + Vite + Tailwind (panel de alertas)
├── docs/ # Documentacion tecnica
└── docker-compose.yml
```

## Requisitos previos

- Docker Desktop instalado
- Git

## Setup rapido (primera vez)

```bash
git clone https://github.com/ChristianCesarAQ/Centinela.git
cd Centinela
docker compose up -d --build
```

Esto levanta:
- `backend` en http://localhost:8000 (API)
- `frontend` en http://localhost:5173 (panel React)
- `sensor` capturando trafico en la red `vlan-corp`
- `client-a` y `client-b`, hosts de prueba

## Probar un ataque simulado

```bash
docker compose --profile attack up -d --build attacker
docker exec -it attacker ./scan.sh client-b
```