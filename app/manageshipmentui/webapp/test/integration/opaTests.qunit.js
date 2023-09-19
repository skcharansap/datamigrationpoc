sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'manageshipmentui/test/integration/FirstJourney',
		'manageshipmentui/test/integration/pages/BooksList',
		'manageshipmentui/test/integration/pages/BooksObjectPage'
    ],
    function(JourneyRunner, opaJourney, BooksList, BooksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('manageshipmentui') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheBooksList: BooksList,
					onTheBooksObjectPage: BooksObjectPage
                }
            },
            opaJourney.run
        );
    }
);