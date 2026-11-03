// Fiktive Stammdaten der Beispielpraxis. Alles hier ist erfunden.
export const praxis = {
  name: 'Physiotherapie Musterfrau',
  kurzname: 'Physio Musterfrau',
  claim: 'Wieder gut in Bewegung.',
  inhaberin: 'Erika Musterfrau',
  gruendung: 2014,
  strasse: 'Lindenstraße 23',
  plz: '12345',
  ort: 'Musterstadt',
  lage: '1. Obergeschoss, mit Aufzug',
  telefon: '+49 123 456 230 0',
  telefonHref: 'tel:+491234562300',
  email: 'termin@physio-musterfrau.example',
  // Für die Kopfzeile: wann jemand ans Telefon geht
  telefonzeiten: 'Mo – Fr, 8 – 12 Uhr',
  oeffnungszeiten: [
    { tage: 'Montag – Donnerstag', zeit: '7:30 – 19:00 Uhr' },
    { tage: 'Freitag', zeit: '7:30 – 14:00 Uhr' },
    { tage: 'Samstag', zeit: 'nach Vereinbarung' },
  ],
};

export const navigation = [
  { href: '/leistungen/', label: 'Leistungen' },
  { href: '/praxis/', label: 'Praxis & Team' },
  { href: '/ihr-termin/', label: 'Ihr Termin' },
  { href: '/kontakt/', label: 'Kontakt' },
];

// Designvarianten auf denselben Inhalten. Der erste Stil gilt ohne Auswahl und ohne JavaScript.
export const stile = [
  { id: 'ruhepuls', label: 'Ruhepuls' },
  { id: 'lehrbuch', label: 'Lehrbuch' },
  { id: 'trainingsplan', label: 'Trainingsplan' },
] as const;

export const ersteller = {
  name: 'Hannes Schaletzky',
  url: 'https://hschaletzky.com',
};

export const euro = (wert: number) =>
  new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR', minimumFractionDigits: 0, maximumFractionDigits: 2 }).format(
    wert,
  );

// Alle Fotos stammen von Unsplash (Unsplash-Lizenz).
export const bildnachweise = [
  ['Julius Toltesi', 'ZzkNkbUxFMc'],
  ['Nightingale Home nurse', '4e017fuMeXE'],
  ['Caroline Badran', 'm56-PAdMhM0'],
  ['yury kirillov', 'pbUWW-CBoqY'],
  ['Sincerely Media', 'inoZpsBQRqk'],
  ['Sincerely Media', 'mvHuY-t4QII'],
  ['Sincerely Media', 'wGFibXDQlBI'],
  ['Toa Heftiba', 'hBLf2nvp-Yc'],
  ['Stephen Olmo', 'YBfzGCJjLuI'],
  ['Performance Medicine', 'KCLuRlZxITU'],
  ['Annie Spratt', 'Nt5eeIKH-1s'],
] as const;
