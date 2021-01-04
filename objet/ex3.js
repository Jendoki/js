var library = [
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }
];

function books(library){
    for(elt in library){
        console.log("Titre: " + library[elt].title);
        console.log("Auteur: " + library[elt].author);
        if(library[elt].readingStatus == true){
            console.log("Etat de lecture: Terminé");
        } else { 
            console.log("Etat de lecture: En cours");
        }
        console.log('');
    }
}

books(library);

