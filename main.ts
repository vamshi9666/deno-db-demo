import { Database } from 'https://github.com/vamshi9666/AloeDB/master/mod.ts'




// Structure of stored documents
interface Film {
    title: string;
    year: number;
    film: boolean;
    genres: string[];
    authors: { director: string };
}

// Initialization
const db = new Database<Film>('./file.json');

// Insert operations
await db.insertOne({
    title: 'Drive',
    year: 2012,
    film: true,
    genres: ['crime', 'drama', 'noir'],
    authors: { director: 'Nicolas Winding Refn' }
});

// Search operations
const found: Film = await db.findOne({ title: 'Drive', film: true });

// Update operations
await db.updateOne({ title: 'Drive' }, { year: 2011 });

// Delete operations
await db.deleteOne({ title: 'Drive' });