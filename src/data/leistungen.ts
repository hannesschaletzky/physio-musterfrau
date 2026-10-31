import type { ImageMetadata } from 'astro';
import knie from '../assets/images/knie.jpg';
import schulter from '../assets/images/schulter.jpg';
import hanteln from '../assets/images/hanteln.jpg';
import unterarm from '../assets/images/unterarm.jpg';
import massage from '../assets/images/massage.jpg';
import stange from '../assets/images/stange.jpg';

export interface Leistung {
  id: string;
  titel: string;
  kurz: string;
  text: string;
  hilftBei: string[];
  dauer: string;
  // Preis für Selbstzahler; mit Rezept rechnen wir direkt mit der Kasse ab
  preis: number;
  rezept: boolean;
  bild: ImageMetadata;
  alt: string;
}

export const leistungen: Leistung[] = [
  {
    id: 'krankengymnastik',
    titel: 'Krankengymnastik',
    kurz: 'Gezielte Übungen, die Beweglichkeit, Kraft und Koordination Schritt für Schritt zurückbringen.',
    text: 'Wir schauen uns an, wo es hakt, und erarbeiten Übungen, die zu Ihrem Alltag passen. Ein Teil der Behandlung findet auf der Liege statt, ein Teil im Stehen und in Bewegung. Sie gehen mit zwei, drei Übungen nach Hause, die Sie wirklich machen können.',
    hilftBei: ['Rückenschmerzen', 'nach Operationen', 'Arthrose', 'Gleichgewicht und Sturzangst'],
    dauer: '20 Minuten',
    preis: 34,
    rezept: true,
    bild: knie,
    alt: 'Ein Physiotherapeut bewegt das gebeugte Knie eines liegenden Patienten',
  },
  {
    id: 'manuelle-therapie',
    titel: 'Manuelle Therapie',
    kurz: 'Mit den Händen Blockaden an Gelenken und Wirbelsäule lösen, sanft und ohne Einrenken.',
    text: 'Manuelle Therapie setzt an Gelenken, Muskeln und Nerven an. Mit gezielten, sanften Techniken verbessern wir die Beweglichkeit und lindern Schmerzen. Ruckartiges Einrenken gehört nicht dazu.',
    hilftBei: ['Nacken und Schulter', 'Kiefergelenk', 'eingeschränkte Gelenke', 'Kopfschmerzen aus dem Nacken'],
    dauer: '25 Minuten',
    preis: 42,
    rezept: true,
    bild: schulter,
    alt: 'Zwei Hände tasten die Schulter einer Patientin im hellen Shirt ab',
  },
  {
    id: 'kgg',
    titel: 'Gerätetraining (KGG)',
    kurz: 'Krankengymnastik an Geräten: Kraft gezielt aufbauen, betreut und mit Plan.',
    text: 'Nach Verletzungen oder Operationen reicht Bewegung allein oft nicht. An Seilzug, Hanteln und Beinpresse bauen wir Kraft gezielt auf. Sie trainieren nie allein, sondern mit einem Plan, den wir alle paar Wochen anpassen.',
    hilftBei: ['Kreuzband und Meniskus', 'Bandscheibe', 'Schulter-OP', 'Muskelaufbau im Alter'],
    dauer: '60 Minuten',
    preis: 48,
    rezept: true,
    bild: hanteln,
    alt: 'Ein Therapeut korrigiert die Armhaltung einer Patientin, die zwei pinke Kurzhanteln hält',
  },
  {
    id: 'lymphdrainage',
    titel: 'Manuelle Lymphdrainage',
    kurz: 'Sanfter Druck, der Schwellungen abbaut, etwa nach Operationen oder bei Lymphödemen.',
    text: 'Mit ruhigen, kreisenden Griffen regen wir den Abfluss der Lymphe an. Das baut Schwellungen ab und lindert das Spannungsgefühl. Bei Bedarf legen wir anschließend einen Kompressionsverband an.',
    hilftBei: ['nach Operationen', 'Lymphödem', 'schwere Beine', 'Verstauchungen'],
    dauer: '45 Minuten',
    preis: 55,
    rezept: true,
    bild: unterarm,
    alt: 'Zwei Hände streichen mit sanftem Druck über einen Unterarm',
  },
  {
    id: 'massage',
    titel: 'Klassische Massage',
    kurz: 'Verspannte Muskeln lockern und durchatmen: ideal als Ergänzung oder einfach für sich.',
    text: 'Die klassische Massage lockert verspannte Muskeln, fördert die Durchblutung und tut schlicht gut. Mit Rezept oder als Selbstzahler, gern auch als Gutschein zum Verschenken.',
    hilftBei: ['Verspannungen', 'Stress', 'Schreibtischnacken', 'nach dem Sport'],
    dauer: '30 Minuten',
    preis: 38,
    rezept: true,
    bild: massage,
    alt: 'Hände massieren den oberen Rücken einer liegenden Person',
  },
  {
    id: 'rueckenkurs',
    titel: 'Rückenkurs',
    kurz: 'Acht Termine in kleiner Gruppe. Von vielen Krankenkassen bezuschusst.',
    text: 'Maximal acht Teilnehmende, acht Termine à 60 Minuten. Sie lernen, was Ihrem Rücken guttut, und nehmen ein Übungsprogramm für zu Hause mit. Der Kurs ist als Präventionskurs zertifiziert, die meisten Krankenkassen erstatten einen Großteil der Kosten.',
    hilftBei: ['Vorbeugung', 'Büroalltag', 'Wiedereinstieg in Bewegung', 'nach der Therapie'],
    dauer: '8 × 60 Minuten',
    preis: 120,
    rezept: false,
    bild: stange,
    alt: 'Eine Therapeutin begleitet eine Frau bei einer Dehnübung an der Stange',
  },
];
