'use strict';

/**
 * event-assistant service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::event-assistant.event-assistant');
