# Teste de integração **LinkApi**
## OBJETIVO

Deverá construir uma API RESTful usando a tecnologia ***NodeJS***.
Integrando sistemas como ***Pipedrive*** e ***Bling***.


## Modelo de conexão usado para o **Mongodb**
```json
{
  "name": "NOME_CONEXAO_TYPEORM",
  "type": "TIPO_BANCO",
  "useNewUrlParser": true,
  "useUnifiedTopology": true,
  "url": "STRING DE CONEXÃO DO ATLAS",
  "ssl": true,
  "authSource": "admin",
  "database": "teste_linkapi",
  "entities": [
    "./src/modules/**/infra/typeorm/schemas/*.ts"
  ]
}
```
