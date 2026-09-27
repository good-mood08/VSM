import type { Schema, Struct } from '@strapi/strapi';

export interface SharedChoice extends Struct.ComponentSchema {
  collectionName: 'components_shared_choices';
  info: {
    description: '';
    displayName: 'Choice';
    icon: 'cursor';
  };
  attributes: {
    description: Schema.Attribute.Text;
    loyalty: Schema.Attribute.Integer;
    name: Schema.Attribute.String;
    safety: Schema.Attribute.Integer;
    situation: Schema.Attribute.Relation<
      'oneToOne',
      'api::situation.situation'
    >;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedNumer extends Struct.ComponentSchema {
  collectionName: 'components_shared_numers';
  info: {
    description: '';
    displayName: 'numer';
  };
  attributes: {
    type: Schema.Attribute.Enumeration<
      [
        'First aid',
        'Safety',
        'Conflict',
        'Evacuation',
        'Service',
        'Multitasking',
        'Crush',
      ]
    >;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedType extends Struct.ComponentSchema {
  collectionName: 'components_shared_types';
  info: {
    displayName: 'type';
  };
  attributes: {
    type: Schema.Attribute.Enumeration<
      ['First aid', 'Safety', 'Conflict', 'Evacuation', 'Service']
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.choice': SharedChoice;
      'shared.media': SharedMedia;
      'shared.numer': SharedNumer;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.type': SharedType;
    }
  }
}
