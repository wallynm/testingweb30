### Pré requisitos:
- Node já instalado e configurado (Versão testada 7.2)
- Java instalado


### Configurando projeto
Baixe/Clone o projeto e na pasta dele execute o comando 
```
npm install
npm install selenium-standalone -g
npm install wdio-spec-reporter -g
npm install wdio-mocha-framework -g
npm install webdriverio -g
selenium-standalone install
```

Uma vez com todos pacotes já instalados e configurados será enão necessário deixar o standaone do JAVA rodando em uma terminal com o seguinte comando
```
selenium-standalone start
```

Em seguida basta executar o Webdriver.io dentro da pasta /test
```
wdio
```

Você também pode executar specs especificas passando flag de "spec"
```
wdio --specs ./specs/form.js
```

### Links
- Base UI: https://github.com/CreativeIT/material-dashboard-lite
