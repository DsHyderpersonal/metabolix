# METABOLIX — Tracker Metabolico Personale

> Monitora il tuo peso, la composizione corporea e il bilancio calorico giorno per giorno. Tutto sincronizzato nel cloud, accessibile da qualsiasi dispositivo.

**Demo live:** [dshyderpersonal.github.io/metabolix](https://dshyderpersonal.github.io/metabolix)

---

## Cos'è METABOLIX

METABOLIX è un tracker calorico e metabolico pensato per chi vuole andare oltre il semplice conteggio delle calorie. L'app registra ogni giorno il peso corporeo, la composizione (massa grassa, muscolare, ossea, idrica), le calorie assunte e il livello di attività fisica, calcolando automaticamente il fabbisogno energetico reale e il bilancio calorico della giornata.

I dati vengono salvati sia in locale che nel cloud tramite Supabase, quindi sono sempre disponibili su qualsiasi dispositivo: basta accedere con il proprio account.

---

## Installazione

### Sul browser (qualsiasi dispositivo)

Vai su [dshyderpersonal.github.io/metabolix](https://dshyderpersonal.github.io/metabolix), crea un account e inizia subito a usarla.

### Come app su Android

1. Apri **Chrome** sul tuo telefono
2. Vai su `https://dshyderpersonal.github.io/metabolix/`
3. Tocca i tre puntini in alto a destra → **"Aggiungi alla schermata Home"**
4. Conferma: l'app appare sulla home con la sua icona

Da quel momento si apre come una vera app, senza barra del browser.

### Come app su iPhone / iPad

1. Apri **Safari** (obbligatorio, Chrome non supporta questa funzione su iOS)
2. Vai su `https://dshyderpersonal.github.io/metabolix/`
3. Tocca l'icona **Condividi** (il quadrato con la freccia)
4. Scorri e tocca **"Aggiungi alla schermata Home"**

---

## Come si usa

### Registrazione e accesso

Al primo avvio viene mostrata la schermata di autenticazione. Scegli **Registrati** e compila i dati richiesti: nome, sesso, altezza, data di nascita e peso obiettivo. Questi dati servono all'app per calcolare il tuo metabolismo basale con la formula di Harris-Benedict. Una volta creato l'account, bisogna verificare la mail con una mail automatica inviata, l'accesso successivo è automatico grazie alla sessione salvata in locale.

---

### Dashboard

È la schermata principale, quella che vedi appena apri l'app. Mostra in un colpo d'occhio i dati della giornata corrente:

- **Peso** — il valore inserito oggi
- **Calorie assunte** — le kcal mangiate
- **TDEE** — il fabbisogno calorico totale calcolato in base al tuo metabolismo e all'attività del giorno
- **Target** — il TDEE meno 500 kcal, ovvero l'obiettivo da rispettare per perdere circa mezzo chilo a settimana

Sotto i chip numerici trovi il **bilancio calorico** del giorno (deficit o surplus), la **composizione corporea** e un **riepilogo settimanale**. In fondo c'è il grafico del trend del peso degli ultimi 14 giorni.

Se non hai ancora inserito i dati di oggi, compare il pulsante **+ Aggiungi giornata** che ti porta direttamente alla schermata di inserimento.

---

### Inserisci Giornata

Qui si compila la giornata. La schermata è divisa in tre sezioni.

**Composizione Corporea** — inserisci i valori che leggi dalla tua bilancia smart (o da una plicometria): peso, percentuale di massa grassa, massa muscolare in kg, massa ossea in kg, percentuale di acqua corporea e grasso viscerale. Se la tua bilancia fornisce anche il metabolismo basale misurato, puoi inserirlo nel campo apposito.

**Calorie & Calcoli** — inserisci le calorie che hai mangiato durante il giorno. L'app calcola in tempo reale il tuo BMR (metabolismo basale) tramite Harris-Benedict, il QAF (coefficiente di attività) e il TDEE risultante.

**Attività Giornaliera** — questa è la parte più interessante. Invece di scegliere una categoria fissa (sedentario, moderato, attivo), METABOLIX ti chiede di distribuire le 24 ore della giornata tra cinque livelli di attività:

| Livello | Esempi | Moltiplicatore |
|---|---|---|
| Riposo / Sonno | Dormire, stare fermi | ×1 |
| Molto leggera | Lavoro al PC, guidare | ×1.5 |
| Leggera | Passeggiata, faccende | ×2.5 |
| Moderata | Ciclismo, ballo | ×5 |
| Pesante | Palestra, sport intenso | ×7 |

Il QAF viene calcolato come media ponderata delle ore: `QAF = somma(ore × moltiplicatore) ÷ 24`. Questo metodo è molto più preciso rispetto ai moltiplicatori fissi, perché riflette l'effettiva distribuzione delle attività nella tua giornata reale.

Premi **Salva Giornata** per salvare tutto. I dati vengono scritti immediatamente in locale e sincronizzati nel cloud.

---

### Statistiche

La schermata Statistiche è il cuore analitico dell'app. Puoi scegliere la visualizzazione per **Settimana** o **Mese**.

In cima trovi quattro KPI: media calorie, media TDEE, media peso e media QAF del periodo. Seguono i grafici:

- **Calorie assunte vs TDEE vs Target** — per vedere quanto sei stato vicino all'obiettivo ogni giorno
- **Trend Peso** — la curva del tuo peso nel tempo
- **Bilancio Calorico Giornaliero** — barre positive (surplus) e negative (deficit)
- **QAF — Livello Attività** — quanto sei stato attivo ogni giorno
- **Composizione Corporea — Trend** — l'andamento di massa grassa e muscolare nel tempo
- **Perdita Peso Prevista vs Reale** — confronta quanto avresti dovuto perdere in teoria (basandosi sul deficit accumulato) rispetto a quanto hai perso realmente

In fondo c'è la sezione **Progressi verso l'obiettivo**: mostra la distanza dal peso target, la percentuale di avanzamento e una stima del tempo rimanente a ritmo di −500 kcal/giorno.

---

### Storico

Elenco di tutte le giornate registrate in ordine cronologico inverso. Ogni riga mostra data, peso, calorie, TDEE e QAF, con un tag colorato che indica se la giornata è stata in deficit, surplus o neutrale. Toccando una riga si carica quella giornata nella schermata di inserimento, così puoi modificarla o consultarla nel dettaglio.

---

### Profilo

Qui puoi aggiornare i tuoi dati anagrafici (nome, sesso, altezza, data di nascita, peso obiettivo). L'app mostra anche la formula di Harris-Benedict personalizzata con i tuoi valori, così puoi vedere esattamente come viene calcolato il tuo metabolismo basale.

---

## La scienza dietro l'app

### Metabolismo Basale (BMR) — Formula di Harris-Benedict

Il metabolismo basale rappresenta le calorie che il tuo corpo brucia a riposo completo, solo per mantenere le funzioni vitali (respirazione, circolazione, temperatura corporea). METABOLIX lo calcola con la formula di Harris-Benedict revisionata:

**Uomini:** `BMR = 66.47 + (13.75 × peso in kg) + (5 × altezza in cm) − (6.75 × età)`

**Donne:** `BMR = 655.1 + (9.56 × peso in kg) + (1.85 × altezza in cm) − (4.68 × età)`

Il BMR dipende quindi da quattro variabili: peso, altezza, età e sesso. Per questo l'app chiede questi dati in fase di registrazione e li aggiorna automaticamente ogni giorno in base al peso inserito.

### TDEE — Fabbisogno Energetico Totale

Il TDEE (Total Daily Energy Expenditure) è il numero totale di calorie che bruci in una giornata, tenendo conto dell'attività fisica. Si calcola moltiplicando il BMR per il QAF: `TDEE = BMR × QAF`.

Il metodo classico prevede cinque livelli fissi (sedentario 1.2, leggermente attivo 1.375, ecc.). METABOLIX adotta invece un approccio più granulare: distribuisci le 24 ore tra i cinque livelli di attività e il QAF emerge come media ponderata. Questo riduce significativamente gli errori di stima che si commettono quando si sceglie una categoria fissa che non rispecchia mai perfettamente la realtà quotidiana.

### Bilancio Calorico e Perdita di Peso

Il principio di base della gestione del peso è la differenza tra calorie introdotte e calorie consumate. Un deficit di 7700 kcal corrisponde approssimativamente alla perdita di un chilo di tessuto adiposo. Mantenere un deficit costante di 500 kcal al giorno porta quindi a perdere circa mezzo chilo a settimana, un ritmo considerato sicuro e sostenibile dalla letteratura scientifica.

L'app calcola questo bilancio ogni giorno: `bilancio = calorie assunte − TDEE`. Valori negativi indicano deficit (favorevole alla perdita di peso), valori positivi indicano surplus.

### Composizione Corporea

Il peso da solo è un indicatore incompleto. Due persone con lo stesso peso possono avere composizioni corporee molto diverse, con conseguenze opposte sulla salute e sulla performance. METABOLIX traccia separatamente la massa grassa (in %), la massa muscolare (in kg), la massa ossea e la percentuale di acqua corporea. Monitorare questi valori nel tempo permette di distinguere una vera perdita di grasso da una perdita di massa muscolare o di acqua, che è l'informazione davvero utile durante un percorso di dimagrimento o di composizione corporea.

Il grasso viscerale (il grasso che si accumula attorno agli organi interni) viene tracciato separatamente perché è il più correlato al rischio cardiovascolare e metabolico, indipendentemente dal peso totale.

---

## Tech stack

- HTML/CSS/JavaScript vanilla — nessun framework
- [Chart.js](https://www.chartjs.org/) per i grafici
- [Supabase](https://supabase.com/) per autenticazione e database cloud
- GitHub Pages per l'hosting
