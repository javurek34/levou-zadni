// Teaching notes supplement the official key; only imported comments are attributed to CERMAT.
const cermatTeachingRules=[
 [/základní skladební dvojic/i,'Základní skladební dvojice','Podmět určuje, kdo nebo co děj vykonává či koho se stav týká. Přísudek říká, co podmět dělá nebo jaký je. Na podmět se ptej 1. pádem kdo/co ve spojení s přísudkem. Zahrň i pomocné sloveso a jmennou část přísudku (např. byl vítězem), případně zvratné se/si.'],
 [/sloves.*vid|dokonav|nedokonav/i,'Slovesný vid','Nedokonavé sloveso představuje děj v průběhu nebo opakování a obvykle tvoří budoucí čas pomocí budu (budu psát). Dokonavé sloveso vyjadřuje děj jako ohraničený celek (napsat); jeho tvar napíšu označuje budoucnost. Rozhodující není minulý čas, nýbrž způsob pojetí děje.'],
 [/trpn|činný rod|rod[ěu] činn/i,'Slovesný rod','V činném rodě podmět označuje původce děje (řidič opravil auto). V trpném rodě je podmět dějem zasahován (auto bylo opraveno). Rozliš opisné pasivum od pouhého spojení být s přídavným jménem; zvratné se samo o sobě ještě trpný rod nedokazuje.'],
 [/přísud.*jmenn|jmenn.*přísud/i,'Přísudek jmenný se sponou','Tento přísudek tvoří spona (typicky být, bývat, stát se, stávat se) a jmenná část, která vypovídá o podmětu. Do přísudku patří obě části, například byla učitelkou. Sloveso být ve významu existovat může být plnovýznamové.'],
 [/podmět|přísud|shod[auy].*přísud/i,'Podmět a přísudek','Urči podmět podle významu a 1. pádu, nikoli podle nejbližšího podstatného jména. Tvar přísudku se řídí podmětem: muži přišli, ženy přišly, města zanikla. Několikanásobný podmět posuzuj jako celek; shoda může záviset i na jeho poloze.'],
 [/vedlejší.*vět|vět.*vedlejší|souvětí|počet vět|kolik.*vět/i,'Stavba souvětí','Věty rozlišuj podle přísudků; složený slovesný tvar netvoří více vět. U vedlejší věty zjisti, které slovo v řídící větě rozvíjí, a polož otázku právě od něj. Například co rozhodl? ukazuje na předmětnou větu, jaký člověk? na přívlastkovou. Samotná spojka k určení druhu věty nestačí.'],
 [/větn.*člen|příslovečné určení|přívlastek|předmět|doplněk/i,'Větné členy','Větný člen určuje vztah k jinému výrazu ve větě. Přívlastek rozvíjí podstatné jméno (jaký?), předmět obvykle sloveso či přídavné jméno a zjišťuje se pádovou otázkou. Příslovečné určení vyjadřuje okolnost (kde, kdy, jak, proč). Doplněk se vztahuje současně ke slovesu i ke jménu.'],
 [/interpunk|čárk/i,'Čárky a vztahy mezi větami','Čárka odděluje vedlejší větu od řídící a zpravidla i věty hlavní. U vložené věty musí být vyznačeny oba její okraje. Před a, i, ani, nebo v prostém slučovacím vztahu se čárka obvykle nepíše; jiný významový vztah nebo hranice vložené vedlejší věty ji může vyžadovat.'],
 [/předlož.*nevlastní|nevlastní.*předlož/i,'Nevlastní předložky','Nevlastní předložky vznikly z jiných slovních druhů, například během, díky, kolem, místo. Jako předložky se pojí se jménem v určitém pádě: během dne, díky pomoci. Ve větě s vlastním významem mohou být stejná slova jiným slovním druhem (rychlým během).'],
 [/slovní.*druh|slovních druh|zájmen|číslov|příslovc|spojk|částic/i,'Slovní druh v konkrétní větě','Rozhoduje funkce výrazu v dané větě. Zájmeno zastupuje nebo ukazuje jméno, příslovce označuje okolnost, předložka se pojí se jménem a spojka spojuje větné členy nebo věty. Stejně znějící slovo může podle kontextu patřit k různým slovním druhům; neposuzuj je izolovaně.'],
 [/měkk.*přídavn|přídavn.*měkk/i,'Měkká přídavná jména','Měkká přídavná jména se skloňují podle vzoru jarní. V 1. pádě jednotného čísla mají pro všechny tři rody stejné zakončení -í (jarní den, jarní noc, jarní ráno). Vypisuj skutečný tvar z textu, pokud zadání nepožaduje převod do základního tvaru.'],
 [/přivlastňovac|otcův|matčin/i,'Přivlastňovací přídavná jména','Přivlastňovací přídavné jméno vyjadřuje, komu něco patří; skloňuje se podle vzoru otcův nebo matčin. Koncovku určuje rod, číslo a pád rozvíjeného jména: otcovi psi, otcovy knihy, otcova kola. Nezaměňuj je s pádem podstatného jména (k otci, Petrovi).'],
 [/pomnožn|hromadn|látkov/i,'Číslo podstatných jmen','Pomnožná jména mají pouze tvary množného čísla, i když označují jednu věc (dveře). Hromadná jména označují soubor, ale mají jednotné číslo (listí). Látková jména pojmenovávají látku bez počítání jednotlivých kusů (voda). Mluvnické číslo se nemusí shodovat s množstvím ve skutečnosti.'],
 [/stupň|druhý stupeň|třetí stupeň/i,'Stupňování','Druhý stupeň vyjadřuje vyšší míru vlastnosti (rychlejší, lépe), třetí nejvyšší míru (nejrychlejší, nejlépe). Rozliš přídavné jméno od příslovce. U některých slov je stupňování nepravidelné, například dobrý – lepší – nejlepší.'],
 [/spisovný tvar|spisovné tvary|náležitý.*tvar|pád[ěu]|mluvnick|skloň/i,'Tvar slova a jeho vazba','Tvar vybírej podle pádu, čísla a rodu, případně osoby, času a způsobu slovesa. U jména urči vazbu na předložku či řídící slovo a skloňovací vzor. U přídavného jména se tvar shoduje s rozvíjeným jménem. Nahradit slovo jiným výrazem nestačí, pokud zadání žádá tvar konkrétního slova.'],
 [/kořen|předpon|přípon|slovotvor|příbuzn|odvozen/i,'Stavba a tvoření slova','Kořen je společná významová část příbuzných slov; při odvozování se někdy hláskově mění. Předpona stojí před kořenem, přípona za ním. Koncovka vyjadřuje mluvnické tvary. Podobný sled písmen sám příbuznost nedokazuje: slova musí mít i významovou souvislost.'],
 [/synonym|antonym|opačn.*význam|stejn.*význam|nejblíže.*význam/i,'Významové vztahy','Synonyma mají blízký význam, antonyma opačný. Posuzuj konkrétní význam slova ve výchozí větě. Náhrada musí zachovat nejen přibližné téma, ale i význam celého sdělení a odpovídající mluvnický tvar.'],
 [/ustálen|rčení|příslov|pořekadl/i,'Ustálené spojení','Ustálené spojení má danou podobu a často přenesený význam. Přísloví vyjadřuje obecnou zkušenost celou větou, rčení bývá částí věty. Při doplňování zachovej ustálený slovosled i mluvnický tvar; doslovný význam jednotlivých slov nemusí vystihovat smysl spojení.'],
 [/homonym|mnohoznač/i,'Stejná forma, různé významy','U mnohoznačného slova spolu významy souvisejí (oko člověka, oko na punčoše). Homonyma mají stejnou podobu, ale různé, významově nesouvisející základy (kolej ubytovna, kolej pro vlak). Rozhoduj podle významu celé věty.'],
 [/přím.*řeč|vypravěč|promlouv/i,'Kdo v textu mluví','Odliš hlas vypravěče od promluv jednotlivých postav. Přímá řeč podává vlastní slova mluvčího; uvozovací věta a kontext pomáhají určit, kdo je vyslovuje. Ich-forma používá 1. osobu, er-forma zpravidla 3. osobu. Vypravěč není automaticky totožný s autorem.'],
 [/personifik|zosobněn/i,'Personifikace','Personifikace přisuzuje neživým věcem, přírodě nebo abstraktním jevům lidské vlastnosti či činnosti. Vyhledej konkrétní spojení neživého nositele a lidské činnosti. Běžné pojmenování děje přírodního jevu samo o sobě ještě personifikací být nemusí.'],
 [/metafor|metonym|přenesen.*význam/i,'Přenesené pojmenování','Metafora přenáší pojmenování na základě podobnosti, metonymie na základě věcné souvislosti. U každého výrazu nejprve zvaž, zda v dané větě jde o doslovný význam; teprve potom určuj typ přenesení.'],
 [/rým|rýmu|rýmy/i,'Rým a stavba básně','Rým vzniká zvukovou shodou konců veršů od poslední přízvučné samohlásky. Rozložení označuj písmeny: AABB sdružený, ABAB střídavý, ABBA obkročný rým. Porovnávej skutečné konce příslušných veršů, ne jen podobnost jejich pravopisu.'],
 [/přesah|epifor|anafor|epizeux/i,'Opakování a přesah veršů','U anafory se opakuje výraz na začátcích sousedních veršů, u epifory na jejich koncích. Přesah nastává, když jedna věta pokračuje za hranici verše. Vždy použij přesné vymezení v zadání; rozdělení souvětí po celých větách nemusí být podle zadané definice přesahem.'],
 [/verš|slok|báseň|poezi|lyrik|epik|literárn/i,'Znaky literárního textu','Verš je jeden řádek básně, sloka celek složený z více veršů. Epika zachycuje děj, lyrika vyjadřuje pocity a prožitky; text může oba principy spojovat. Jednotlivé tvrzení ověř konkrétními znaky ukázky, například sledem událostí, promluvami nebo obrazným pojmenováním.'],
 [/pravopis|bezchybn|s chybou|s chybami|správně napsán/i,'Pravopis v souvislostech','U každého sporného místa urči důvod zápisu: u koncovek skloňovací vzor nebo shodu, u předpon a zdvojených souhlásek stavbu slova. Znění po opravě musí vyhovět významu i mluvnické vazbě. Úloha hledající chybu a úloha hledající bezchybnou možnost mají opačný požadavek.'],
];
const cermatWordReasons={
 nouzi:'Nouze se skloňuje podle vzoru růže: například v 4. pádě nouzi jako růži.',
 nejznámějších:'Třetí stupeň nejznámějších vzniká z nej- a známější; ve skupině mě se n nevkládá.',
 penězi:'Tvar 7. pádu množného čísla slova peníze zní penězi.',
 strávené:'Strávit čas se píše se s-, stejně jako strávit potravu. Změna významu na zde není důvodem pro z-.',
 sebevědomě:'Příslovce sebevědomě vychází z přídavného jména sebevědomý; před příponou -ě není n.',
 vítězství:'Slovo vítězství je odvozené od vítěz, zachovává tedy z před příponou -ství.',
 sýpek:'Sýpka je příbuzná s vyjmenovaným slovem sypat. Délka samohlásky se při tvoření slova mění.',
 náramně:'Příslovce náramně vychází z přídavného jména náramný; skupina mn se v odvozeném příslovci zachovává.',
 návsi:'Náves se skloňuje podle vzoru píseň; v příslušném tvaru se píše měkké i.',
 vinice:'Vinice souvisí se slovem víno; není příbuzná s vyjmenovanými slovy po v.',
 pamětihodnosti:'Pamětihodnost obsahuje paměti a hodnost; ve slově paměť a jeho tvarech se píše mě.',
 zprvu:'Příslovce zprvu se píše dohromady s počátečním z-; znamená zpočátku.',
 dějinných:'Dějinný je odvozeno od dějiny příponou -ný: základ dějin- a přípona -ný se stýkají ve dvou n.',
 strmější:'Druhý stupeň přídavného jména strmý je strmější; ke kmeni strm- připojujeme -ější.',
 zpotili:'Sloveso zpotit se označuje nabytí stavu a píše se se z-. Koncovku příčestí určuje podmět.',
 broušeného:'Přídavné jméno broušený má základ z příčestí broušen a píše se s jedním n.',
 exponátům:'Exponát se píše s x. Zakončení -ům označuje 3. pád množného čísla vzoru hrad.',
 tabulím:'Tabule se skloňuje podle vzoru růže; ve 3. pádě množného čísla tabulím jako růžím.',
 projektu:'Ve slově projekt se píše j, stejně jako v příbuzných slovech projekce či projektovat.',
 zvolí:'Sloveso zvolit se píše se z-; označuje výběr nebo uskutečnění volby.',
 poměrně:'Příslovce poměrně je odvozeno od poměrný. Skupina rn zůstává zachována a přidává se -ě.',
 zkušené:'Přídavné jméno zkušený souvisí se slovy zkušenost a zkusit; píše se se z-.',
 nedotčené:'Ve slově nedotčený je základ příčestí dotčen; za č stojí jedno n.',
 cizích:'Přídavné jméno cizí je měkké a skloňuje se podle vzoru jarní: cizích jako jarních.',
 zákonné:'Zákonný je odvozeno od zákon příponou -ný. Na hranici základu a přípony se setkávají dvě n.',
 upřímně:'Příslovce upřímně vzniká od upřímný; skupina mn se zachovává před příponou -ě.',
 týdenní:'Týdenní je odvozeno od týden příponou -ní. Obě n se na hranici základu a přípony zachovávají.',
 extrémně:'Příslovce extrémně souvisí s extrémní; skupina mn zůstává zachována.',
 bezobratlých:'Slovo bezobratlý má předponu bez- a základ obratel. Předpona si zachovává z bez ohledu na výslovnost.',
 změti:'Změť se skloňuje podle vzoru píseň; v příslušném tvaru se píše měkké i.',
 zpočátku:'Příslovce zpočátku je spřežka; píše se dohromady a s počátečním z-.',
 raného:'Raný ve významu časný má jedno n. Ranní ve významu vztahující se k ránu má nn.',
 prohloubil:'Prohloubit souvisí se slovy hluboký a hloubka. Příčestí má základ prohloub- a zakončení -il.',
 zaměřením:'Zaměření je odvozeno od zaměřit; skupina mě se píše bez vloženého n.',
 shrnula:'Sloveso shrnout má předponu s-. Zachovává ji například ve významu podat souhrn i shrnout něco na hromadu.',
 významně:'Příslovce významně vychází z významný; skupina mn se v odvozenině zachovává.',
 sjížděly:'Při pohybu shora dolů se ve slovesu sjíždět píše s-. Koncovku -y určuje podmět dané věty.',
 trojúhelník:'Trojúhelník je složené slovo s částí úhel. Na začátku druhé části se zachovává ú.',
 slunné:'Slunný je odvozeno od slunce příponou -ný; na hranici základu slun- a přípony se píše nn.',
 starobylých:'Ve slově starobylý souvisí druhá část s být/byl, proto obsahuje y.',
 zklamalo:'Zklamat se píše se z-. Koncovku -o v příčestí určuje podmět středního rodu jednotného čísla.',
 obětovat:'Obětovat souvisí se slovem oběť; po b se píše ě, nikoli je.',
 zběhlý:'Zběhlý ve významu zkušený, obeznámený se píše se z-. Sběhlý může souviset například se sběhnutím lidí dohromady.',
};
function cermatOption(q,letter){const escaped=letter.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'),m=q.text?.match(new RegExp('(?:^|\\n)\\s*'+escaped+'\\)\\s*([\\s\\S]*?)(?=\\n\\s*[A-H]\\)|$)'));return m?m[1].replace(/\s+/g,' ').trim():''}
function cermatTeaching(q){
 if(q.readerTeachingHtml)return `<div class="explain-body">${q.readerTeachingHtml}</div>`;
 const specific=q.teaching;
 if(specific)return `<div class="explain-body">${specific.map(p=>`<p>${E(p)}</p>`).join('')}</div>`;
 const chosen=q.type==='choice'?cermatOption(q,q.key):'';
 const target=(q.prompt||'')+' '+chosen;
 let rule=cermatTeachingRules.find(([pattern])=>pattern.test(target));
 if(q.type==='order')rule=[null,'Návaznost textu','Pořadí v klíči vytváří souvislý děj a zachovává odkazy mezi částmi. Zájmena jako on, ten nebo takový obvykle navazují na dříve zmíněnou skutečnost; časové výrazy určují posloupnost. Po sestavení přečti celý text v uvedeném pořadí a ověř, zda každý odkaz má svůj základ a zda si události neodporují.'];
 if(!rule)rule=[null,'Ověření významu v textu','Rozhodující je to, co výchozí text skutečně sděluje. Rozliš výslovnou informaci, jednoznačný závěr a pouhou domněnku. Tvrzení měnící původce děje, čas, příčinu nebo rozsah sdělení neodpovídá textu. U výroku NE může jít o rozpor i o informaci, kterou text vůbec nepotvrzuje.'];
 const wordNotes=q.type==='set'?q.key.map(k=>cermatWordReasons[k]).filter(Boolean):[];
 return `<div class="explain-body"><h4>${E(rule[1])}</h4>${chosen?`<p class="answer-meaning"><b>Možnost ${E(q.key)}:</b> ${E(chosen)}</p>`:''}<p>${E(rule[2])}</p>${wordNotes.length?`<ul>${wordNotes.map(v=>`<li>${E(v)}</li>`).join('')}</ul>`:''}<p class="help">Metodický výklad aplikace k danému typu úlohy. Individuální komentář CERMAT není u této úlohy připojen; správná odpověď a bodování výše pocházejí z klíče.</p></div>`;
}
