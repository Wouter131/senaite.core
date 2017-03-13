# This file is part of Bika LIMS
#
# Copyright 2011-2016 by it's authors.
# Some rights reserved. See LICENSE.txt, AUTHORS.txt.

from zope.interface import implements
from App.class_init import InitializeClass
from bika.lims.catalog.bika_catalog_tool import BikaCatalogTool
# Bika LIMS imports
from bika.lims.interfaces import IBikaCatalogWorksheetListing


# Using a variable to avoid plain strings in code
CATALOG_WORKSHEET_LISTING = 'bika_catalog_worksheet_listing'

bika_catalog_worksheet_listing_definition = {
    CATALOG_WORKSHEET_LISTING: {
        'types':   ['Worksheet', ],
        'indexes': {
            'id': 'FieldIndex',
            'getId': 'FieldIndex',
            # Necessary to avoid reindexing whole catalog when we need to
            # reindex only one object. ExtendedPathIndex also could be used.
            'path': 'PathIndex',
            'created': 'DateIndex',
            'portal_type': 'FieldIndex',
            'UID': 'FieldIndex',
        },
        'columns': [
            'UID',
            'getId',
            'Title',
            'created',
            'review_state',

        ]
    }
}


class BikaCatalogWorksheetListing(BikaCatalogTool):
    """
    Catalog for Auto import listings
    """
    implements(IBikaCatalogWorksheetListing)

    def __init__(self):
        BikaCatalogTool.__init__(self, CATALOG_WORKSHEET_LISTING,
                                 'Bika Catalog Worksheet Listing',
                                 'BikaCatalogWorksheetListing')


InitializeClass(BikaCatalogWorksheetListing)
