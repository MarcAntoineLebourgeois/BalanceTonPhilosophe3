export const ListThemes = 
['Autrui', 'L’Etat', 'L’Histoire', 'L’Inconscient', 'La Conscience', 'La Justice', 'La Liberte', 'La Logique', 'La Metaphysique', 'La Morale', 'La Nature', 'La Perception', 'La Physique', 'La Politique', 'La Raison', 'La Religion', 'La Science', 'La Societe', 'La Technique', 'La Verite', "L'Art", 'Le Bonheur', 'Le Corps', 'Le Desir', 'Le Devoir', 'Le Droit', 'Le Langage', 
'Le Temps', 'Le Travail', "L'Imagination"];

export const ListThemes2 = [
  { title:'Autrui'},
  { title:'L’Etat'},
  { title:'L’Histoire'},
  { title:'L’Inconscient'},
  { title:'La Conscience'},
      { title: 'La Justice'},
       { title:'La Liberte'},
        { title: 'La Logique'},
         { title: 'La Metaphysique'},
          { title:'La Morale'},
           { title:  'La Nature'},
            { title: 'La Perception'},
             { title: 'La Physique'},
              { title: 'La Politique'},
               { title:'La Raison'},
                { title:'La Religion'},
                 { title:'La Science'},
                 { title:'La Societe'},
                 { title:'La Technique'},
                 { title:'La Verite'},
                 { title: "L'Art"},
                 { title: 'Le Bonheur'},
                  { title:'Le Corps'},
                  { title:'Le Desir'}, 
                  { title:'Le Devoir'},
                 { title:'Le Droit'},
                  { title:'Le Langage'}, 
                  { title:'Le Temps'},
{ title:'Le Travail'},
 { title:"L'Imagination"}];


export const config = {
  title: "Le Desir",
  graph: {
    linkDistance: 250,
    charge: -1000,
    height: 650,
    numColors: 12,
    labelPadding: { left: 8, right: 8, top: 5, bottom: 2 },
    labelMargin: { left: 3, right: 3, top: 2, bottom: -1 },
    ticksWithoutCollisions: 50
  },
  types: { "XVIIe siecle": { short: "XVIIe siecle" } },
  constraints: [
    {
      has: { type: "XVIIe siecle" },
      type: "position",
      x: 0.5,
      y: 0,
      weight: 0.7
    }
  ],
  jsonUrl: {
    data: {
      "Baruch Spinoza": {
        name: "Baruch Spinoza",
        type: "XVIIe siecle",
        depends: [],
        dependedOnBy: ["Arthur Schopenhauer", "Georg Hegel"],
        docs: "blabla"
      },
      "Arthur Schopenhauer": {
        name: "Arthur Schopenhauer",
        type: "XVIIIe siecle",
        depends: ["Baruch Spinoza"],
        dependedOnBy: [],
        docs: "blabla"
      },
      "Georg Hegel": {
        name: "Georg Hegel",
        type: "XVIIIe siecle",
        depends: ["Baruch Spinoza"],
        dependedOnBy: [],
        docs: "blabla"
      }
    },
    errors: []
  }
};

