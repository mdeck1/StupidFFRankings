import { Client } from '../node_modules/espn-fantasy-football-api/web-dev.js'; // web development build

console.log('In ESPN Helper');


const myEspnClient = new Client({ leagueId: 777632 })
myEspnClient.setCookies({ 
	espcS2: 'AECADURTpACGWdNl5%2F9hZAKHZgTvfmkuyClrImow2v3kGKVUES3%2BF8zkDOmUEMOeZCCdcOH7W4e%2BOM7sFLzgd%2Bis1AjUeuJY%2Bkke5JfSPJe5%2BXBE%2F0vC9VU3CGtem%2B%2FOV9vS9UWBcNEWQzTozM%2Bs%2B5frERKU6e1wiFUbUtpWKUIqrAGmKXXzP9qiC1P5hykrMdQjerNRzQ7FueMf0D%2BZSizDHiDi8USh%2Bpk65jmw%2FZcod7QGA9IduUnMiFcGYt6H2rtNlMo%2BwyKJnrQTmxG4hsag', 
	SWID: '{8B90CB1C-BED0-4A15-90CB-1CBED0CA156C}'
});
console.log(myEspnClient.getBoxscoreForWeek(2019,1,1));