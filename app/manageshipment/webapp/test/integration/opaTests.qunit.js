sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'manageshipment/test/integration/FirstJourney',
		'manageshipment/test/integration/pages/ShipmentList',
		'manageshipment/test/integration/pages/ShipmentObjectPage'
    ],
    function(JourneyRunner, opaJourney, ShipmentList, ShipmentObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('manageshipment') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheShipmentList: ShipmentList,
					onTheShipmentObjectPage: ShipmentObjectPage
                }
            },
            opaJourney.run
        );
    }
);