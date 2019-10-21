import React from 'react';
import keys from 'lodash/keys';
import { List, Icon } from 'antd';
import examples from '../examples';
//import styles from './index.less';
import { FormProps } from 'react-jsonschema-form';

//const examples : FormProps<any> & { title: string }[] = examples2;
//examples.hasOwnProperty(e) && (

const Menu: React.FC<any> = ({ onSelectMenuItem }: any) => {
  const t = Object.entries(examples).forEach(([key, val]) => (
    <List.Item key={key} onClick={onSelectMenuItem(val)}>
      <List.Item.Meta title={val.title} />
    </List.Item>
  ));
  return (
    <div /*className={styles.drawerList}*/>
      <List header='Showcase'>{t !== undefined && t}</List>
    </div>
  );
};

export default Menu;
