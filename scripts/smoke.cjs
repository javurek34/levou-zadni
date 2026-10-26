const {chromium}=require('playwright');
(async()=>{const browser=await chromium.launch({headless:true,executablePath:'/usr/bin/chromium',args:['--no-sandbox']});const page=await browser.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));await page.goto(process.env.APP_URL || 'http://127.0.0.1:8000');await page.waitForFunction(()=>cermatCatalog&&mathCatalog);
for(const subject of ['czech','math']){
 await page.evaluate(subject=>setSubject(subject),subject);
 const result=await page.evaluate(async()=>{const t=subjectCatalog().tests[0];await cermatLoadTest(t.id);const q=t.questions.map(x=>Q(x.id)).find(q=>q.type==='choice');if(!q?.html)throw Error('Missing question');if(cermatScore(q,q.key)!==q.max)throw Error('Correct answer score');if(cermatScore(q,-999)!==0)throw Error('Incorrect answer score');await cermatBegin('practice',[q.id],'Smoke check',0);return {subject:appSubject,tests:subjectCatalog().tests.length,question:q.id};});
 await page.waitForSelector('.qcard');console.log(JSON.stringify(result));
 console.log('Question displayed:',(await page.locator('.qcard').innerText()).slice(0,120));
 await page.evaluate(()=>{session=null;navigate('home')});
}
console.log('Browser errors:',JSON.stringify(errors));if(errors.length)throw Error('Browser errors');await browser.close()})().catch(e=>{console.error(e);process.exit(1)});
