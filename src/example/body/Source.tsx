import React from 'react';

//import classNames from 'classnames';
import { Icon } from 'antd';

import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript';
//import styles from './Source.less';

const cmOptions = {
  readOnly: false,
  viewportMargin: Infinity,
  mode: {
    name: 'javascript',
    json: true,
    statementIndent: 2,
  },
  lineNumbers: true,
  lineWrapping: true,
  indentWithTabs: false,
  tabSize: 2,
};

const isValid = (value: string): any => {
  let obj;

  try {
    obj = JSON.parse(value);
  } catch (e) {
    return false;
  }

  return obj;
};

class Source extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    const source = JSON.stringify(this.props.source, null, 2);

    this.state = {
      source,
      valid: isValid(source),
    };
  }

  UNSAFE_componentWillReceiveProps = (nextProps: any) => {
    const source = JSON.stringify(nextProps.source, null, 2);

    this.setState({
      source,
      valid: isValid(source),
    });
  };

  onChange = (editor: any, data: any, value: any): void => {
    this.setState({ source: value });
  };

  onBeforeChange = (editor: any, data: any, value: any): any => {
    const { onChange } = this.props;
    const parsed = isValid(value);

    this.setState({
      valid: parsed,
      source: value,
    });

    if (parsed && onChange) {
      onChange(parsed);
    }
  };

  render() {
    const { source, valid } = this.state;
    const { title } = this.props;

    return (
      <div /*className={styles.root}*/>
        <div /*className={classNames(styles.ctr, { [styles.invalid]: !valid })}*/>
          <div>
            <Icon type={valid ? 'smile' : 'warning'} />
            <span>{title}</span>
          </div>
          <div /*className={styles.source}*/>
            <CodeMirror
              value={source}
              onChange={this.onChange}
              onBeforeChange={this.onBeforeChange}
              autoCursor={true}
              options={cmOptions}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Source;
