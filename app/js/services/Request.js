/**
 * Created by raul on 8/11/2016.
 */
'use strict';
app.factory('Request', function () {
    var sources =[
        {
            "author":"Marco Polo",
            "book":"Ghid nemaipomenit in medicina scris in 24 ore",
            "edit":"Ministerul industriei chimice, Bucuresti, 1982."
        },
        {
            "author":"Marco Polo",
            "book":"Ghid nemaipomenit in medicina scris in 24 ore",
            "edit":"Ministerul industriei chimice, Bucuresti, 1982."
        },
        {
            "author":"Marco Polo",
            "book":"Ghid nemaipomenit in medicina scris in 24 ore",
            "edit":"Ministerul industriei chimice, Bucuresti, 1982."
        },
        {
            "author":"Marco Polo",
            "book":"Ghid nemaipomenit in medicina scris in 24 ore",
            "edit":"Ministerul industriei chimice, Bucuresti, 1982."
        },
        {
            "author":"Marco Polo",
            "book":"Ghid nemaipomenit in medicina scris in 24 ore",
            "edit":"Ministerul industriei chimice, Bucuresti, 1982."
        },
        {
            "author":"Marco Polo",
            "book":"Ghid nemaipomenit in medicina scris in 24 ore",
            "edit":"Ministerul industriei chimice, Bucuresti, 1982."
        },
        {
            "author":"Marco Polo7",
            "book":"Ghid nemaipomenit in medicina scris in 24 ore",
            "edit":"Ministerul industriei chimice, Bucuresti, 1982."
        },
        {
            "author":"Marco Polo8",
            "book":"Ghid nemaipomenit in medicina scris in 24 ore",
            "edit":"Ministerul industriei chimice, Bucuresti, 1982."
        },
        {
            "author":"Marco Polo",
            "book":"Ghid nemaipomenit in medicina scris in 24 ore",
            "edit":"Ministerul industriei chimice, Bucuresti, 1982."
        },
        {
            "author":"Marco Polo5",
            "book":"Ghid nemaipomenit in medicina scris in 24 ore",
            "edit":"Ministerul industriei chimice, Bucuresti, 1982."
        },
        {
            "author":"Marco Polo4",
            "book":"Ghid nemaipomenit in medicina scris in 24 ore",
            "edit":"Ministerul industriei chimice, Bucuresti, 1982."
        },
        {
            "author":"Marco Polo3",
            "book":"Ghid nemaipomenit in medicina scris in 24 ore",
            "edit":"Ministerul industriei chimice, Bucuresti, 1982."
        },
        {
            "author":"Marco Polo1",
            "book":"Ghid nemaipomenit in medicina scris in 24 ore",
            "edit":"Ministerul industriei chimice, Bucuresti, 1982."
        },
        {
            "author":"Marco Polo2",
            "book":"Ghid nemaipomenit in medicina scris in 24 ore",
            "edit":"Ministerul industriei chimice, Bucuresti, 1982."
        }
    ];
    function getAll(){
        return sources;
    }
    return {
        get: getAll
    };
});