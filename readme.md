Chave gerada através do comando (Apenas para conhecimento) >>
keytool -genkey -v -keystore bolaoesportivo.keystore -alias bolaoesportivo -keyalg RSA -keysize 2048 -validity 10000  
Passo a passo para gerar nova versão>>  Gere uma nova build: ionic cordova build android --prod --release


Navegue até a pasta que foi gerada a build e use o comando abaixo:
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore bolaoesportivo.keystore app-release-unsigned.apk bolaoesportivo

Digite a senha para assinar a versão:
Senha: bolaoesportivo@2020

User o comando abaixo para gerar a build assinada para enviar para a loja
zipalign -v 4 app-release-unsigned.apk BolaoEsportivo.apk
