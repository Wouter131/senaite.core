# -*- coding: utf-8 -*-

from plone.app.layout.viewlets.common import SiteActionsViewlet
from Products.Five.browser.pagetemplatefile import ViewPageTemplateFile


class SiteActionsViewlet(SiteActionsViewlet):
    index = ViewPageTemplateFile("templates/site_actions.pt")
