import React from 'react';
import { storiesOf } from '@storybook/react';

import Body from '../example/body';
import examples from '../example/examples';
import Menu from '../example/menu';
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

const theme = 'light';

import Form from '../lib/Form';

storiesOf('Simple', module).add(examples.simple.title, () => (
  <Form
    schema={examples.simple.schema}
    uiSchema={examples.simple.uiSchema}
    formData={examples.simple.formData}
    onChange={(): void => {}}></Form>
));

Object.entries(examples).forEach(([key, val]) =>
  storiesOf('Examples', module).add(val.title, () => (
    <Form schema={val.schema} uiSchema={val.uiSchema} formData={val.formData} onChange={(): void => {}}></Form>
  )),
);

const App: React.FC<any> = () => {
  const [selectedExample, setSelectedExample] = React.useState(examples.simple);
  const onSelectMenuItem = (type: any) => (): void => setSelectedExample(type);

  return (
    <Layout>
      <Header style={{ background: '#ffffff' }}>Ant Design for react-jsonschema-form playground</Header>
      <Layout>
        <Sider theme={theme}>
          <Menu onSelectMenuItem={onSelectMenuItem} />
        </Sider>
        <Content>
          <Body selectedDemo={selectedExample} />
        </Content>
      </Layout>
    </Layout>
  );
};

storiesOf('Custom', module).add('Custom', () => <App />);
