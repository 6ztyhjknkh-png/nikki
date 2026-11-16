const {chromium}=require('playwright');const path=require('path');
(async()=>{const b=await chromium.launch({args:['--allow-file-access-from-files']});
for(const [f,w,h] of JSON.parse(process.argv[2])){const p=await b.newPage({viewport:{width:w,height:h},deviceScaleFactor:1});
await p.goto('file://'+path.resolve(f));await p.evaluate(()=>document.fonts.ready);await p.waitForTimeout(800);
await p.screenshot({path:'../images/'+path.basename(f,'.html')+'.png'});await p.close();}
await b.close();})();
