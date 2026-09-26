import type { Core } from '@strapi/strapi';

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    const authenticatedRole = await strapi
      .query('plugin::users-permissions.role')
      .findOne({ where: { type: 'authenticated' } });

    if (!authenticatedRole) {
      strapi.log.warn('Authenticated role was not found; current-user API remains private.');
    } else {
      const currentUserAction = 'plugin::users-permissions.user.me';
      const currentUserPermission = await strapi
        .query('plugin::users-permissions.permission')
        .findOne({ where: { action: currentUserAction, role: authenticatedRole.id } });

      if (!currentUserPermission) {
        await strapi.query('plugin::users-permissions.permission').create({
          data: { action: currentUserAction, role: authenticatedRole.id },
        });
        strapi.log.info('Enabled authenticated access to the current-user endpoint.');
      }
    }

    const publicRole = await strapi
      .query('plugin::users-permissions.role')
      .findOne({ where: { type: 'public' } });

    if (!publicRole) {
      strapi.log.warn('Public role was not found; scenario API remains private.');
      return;
    }

    const action = 'api::scenario.scenario.find';
    const permission = await strapi
      .query('plugin::users-permissions.permission')
      .findOne({ where: { action, role: publicRole.id } });

    if (!permission) {
      await strapi.query('plugin::users-permissions.permission').create({
        data: { action, role: publicRole.id },
      });
      strapi.log.info('Enabled public read access for scenarios.');
    }
  },
};
