# ts-inlining
Webpack TypeScript optimization test

При запуске `npm run build` в build генерируется app.js, в котором происходит инлайнинг констант и функции fn.

Цикл вида `for(let i=0;i<max;i++){
               sum = fn(sum, i);
           }`
           
превращается в 
`for(var n=Date.now(),r=0,o=0;o<1e9;o++)r=r+o`

Этого не происходит, если в webpack.config.js в секции module.exports поставить 
`optimization: { minimize: false },`

##Выводы

с описанной конфигурацией webpack пытается оптимизировать код, [иногда] подставляя не обращения к переменным и функциям, а непосредственно их содержимое 