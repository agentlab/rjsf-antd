import React from 'react';

//import styles from './Body.less';
import Example from './Example';

const Body: React.FC<any> = ({ selectedDemo }: any) => (
  <div /*className={styles.body}*/>
    <Example data={selectedDemo} />
  </div>
);

export default Body;
