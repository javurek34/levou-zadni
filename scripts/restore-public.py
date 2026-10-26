import concurrent.futures,json,pathlib,re,subprocess,urllib.parse
root=pathlib.Path(__file__).resolve().parent.parent;root.mkdir(exist_ok=True)
base='https://cestina-na-tahu-javor.javurek25644.chatgpt.site/'
def get(p):
 if p.startswith('/') or '..' in pathlib.PurePosixPath(p).parts:raise ValueError(p)
 target=root/p;target.parent.mkdir(parents=True,exist_ok=True)
 if target.exists():return
 subprocess.run(['curl','-sSfL','--retry','2','--max-time','60',base+urllib.parse.quote(p,safe='/'),'--output',str(target)],check=True)
def batch(paths):
 with concurrent.futures.ThreadPoolExecutor(max_workers=10) as pool:list(pool.map(get,sorted(set(paths))))
batch(['index.html','style.css','data.js','explanations.js','cermat.js','app.js','cermat/catalog.json','math/catalog.json'])
paths=[]
for subject in ['cermat','math']:
 data=json.loads((root/subject/'catalog.json').read_text())
 for key in ['tests','authored','worksheets','archivedAuthored']:
  for t in data.get(key,[]):
   ident=t['id'];folder='worksheets' if ident.startswith('cw-') else 'authored' if ident.startswith('ca-') else 'tests'
   paths.append(f'{subject}/{folder}/{ident}.json')
batch(paths);print('Test JSONs:',len(set(paths)),flush=True)
assets=set()
for p in root.rglob('*'):
 if p.suffix not in ['.js','.css','.json','.html']:continue
 text=p.read_text()
 assets.update(re.findall(r'(?:math|cermat)/(?:images|[^\s\"\'<>`]+?)/[A-Za-z0-9_./-]+\.(?:webp|png|svg|jpg|pdf)',text))
 assets.update(re.findall(r'fonts/[A-Za-z0-9_./-]+\.(?:ttf|woff2?)',text))
assets.update('illustrations/'+n+'.svg' for n in ['reading','mathematics','open-book','exam-prep','progress-tracking','correct-answer'])
print('Referenced assets:',len(assets),flush=True)
batch(assets)
print('Restored files:',sum(p.is_file() for p in root.rglob('*')),flush=True)
