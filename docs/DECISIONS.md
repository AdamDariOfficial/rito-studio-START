# RITO Studio — Decision Log

**Famiglia:** Beauty & Wellness
**Versione:** 1.4
**Stato:** decisioni approvate e aggiornate al 5 settembre 2026

## BW-DEC-001 — Concept portfolio

**Decisione:** usare `RITO Studio` come concept dimostrativo Beauty & Wellness.

**Motivo:** il concetto di rituale funziona per hair, barber, beauty, nails e wellness senza dipendere da un'estetica rosa o medicale.

**Limite:** naming e dominio non verificati.

## BW-DEC-002 — Famiglia modulare

**Decisione:** condividere architettura, qualità tecnica e logica di conversione, non un'estetica identica per ogni cliente.

## BW-DEC-003 — START one-page

**Decisione:** START è un sito one-page con privacy, cookie e 404. Porta verso telefono, WhatsApp o provider esterno. Non include backend o booking nativo.

## BW-DEC-004 — BUSINESS multipagina

**Decisione:** BUSINESS deriva dallo START canonico e aggiunge catalogo, dettagli trattamento, studio, team, gallery, FAQ, contatti e prenotazione configurabile.

## BW-DEC-005 — Booking adapter

**Decisione:** supportare `external`, `whatsapp`, `request` e `demo`, senza accoppiare il prodotto a un solo provider.

## BW-DEC-006 — Nessun gestionale nella prima settimana

**Decisione:** clienti, agenda live, pagamenti, fidelity e admin restano fuori da START e BUSINESS v1.

**Motivo:** mantenere il deliverable realistico, verificabile e commercialmente chiaro.

## BW-DEC-007 — Identità RITO

**Decisione:** palette porcellana/inchiostro/borgogna, Newsreader + Manrope, composizione asimmetrica, fotografia tattile, card ridotte al minimo.

## BW-DEC-008 — Nessun cursore custom

**Decisione:** non introdurre cursori personalizzati nella baseline.

**Motivo:** evitare gimmick, regressioni e problemi di accessibilità.

## BW-DEC-009 — Nessun contenuto inventato

**Decisione:** vietare recensioni, metriche, certificazioni, risultati e attività reali inventate.

## BW-DEC-010 — Demo senza invio dati

**Decisione:** la demo portfolio non trasmette dati personali e dichiara chiaramente il proprio stato dimostrativo.

## BW-DEC-011 — Informazioni pratiche statiche

**Decisione:** orari, indirizzo e contatti non ricevono effetti hover decorativi. Restano semplici, leggibili e accessibili.

## BW-DEC-012 — START prima di BUSINESS

**Decisione:** BUSINESS può iniziare soltanto dopo detector, critique, QA e freeze dello START.

## BW-DEC-013 — Fonte canonica per pattern

**Decisione:** il commit START congelato diventa fonte visuale del concept; i pattern tecnici possono essere corretti prima dell'estrazione e registrati singolarmente.

## BW-DEC-014 — Attribuzione Tretnix

**Decisione:** ogni versione include nel footer:

> Progettato e sviluppato da Tretnix

collegato a `https://tretnix.com`.

## BW-DEC-015 — Gate pre-abbonamenti

**Decisione:** fino all'attivazione manuale degli abbonamenti e a un nuovo comando esplicito, la famiglia resta in preparazione offline. Non creare progetti Lovable, non consumare crediti e non modificare repository remoti.

## BW-DEC-016 — Modularità dei sottosettori verticali

**Decisione:** RITO Studio è un concept portfolio multi-service. Ogni cliente reale riceve soltanto categorie e moduli pertinenti. La famiglia tecnica non obbliga a offrire Hair, Skin, Nails e Wellness insieme.

## BW-DEC-017 — Asset prima del polish

**Decisione:** definire shot list, ratio, diritti e qualità degli asset prima di spendere iterazioni Lovable sul polish fotografico.

## BW-DEC-018 — Prezzo separato dalla specifica prodotto

**Decisione:** la famiglia definisce scope, deliverable, esclusioni e add-on, ma il prezzo viene stabilito dalla politica commerciale Tretnix e dal progetto reale.


## BW-DEC-019 — V1 conservata ma rifiutata visivamente

**Decisione:** conservare la prima implementazione Lovable al commit `47658ae52f0e7585dc887226e90014038e9c63ae` come prototipo tecnico recuperabile, ma non usarla come baseline visuale approvata.

**Motivo:** la direzione fotografica, la hero e il ritmo editoriale non raggiungevano il livello richiesto per RITO Studio START.

## BW-DEC-020 — Una sola generazione V2 indipendente

**Decisione:** autorizzare una seconda e ultima generazione Lovable dalla baseline pre-visuale ripristinata, senza riutilizzare la V1 come riferimento.

**Evidenza:** la V2 candidata è registrata al commit `32fa4d534582be6c08c1303c879d17b7f763a4fd`.

**Limite:** nessuna terza generazione Lovable è autorizzata senza una nuova decisione esplicita.

## BW-DEC-021 — V2 candidata, non baseline congelata

**Decisione:** trattare la V2 come candidata tecnica e di art direction, non come START approvato o congelato.

**Motivo:** la struttura è più coerente della V1, ma fotografia definitiva, copy reconciliation, Impeccable, QA browser e audit restano pendenti.

## BW-DEC-022 — Baseline tecnica prima di Impeccable

**Decisione:** prima dell'audit Impeccable stabilizzare line ending, lint, focus return, focusabilità del drawer chiuso e route tree generata tramite una modifica controllata separata.

**Limite:** questo intervento non autorizza redesign, sostituzione degli asset, deploy o modifiche BUSINESS.

## BW-DEC-023 — Redesign Impeccable consentito entro lo scope START

**Decisione:** dopo la stabilizzazione tecnica, Impeccable può proporre e applicare un redesign sostanziale della UI quando supportato da finding approvati.

**Vincoli da preservare:** scope START, route, copy canonico, palette porcellana/inchiostro/borgogna, accent `#6A3F4B`, Newsreader + Manrope, accessibilità, mobile-first, demo integrity, assenza di backend e attribuzione Tretnix.

**Metodo:** detector e critique iniziano in sola lettura; nessun finding viene applicato automaticamente.

## BW-DEC-024 — Candidato START pre-freeze approvato per la chiusura controllata

**Decisione:** il candidato presente su `fix/rito-start-pre-freeze-polish`, derivato da
`main@cfc3edd965b5fa3d59fe64a0c04259d75c5c4cb1`, è la baseline funzionale e visuale
approvata per il gate di staging dopo la riconciliazione documentale.

**Evidenza:** applicazione e validazione automatica `RitoStartPreFreezePolish v1.9.0`,
revisione completa del diff e browser QA finale confermato il 3 agosto 2026.

**Limite:** questa decisione non equivale a commit, merge, deploy, approvazione definitiva
o freeze. Tali gate restano separati.

## BW-DEC-025 — Prenotazione START tramite contatto telefonico diretto

**Decisione:** RITO Studio START usa CTA `tel:` dirette. Il precedente dialog dimostrativo
e la proprietà `site.booking.demoFeedback` sono rimossi.

**Limite:** è una configurazione del concept START e non riduce le modalità supportate
dalla famiglia per progetti successivi.

## BW-DEC-026 — Integrità demo con presentazione pubblica client-like

**Decisione:** la home può presentarsi come un sito commerciale curato e non deve mostrare
un avviso demo prominente nel footer, purché restino contemporaneamente:

- email `.example` e numero telefonico non operativo;
- `noindex, follow`;
- nessun backend, form, account, pagamento o invio dati;
- nessun dato strutturato `LocalBusiness` o altra rappresentazione commerciale pubblica;
- disclosure esplicita nelle route Privacy e Cookie;
- obbligo di sostituzione e revisione prima dell'uso per un cliente reale.

**Chiarimento:** BW-DEC-010 resta valido per l'assenza di invio dati; cambia soltanto il
posizionamento della disclosure.

## BW-DEC-027 — Listino premium specifico del concept START

**Decisione:** RITO Studio START mostra un listino dimostrativo configurato con prezzi fissi
e prezzi “da”, inclusa una nota che richiede di concordare eventuali variazioni durante la
consulenza.

**Limite:** questi importi sono fixture editoriali del solo concept RITO Studio START. Non
sono prezzi di mercato verificati, non sono default della famiglia Beauty & Wellness e non
autorizzano listini inventati nei progetti cliente.

**Precedenza:** questa eccezione sostituisce, per il solo candidato START, il divieto di
mostrare prezzi fissi del template espresso in BW-DEC-018 e nella definizione prodotto.

## BW-DEC-028 — Mappa di area attivabile su scelta esplicita

**Decisione:** la sezione contatti può offrire una mappa Google della sola area generale
“Prato della Valle, Padova”, caricata esclusivamente dopo azione esplicita dell'utente, con
link esterno disponibile anche senza JavaScript.

**Vincoli:** nessun indirizzo commerciale esatto, nessun marker attribuito a RITO Studio,
nessuna richiesta Google prima dell'attivazione e nessuna affermazione che il concept sia
un'attività reale.

## BW-DEC-029 — Architettura one-page semplificata

**Decisione:** rimuovere `IntroStatement` e `MethodStrip`; integrare l'anchor `#metodo` e il
messaggio metodologico in `RitualFeature`.

**Ordine finale:** `StickyHeader`, `Hero`, `EditorialServiceList`, `RitualFeature`,
`StudioEditorial`, `GalleryRail`, `BookingCTA`, `PracticalInfo`, `Footer`.

**Motivo:** ridurre ridondanza e migliorare ritmo, densità e continuità editoriale senza
ridurre le informazioni essenziali.

## BW-DEC-030 — Indicatore animato della gallery mobile

**Decisione:** usare una sola pill con freccia animata al centro-destra della gallery mobile
come affordance di scroll orizzontale. La pill scompare a fine rail e ricompare tornando
indietro.

**Vincoli:** nessun autoplay, nessun controllo carousel, nessuna intercettazione degli input,
animazione disabilitata con `prefers-reduced-motion` e fallback comprensibile senza
JavaScript.

**Precedenza:** è un'eccezione stretta al divieto generale di loop decorativi; l'animazione
ha una funzione di orientamento e resta visibile soltanto mentre esiste contenuto ulteriore.

## BW-DEC-031 — Navigazione delle policy e skip link

**Decisione:** Privacy e Cookie riutilizzano la navbar START ma non mostrano skip link. La
home conserva invece lo skip link “Vai ai trattamenti” verso `#trattamenti`.

**Vincoli:** route dirette, refresh, Back/Forward, apertura in alto e focus visibile restano
obbligatori.

## BW-DEC-032 — Merge e QA di produzione qualificano il candidato finale START

**Decisione:** il merge commit
`fb0aee1773c6331d1c4dc8e4b702fabf7196a1d2`, creato dalla PR #5 a partire dal
candidato `003fa9ea9322e82cb2d79f78baf5bb29a798e6ae`, è la baseline applicativa
corrente da portare al gate finale di approvazione e freeze.

**Evidenza:** `main` e `origin/main` sono stati sincronizzati sul merge commit; il
production-origin QA automatico `RITO_START_PRODUCTION_ORIGIN_QA v1.0.3` ha
superato installazione frozen, lint, build client/SSR/Nitro, route, metadata,
robots, 404, favicon e disponibilità degli asset; l'utente ha inoltre confermato
la checklist browser sul dominio pubblico senza blocker o major.

**Limite:** il provider non espone in questa evidenza un'attestazione
crittografica dello SHA distribuito. L'allineamento è supportato da contenuti,
metadata, favicon, topologia dei chunk e comportamento pubblico. Questa
decisione non equivale ancora ad approvazione, freeze o tag.

## BW-DEC-033 — Identificazione non auto-referenziale del freeze finale

**Decisione:** il target definitivo del freeze sarà il merge commit della PR di
chiusura documentale, purché discenda da
`fb0aee1773c6331d1c4dc8e4b702fabf7196a1d2` e il diff resti limitato ai file
documentali approvati.

Un file versionato non può contenere lo SHA del commit che contiene quel
medesimo file. Lo SHA finale non deve quindi essere incorporato tramite un
ulteriore commit che sposterebbe `main` oltre il target scelto.

**Fonte autorevole:** dopo il merge, un tag annotato approvato deve puntare al
merge commit verificato. Il messaggio del tag e i metadata GitHub registrano
SHA, approvazione e freeze.

**Gate:** sincronizzare `main`, verificare lo SHA risultante, ottenere
approvazione e autorizzazione al freeze, scegliere il nome del tag, creare e
verificare il tag, quindi autorizzarne separatamente il push.

## BW-DEC-034 — Contratto START → BUSINESS preparato ma inattivo

**Decisione:** introdurre `docs/START_BUSINESS_CONTRACT.md` come contratto di
eredità preparatorio. Il documento diventa operativo soltanto dopo il merge
della chiusura documentale, l'approvazione e il freeze dello START, la creazione
e verifica del tag annotato e una nuova autorizzazione esplicita per BUSINESS.

**Limite:** la presenza del contratto non autorizza la creazione della
repository BUSINESS, l'implementazione multipagina, backend, database,
autenticazione, booking nativo, deploy o consumo di crediti.

## BW-DEC-035 — Shared UX sync START dopo il confronto BUSINESS

**Decisione:** riportare nello START esclusivamente i refinement tecnici e editoriali
confermati nel BUSINESS che migliorano il prodotto senza cambiarne l'architettura one-page.

Sono approvati:

- contenimento `overflow-y-hidden` del rail gallery mobile, preservando scroll X nativo e pill;
- cursore pointer sugli elementi cliccabili abilitati;
- lift hover minimo sulle CTA primarie, disattivabile con reduced motion;
- titoli editoriali abbreviati:
  - `Quattro aree di cura.`;
  - `Prima viene l’ascolto.`;
  - `Uno spazio per il gesto.`;
  - `Il tuo tempo di cura.`;
- sezione FAQ direttamente nella home START, con le sei FAQ, animazioni e comportamento
  dell'accordion identici al BUSINESS approvato.

**Vincolo:** START resta one-page. Non vengono introdotti `/faq`, lightbox gallery,
gesture di redirect a fine rail, treatment dialog, filtri catalogo o altre feature
multipagina BUSINESS.

**Evidenza:** `RITO_START_BUSINESS_SHARED_UX_SYNC_CCP v1.0.0` applicato e validato
il 7 agosto 2026; frozen install, lint, build e `git diff --check` hanno terminato
con exit code 0. L'utente ha successivamente approvato la resa manuale complessiva.

## Decisione condivisa — Premium dark actions e navigazione del logo — 8 agosto 2026

**Decisione:** RITO Studio START e BUSINESS condividono due contratti UX.

1. Le azioni rettangolari con fondo inchiostro mantengono il fondo nero e usano un unico
   feedback premium: sweep luminoso molto discreto, lift massimo di 1 px, ombra contenuta
   e micro-compressione in active. L'hover è riservato ai dispositivi `pointer: fine`;
   `prefers-reduced-motion` elimina movimento e sweep.
2. Il logo in navbar e footer, quando l'utente è già sulla home, porta alla cima usando
   l'helper di scroll esistente; da una route diversa naviga a `/` con reset in cima.
   Lo stato history esistente viene preservato e Back/Forward non vengono bypassati.

**Esclusioni:** controlli circolari, azioni bianche/outlined, route, copy, dipendenze,
gallery, catalogo trattamenti e architettura one-page START non vengono modificati.

**Evidenza START:** candidate
`3cfb186c77c21218308cc3cd54e75248fafcd93a`, PR #8, merge
`125b20f2cd758e0e43e4408e4ea96b04c9eb7874`.

**Evidenza BUSINESS:** candidate
`5e0ba1acd51dfca0274768ed155224820e81b9d9`, PR #5, merge
`276fd8e2d985bc7ea37442546800d14236009705`.

**Limite:** questa decisione non prova un nuovo deploy di produzione e non sposta
automaticamente alcun freeze precedentemente dichiarato.


## BW-DEC-036 — Parità funzionale START con Forno Lume, identità Beauty invariata

**Decisione:** usare la baseline frozen corrente di Forno Lume START come benchmark di
completezza funzionale per RITO Studio START, senza ereditarne identità visuale, composizione,
palette, tipografia, radius, ombre o linguaggio motion. RITO mantiene Newsreader + Manrope,
porcellana/inchiostro/borgogna, superfici quasi squadrate, fotografia tattile e ritmo editoriale.

Il pass di parità introduce nello START RITO, nello stesso change set controllato:

- `BookingAction` configurabile per uno o più canali di prenotazione;
- CTA principali collegate all'adapter invece che al canale hard-coded;
- una trust band editoriale minimale subito dopo la hero;
- microinformazioni pratiche nella hero;
- sezione recensioni Google opzionale, assente quando non configurata;
- fixture recensioni disponibile esclusivamente in development tramite `?reviewsPreview=1`;
- voce `Recensioni` nella navigazione soltanto quando recensioni reali sono abilitate;
- `RouteFocus` per reset immediato in alto e focus sul `main` nelle vere navigazioni `PUSH`;
- metadata social completi con immagine e `WebSite`/`WebPage` JSON-LD neutro.

**Chiarimento su BW-DEC-025:** la configurazione portfolio corrente resta telefonica e quindi,
con un solo canale configurato, `BookingAction` produce direttamente il link `tel:` senza dialog.
BW-DEC-025 resta valido come configurazione del concept, ma non è più un vincolo architetturale:
un cliente reale può configurare telefono, WhatsApp o provider esterno e, con più canali,
l'adapter presenta una scelta accessibile senza cambiare i componenti consumer. Il fallback
`noscript` della navbar resta sul canale telefonico del concept.

**Integrità recensioni:** `site.googleReviews.enabled` resta `false` e l'array pubblico resta
vuoto finché non vengono forniti dati autentici. Le fixture development sono esplicitamente
marcate come anteprime tecniche e non devono essere pubblicate come testimonianze reali.

**Ordine home risultante:** `StickyHeader`, `Hero`, `TrustBand`, `EditorialServiceList`,
`RitualFeature`, `StudioEditorial`, `GalleryRail`, `FaqSection`, `ReviewsSection` opzionale,
`BookingCTA`, `PracticalInfo`, `Footer`.

**Esclusioni:** nessun backend, form, database, booking nativo, disponibilità live, pagamento,
CRM, dipendenza nuova, `LocalBusiness` structured data, redesign Hospitality, modifica della
gallery o sostituzione degli asset.

**Gate:** il presente requisito autorizza preparazione e applicazione locale tramite Controlled
Change Package. Validazione automatica, browser QA, diff review, stage, commit, push, PR, merge
e deploy restano checkpoint separati; nessuno è implicito.


## BW-DEC-037 — Consolidamento conversione, mappa, recensioni e rimozione TrustBand

**Decisione:** il feedback browser approvato del 31 agosto 2026 aggiorna il candidate START
senza riaprire l'identità visuale Beauty & Wellness.

Sono approvati nello stesso pass controllato:

- due intenti di conversione distinti, coerenti con il pattern Hospitality verificato:
  - `booking` presenta WhatsApp e telefono;
  - `contact` presenta email e telefono;
- CTA di prenotazione e contatto consumano lo stesso adapter configurabile senza backend o
  booking nativo;
- la configurazione demo usa esclusivamente email `.example` e numero non operativo;
- nella sezione informazioni pratiche `locationLabel` vive nella colonna informativa di sinistra
  e non viene ripetuto sotto la mappa;
- la barra sotto la mappa mantiene `Disattiva mappa` a sinistra quando attiva e
  `Apri su Google Maps` a destra; il consenso on-demand e il fallback `noscript` restano invariati;
- le recensioni opzionali usano una griglia `1` su mobile, `2 + 1` su tablet e `3` su desktop
  ampio, mantenendo tipografia, bordi e linguaggio visuale RITO;
- la `TrustBand` statica introdotta da BW-DEC-036 viene rimossa senza sostituzione nello START;
  anche la relativa configurazione `site.trust` viene eliminata.

**Precedenza:** questa decisione sostituisce BW-DEC-025 per la configurazione di conversione
del concept corrente e sostituisce BW-DEC-036 nei punti relativi a `BookingAction` e
`TrustBand`. Restano validi RouteFocus, recensioni opzionali real-only, fixture development,
metadata social e JSON-LD neutro introdotti da BW-DEC-036.

**Footer:** RITO adotta il pattern legale compatto condiviso: copyright, `Privacy` e `Cookie`
nella fascia utility inferiore insieme all’attribuzione Tretnix, senza una colonna `Info` o
`Legale` separata quando non aggiunge valore informativo. L’attribuzione approvata resta invariata.

**Esclusioni:** nessuna dipendenza nuova, backend, form, database, disponibilità live, pagamento,
CRM, redesign Hospitality, modifica degli asset o deploy.

## BW-DEC-038 — Freeze finale START e consolidamento BUSINESS sul lineage aggiornato

**Data:** 31 agosto 2026

**Decisione:** il candidate RITO Studio START risultante dai pass di parita funzionale,
consolidamento conversione, browser-QA contact polish e visual cleanup e approvato come
candidate finale da congelare formalmente.

Il freeze diventa canonico soltanto quando il contenuto validato viene registrato in un
commit Git esplicito e il tag locale `family-start-v1.0` punta esattamente a quel commit.
Stage, commit, tag, push, PR e merge non vengono eseguiti automaticamente dal Controlled
Change Package.

Dopo il checkpoint Git, RITO Studio BUSINESS e autorizzato a riconciliare il proprio lineage
con il nuovo freeze START senza ricostruire il prodotto da zero. Il repository BUSINESS
esistente resta la base operativa; le differenze BUSINESS approvate restano intenzionali.

**Evidenza disponibile:**

- `RITO-START-Conversion-UX-Knowledge-CCP v1.0.5` — Apply/Validate PASS;
- `RITO-START-Browser-QA-Contact-Polish-CCP v1.0.0` — Apply/Validate PASS;
- `RITO-START-Browser-QA-Contact-Visual-Cleanup-CCP v1.0.0` — Apply/Validate PASS;
- browser QA mirato ha prodotto e corretto i finding su mappa, popup navbar, icone contatto
  e footer;
- code-first rhythm audit del 31 agosto 2026 non ha rilevato correzioni di ritmo da applicare;
- l'utente ha autorizzato esplicitamente il freeze START e la prosecuzione BUSINESS.

**Limite di evidenza:** le ultime due micro-correzioni visuali (rimozione underline persistente
dell'indirizzo footer e rimozione bordi autonomi delle icone popup) hanno superato i gate
automatici, ma non viene dichiarato un ulteriore browser run completo non documentato.
L'approvazione di freeze dell'utente accetta questo limite noto; non trasforma un controllo
non eseguito in un PASS.

**BUSINESS PLUS:** non viene aperto o modificato da questa decisione.

## BW-DEC-039 — Refreeze finale dopo interaction polish e handoff BUSINESS

**Data:** 5 settembre 2026

**Decisione:** i refinement approvati e uniti tramite PR #12 e PR #13 sostituiscono il
candidate applicativo precedente come sorgente da portare al refreeze finale START.

La baseline applicativa pre-closure è:

```text
523958b51e0d952c963380e6d384365b286953ca
```

Il ciclo finale incorpora inoltre gli standard condivisi Tretnix già canonici:

- `TRX-DEC-038` per divider editoriali con reveal autonomo opacity-only e layout invariato;
- `TRX-DEC-039` per `Privacy` + `Cookie` come coppia legale non separabile.

L'utente ha approvato il browser QA finale, ha autorizzato esplicitamente il freeze START e ha
autorizzato la prosecuzione su RITO Studio BUSINESS dopo la verifica del tag frozen.

**Identità del freeze:** `523958b...` è la baseline applicativa da chiudere, non il target frozen
autorevole. Il freeze canonico è il merge commit della closure documentale finale discendente da
`523958b...`, identificato dal tag annotato `family-start-v1.0` e verificato localmente e sul
remoto.

**BUSINESS:** dopo la verifica del tag, riconciliare il repository BUSINESS esistente contro la
nuova baseline frozen senza ricrearlo e senza cancellare differenze BUSINESS intenzionali.

**Limite di evidenza:** lint, build, diff check e browser QA finale sono registrati. Non è
registrato un nuovo deploy o production-origin QA successivo alla PR #13 e non deve essere
dichiarato come eseguito.

**BUSINESS PLUS:** resta fuori scope e non viene autorizzato da questa decisione.
