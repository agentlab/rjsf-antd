import React from 'react';
import { ObjectFieldTemplateProps } from 'react-jsonschema-form';
import ObjectFieldTemplateContext from './ObjectFieldTemplateContext';
import { getUiOptions } from 'react-jsonschema-form/lib/utils';

const ObjectFieldTemplate: React.FC<ObjectFieldTemplateProps> = (props: ObjectFieldTemplateProps) => {
  const { DescriptionField, description, TitleField, title, properties, required, schema, uiSchema, idSchema } = props;

  return (
    <ObjectFieldTemplateContext.Consumer>
      {(templates: any) => {
        const objectFieldTemplate = uiSchema['ui:template'];
        if (objectFieldTemplate && templates.hasOwnProperty(objectFieldTemplate)) {
          if (templates instanceof Array) {
            const ObjectFieldTemplate = templates[objectFieldTemplate];
            return <ObjectFieldTemplate {...props} />;
          }
        }
        const uiOptions = getUiOptions(uiSchema);

        let displayLabel = true;
        if (uiOptions === undefined || uiOptions.label === undefined) displayLabel = false;

        return (
          <>
            {displayLabel && (uiSchema['ui:title'] || title) && (
              <TitleField id={`${idSchema.$id}-title`} title={title} required={required} />
            )}
            {description && <DescriptionField id={`${idSchema.$id}-description`} description={description} />}
            {properties.map((element: any) => element.content)}
          </>
        );
      }}
    </ObjectFieldTemplateContext.Consumer>
  );
};

export default ObjectFieldTemplate;
