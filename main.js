var Num = 0;
var word = 0;
var speaking = 0;
var text = 0;
var synth = window.speechSynthesis;
var voices = synth.getVoices();
var score = 0;

speaking.voice = voices[6];
speaking.rate = 0.5


const Word = ["dandelion", "declarative", "decorative", "definitely", "delinquent", "democratically", "demolition", "demonstrate",
 "desperate", "despondent", "destination", "abdomen", "Abraham", "abrupt", "absolution", "abundant",
  "academia", "accelerate", "accommodate", "achievement", "acoustics", "acquaintance", "acronym", "acrylic", "adequately", "adjacent", "adjournment", "admiration", "adoption", "adventurous", "advisable",
   "affectionately", "affiliate", "affliction", "aforesaid", "agriculture", "alfalfa", "algebraic",
   "alkali", "allegiance", "alliance", "alligator", "ambassador", "analyze", "anecdote", "annoyance", "anonymous", "antecedent", "apocalypse", "apostrophe", "apparent", "appease", "apprehend", "apprentice", "appropriate", "approximately", "architecture", "arrangement",
    "arrogance", "articulate", "ascension", "asparagus", "assumption", "atmosphere", "attorney", "audacious", "authorized", "authorship", "bankruptcy", "barometer", "baroque", "battalion", "battle", "behavior", "benediction", "beneficial", "benevolent", "biathlon", "bibliography", "bilingual", "binary", "biochemistry", "biologist", "biopsy",
  "bizarre", "blasphemy", "bludgeon", "boulevard", "boundary", "bouquet", "boysenberry", "bratwurst", "bravado", "brevity", "buoyancy",
   "bureaucracy", "burglary", "Byzantine", "calamitous", "calypso", "camouflage", "candelabra", "candidacy", "capable", "cartilage", "cataract", "catastrophe", "catechist", "celestial", "cellular", "cellulose", "censorship", "chandelier", "characterization", "chassis", "chenille", "chlorine", "chronological",
    "circulation", "circumstantial", "clarification", "codeine", "cohesion", "Colossians", "combination", "comedian", "commandeer", "commercialize", "commissary", "communication", "communities", "compassion", "confederate", "confinement", "congregate", "connived", "conscience", "consecration", "consensus", "constellation", "contagious", "contemplated", "continuity", "contradictory", "conversion", "copyright", "corduroy", "Corinthians", "counterfeit", "covenant", "cultivation", "dachshund", "developmental", "devour", "dictatorship", "difficulties", "dilapidated", "diminish", "disappointed", "disarray", "discoveries", "discussion", "disobedient", "diversity", "documentary", "dormancy", "dramatic", "ecologist", "economically", "economist", "efficiently", "effluent", "elaborately", "electrical", "electricity", "elementary", "eligible", "ellipse", "emergencies", "eminent", "enchilada", "enrich","bureaucrats", "refuge", "shoal", "perpendicularity", "antechamber", "jeopardy", "sauna", "conciliatory", "forsook", "boba", "animatronics", "frijoles", "minimus", "senescent", "secreted", "aspirin", "aptitude", "Chicana", "bilge", "simultaneously", "Copenhagen", "Bunsen burner", "incited", "deficiencies", "incarnated", "pews", "malicious", "interstellar", "petticoat",
 "insufferable", "spawned", "gorilla", "quarry", "kung fu", "steeds", "destitution", "patronize", "dilute", "societal", "uncanny", "communing", "deadpan", "arable", "surfactant", "nitrogen", "paralysis", "metronome", "attorney", "snivel", "contemptible", "altimeter", "jugular", "insolent", "aura", "propitious", "ellipsis", "thyroid", "elongated", "lasso", "incandescent", "bionic", "sultanate", "turban", "sausage", "disgruntled", "terrify", "quip", "information", "incubator", "droll", "vultures", "Arabic", "Brooklyn", "sacred", "reindeer", "disclaimer", "quotation", "superior", "privilege", "fallow", "replica", "provision", "reference", "havens", "voracious", "tripe", "slakes", "Illinois", "commandments", "contagion", "decibels", "repose", "nondescript", "expulsion", "Laundromat", "pervading", "malnutrition", "tunic", "extravagant", "innards", "acclimate", "recede", "indignant", "wok", "categorically", "demure", "chasm", "hitherto", "horticulture", "magistrates", "sprocket", "punctually", "dynasty", "koi",
 "abbreviation", "abhorred", "absolution", "absorbency", "absurdity", "acceleration", "accelerator", "accessible", "accessible", "accolade", "accomplice", "accomplishment", "accreditation", "accrual", "acknowledging", "acquittal", "acupuncture", "adjacent", "administrative", "adolescence", "aerodynamic", "aeronautics", "aggregate", "aghast", "algebraically", "algorithm", "alleviate", "altercation", "altocumulus", "amicable", "amnesia", "amortization", "anaphylaxis", "ancillary", "anesthesia", "anniversary", "annotation", "anonymous", "antagonism", "antiphon", "antiquity", "apartheid", "appendicitis", "apropos", "Archdiocesan", "aristocrat", "arraignment", "assassinate", "auspices", "baccalaureate", "backgammon", "ballistic", "baroque", "beautifully", "belligerent", "beneficiary", "bereavement", "bicentennial", "blasphemous", "blasphemously", "boisterous", "bouillon", "boutonniere", "buccaneer", "bureaucrat", "calisthenics", "camouflage", "cantankerous", "cappuccino", "carbohydrate", "carcinogen", "catastrophe", "catechumen", "cauterize", "champagne", "chasuble", "chauvinism", "chronological", "chrysanthemum", "claustrophobia", "coincidental", "collateral", "collegial", "colossal", "commensurate", "commitment", "compassion", "condescending", "connoisseur", "conscientious", "conservationist", "consignment", "consternation", "consubstantial", "crescendo", "curriculum", "cybernetics", "debonair", "deceive", "decentralization", "deciduous", 
 "deficiency", "delicatessen", "delirious", "denominator", "Deuteronomy", "dexterity", "dialogue", "dialysis", "differentiate", "dilapidated"
 , "discourse", "disposition", "diversify", "divinity", "doctrine", "documentary", "documentation", "dominance", "dystrophy", "eccentric", "Ecclesiastes", "eclectic", "ecumenism", "efficiency", "egocentric", "eloquence", "embezzlement", "emeritus", "empirical", "enlightenment", "entomologist", "entourage", "entrepreneur", "enunciate", "enzyme", "Ephesians", "equilateral", "equilibrium", "espionage", "etiquette", "eucalyptus", "euphemism", "euthanasia", "evangelization", "exhilarated", "Exodus", "extemporaneous", "extenuating", "extraneous", "extraordinary", "extraterrestrial", "extravagant", "Ezekiel", "facetiously", "facilitate", "Fahrenheit", "fatigue", "favoritism", "feasible", "fictitious", "fidelity", "flagrant", "flamboyant", "fluorescent", "fortissimo", "fortitude", "frankincense", "frivolous", "furlough", "genealogy", "geocentric", "geographical", "geriatrics", "glandular", "globalization", "grievance", "gubernatorial", "gullible", "hacienda", "hallucination", "handkerchief", "harmonious", "haughtily", "hemorrhaging", "heterogeneous", "hieroglyphic", "hieroglyphics", "hippopotamus", "humiliate", "idealistically", "idiosyncratic", "illumination", "immaculate", "imperative", "impetus", "improvise", "incandescence", "incognito", "inconsequential", "incorrigible", "indigenous", "inflammatory", "inheritance", "inoculate", "insecticide", "insinuate", "inspiration", "insufficient", "intellectualize", "interference", "interplanetary", "interpretation",
  "irrevocable", "isolation", "isopropyl", "isotope", "isthmus", "itinerary", "Japanese", "jaundiced", "judgmental",
  "jurisdiction", "jurisprudence", "kaleidoscope", "knowledgeable", "labyrinth", "lackadaisical", "Lamentations", "lethargic", "Leviticus", "liberalism", "liberation", "lieutenant", "logarithm", "longitudinal", "luminous", "maintenance", "Malachi", "maraschino", "massacre", "mathematician", "matriarch", "matrimony", "mausoleum", "mechanical", "mediocrity", "Mediterranean", "memorabilia", "meringue", "Mesozoic", "metacarpal", "metaphysics", "mezzanine", "Micah", "microbial", "mischievous", "misnomer", "modesty", "mozzarella", "myrrh", "mystical", "mythology", "nautilus", "necessarily", "Nehemiah", "nepotism", "neurotic", "nimbostratus", "notoriety", "nuisance", "obedience", "obstetrician", "ophthalmologist", "opinionated", "ordination", "osmosis", "ostentatious", "outrageous", "overconfidence", "oxymoron", "pachyderm", "paleontology", "panoramic", "paramedic", "paranoia", "parliament", "pasteurize", "pedestrian", "penitentiary", "Pentecost", "pericardium", "peritonitis", "perpendicularly", "perseverance", "pharmaceutical", "philanthropist", "philharmonic", "Philippians", "Philistines", "plagiarize", "platypus", "plausible", "pneumatic", "polychromatic", "potpourri", "precocious", "preposterous", "prerogative", "procrastination", "proem", "prolific", "prophetic", "prospectus", "prudence", "puppeteer", "pyrotechnics", "quadrilateral", "quandary", "quarantine", "quarrelsome", "questionnaire", "quiche", "quintessence", "quivering", "rambunctious", "recession", "reciprocal", "recognizance", "reconciliation", 
  "referendum", "reimbursable", "rendezvous", "repertoire", "repudiate", "reservoir","resolute", "responsorial", "restitution", "resurrection", "rheumatism", "romanticism", "salvation", "sanctifying", "sanguine", "scenario", "scrumptious", "sensationalism", "sergeant", "simultaneous", "Sirach", "staccato", "stymied", "subservient", "superficial", "susceptibility", "symmetrical", "synonymous", "synoptic", "synthetic", "temperamental", "temperance", "temptation", "tenacious", "theological", "thesaurus", "Thessalonians", "throughout", "timorous", "totalitarian", "translucent", "transmissible", "turpitude", "turquoise", "tyrannical", "tyranny", "ulcerate", "ultimately", "unceremoniously", "unconscious", "unforgettable", "unilateral", "university", "vacillate", "vehement", "vendetta", "vengeance", "ventriloquist", "vindicate", "vindictive", "visibility", "vitality", "vulcanize", "wearisome", "wharf", "whimsical", "whippoorwill", "wretchedness", "xenophobia", "Zechariah", "Zephaniah", "zephyr"


];




function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }

  

function reset()
{
  document.getElementById("reply").innerHTML = "";
    document.getElementById("textbox").value = "";
    Num = Math.floor(Math.random()*699);
    console.log(Num);
    word = Word[Num];
    console.log(word);
    sleep(3000);
  
    var speaking = new SpeechSynthesisUtterance(word);
    synth.speak(speaking);
  

    
}

function Check()
{
    text = document.getElementById("textbox").value;  
    console.log(text);
    if(text == word)
    {
      var speaking = new SpeechSynthesisUtterance("Correct");
      synth.speak(speaking);
      sleep(3000);
      reset();
      score = score+1;
      document.getElementById("score").innerHTML = "Score: " + score;
    }
    else
    {
      var speaking = new SpeechSynthesisUtterance("That is Incorrrect you idiot");
      synth.speak(speaking);
      document.getElementById("reply").innerHTML = "-"+word;
      score = 0;
      document.getElementById("score").innerHTML = "Score: " + score;
    }
    
}

  