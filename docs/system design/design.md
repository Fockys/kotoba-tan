
This project is built as a local-first modular application. The dictionary and learning modules are on the users device.

The app shell should contain the basic navigation and settings

A module registry should be there to keep track of modules
Modules should be lazy loaded to save resources.

There should be a few services directly owned by the app shell:
- media/audio service
- perssistent popup dictionary

The popup dictionary should allow for the creation of anki flashcards.

Modules to include could be:
- videos with optional subtitles 
- reading with ocr capabilities
- Kana
- Pitch accent

Since all data is local there must be a database to save settings and other information aswell as the hoshidicts adapted and yomitan zip importer.