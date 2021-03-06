import React, { Component } from 'react';
import { Card, Typography } from '@material-ui/core';
import styled from 'styled-components'
import PropTypes from 'prop-types';

class Info extends Component {
  render() {
    const { header, content, height, width, icon, min } = this.props;

    return (
      <Card
        style={{
          height: `${height}`,
          width: `${width}`,
          minHeight: `${min}`,
          border: '1px solid rgba(50, 50, 255, 0.2)',
          background: 'rgba(255, 255, 255, 1)',
          margin: '0.5rem'
        }}
      >
        <Head><Typography variant='subtitle1' style={{fontWeight: '600'}}>{header}</Typography></Head>
        <Content>
          {icon && <Icon />}
          {content}
        </Content>
      </Card>
    );
  }
}

export default Info;

Info.propTypes = {
  icon: PropTypes.string
}

Info.defaultProps = {
  icon: '',

}

const Head = styled.div`
  padding: 0.5rem 0.7rem 0.3rem 0.5rem;
  border-bottom: 1px solid rgba(50, 50, 255, 0.2);
  background: rgba(255, 255, 255, 1);
`

const Content = styled.div`
  padding: 0.7rem;
`

const Icon = styled.img.attrs({
  src: 'example_icon.png'
})`
height: 7rem;
width: 7rem;
float: left;
margin-right: 1rem;
border: 1px solid #EEEEEE;
`
