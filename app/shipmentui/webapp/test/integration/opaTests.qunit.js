sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'shipmentui/test/integration/FirstJourney',
		'shipmentui/test/integration/pages/ShipmentList',
		'shipmentui/test/integration/pages/ShipmentObjectPage'
    ],
    function(JourneyRunner, opaJourney, ShipmentList, ShipmentObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('shipmentui') + '/index.html'
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