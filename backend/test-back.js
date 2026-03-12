import { getAllArtistesByDate, getAllScenesByName, getAllArtistesAlphabetical, getArtisteById, getSceneById, getArtistesBySceneId, getArtistesBySceneName,saveArtiste, saveScene } from './backend.mjs';

/*
try {
console.log('\n- Artiste par date-');
const artistesByDate = await getAllArtistesByDate();
console.log(artistesByDate);
*/
/*
try {
console.log('\n-Scene par nom-');
const scenes = await getAllScenesByName();
console.log(scenes);
*/
/*
try {
console.log('\n-Trie alphabetique-');
const artistesAlpha = await getAllArtistesAlphabetical();
console.log(artistesAlpha);
*/
/*
try {
if (artistesAlpha.length > 0) {
console.log('\n-Artiste par Id-');
const artiste = await getArtisteById(artistesAlpha[0].id);
console.log(artiste);``
*/
/*
try {
if (scenes.length > 0) {
console.log('\n-Info scene par Id-');
const scene = await getSceneById(scenes[0].id);
console.log(scene);
/*
/*
try {
console.log('\n-Artistes d’une scène par id-');
const artistesSceneId = await getArtistesBySceneId(scenes[0].id);
console.log(artistesSceneId);
*/
/*
try {
console.log('\n-Artistes d’une scène par nom-');
const artistesSceneName = await getArtistesBySceneName(scenes[0].nom);
console.log(artistesSceneName);
console.log('\n-Ajout d’une scène-');
const newScene = await saveScene({
nom: 'Scène Test',
lieu: 'Zone test',
capacite: 1000,
description: 'Scène créée'
});
console.log(newScene);

try {
console.log('\n-Modification de la scène créée-');
const updatedScene = await saveScene({
id: newScene.id,
nom: 'Scène Test Modifiée',
lieu: 'Zone test modifiée',
capacite: 1200,
description: 'Scène modifiée'
});
console.log(updatedScene);

try {
if (scenes.length > 0) {
console.log('\n-Ajout artiste-');
const newArtiste = await saveArtiste({
nom: 'Artiste Test',
style: 'Pop',
bio: 'Artiste créé',
date_representation: '2026-06-20 20:00:00.000Z',
scene: scenes[0].id
});
console.log(newArtiste);

try {
console.log('\n-Modification de l’artiste créé-');
const updatedArtiste = await saveArtiste({
id: newArtiste.id,
nom: 'Artiste Test Modifié',
style: 'Rock',
bio: 'Artiste modifié',
date_representation: '2026-06-21 21:00:00.000Z',
scene: scenes[0].id
});
console.log(updatedArtiste);
} else {
console.log('Impossible de tester saveArtiste car aucune scène n’existe.');
}
} catch (error) {
console.error('Erreur lors des tests :', error);
}
}
testFestival();