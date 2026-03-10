import {
  getAllArtistesByDate,
  getAllScenesByName,
  getAllArtistesAlphabetical,
  getArtisteById,
  getSceneById,
  getArtistesBySceneId,
  getArtistesBySceneName,
  saveArtiste,
  saveScene
} from './backend.mjs';

async function runTests() {
  try {
    console.log('\n--- TEST 1 : Tous les artistes triés par date ---');
    const artistesByDate = await getAllArtistesByDate();
    console.log(artistesByDate);

    console.log('\n--- TEST 2 : Toutes les scènes triées par nom ---');
    const scenes = await getAllScenesByName();
    console.log(scenes);

    console.log('\n--- TEST 3 : Tous les artistes triés alphabétiquement ---');
    const artistesAlpha = await getAllArtistesAlphabetical();
    console.log(artistesAlpha);

    if (artistesAlpha.length > 0) {
      console.log('\n--- TEST 4 : Infos d’un artiste par id ---');
      const artiste = await getArtisteById(artistesAlpha[0].id);
      console.log(artiste);
    } else {
      console.log('Aucun artiste trouvé pour le test 4.');
    }

    if (scenes.length > 0) {
      console.log('\n--- TEST 5 : Infos d’une scène par id ---');
      const scene = await getSceneById(scenes[0].id);
      console.log(scene);

      console.log('\n--- TEST 6 : Artistes d’une scène par id ---');
      const artistesSceneId = await getArtistesBySceneId(scenes[0].id);
      console.log(artistesSceneId);

      console.log('\n--- TEST 7 : Artistes d’une scène par nom ---');
      const artistesSceneName = await getArtistesBySceneName(scenes[0].nom);
      console.log(artistesSceneName);
    } else {
      console.log('Aucune scène trouvée pour les tests 5, 6 et 7.');
    }

    console.log('\n--- TEST 8 : Ajout d’une scène ---');
    const newScene = await saveScene({
      nom: 'Scène Test',
      description: 'Scène créée automatiquement depuis test-back.js',
      capacite: 5000
    });
    console.log(newScene);

    console.log('\n--- TEST 9 : Modification de la scène créée ---');
    const updatedScene = await saveScene({
      id: newScene.id,
      nom: 'Scène Test Modifiée',
      description: 'Scène modifiée automatiquement depuis test-back.js',
      capacite: 6500
    });
    console.log(updatedScene);

    console.log('\n--- TEST 10 : Ajout d’un artiste ---');
    const newArtiste = await saveArtiste({
      nom: 'Artiste Test',
      genre_musical: 'Electro',
      description: 'Artiste créé automatiquement depuis test-back.js'
    });
    console.log(newArtiste);

    console.log('\n--- TEST 11 : Modification de l’artiste créé ---');
    const updatedArtiste = await saveArtiste({
      id: newArtiste.id,
      nom: 'Artiste Test Modifié',
      genre_musical: 'Pop',
      description: 'Artiste modifié automatiquement depuis test-back.js'
    });
    console.log(updatedArtiste);

    console.log('\n✅ Tous les tests sont terminés.');
  } catch (error) {
    console.error('\n❌ Erreur pendant les tests :');
    console.error(error);
  }
}

runTests();