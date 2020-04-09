import styled from '@emotion/styled';

export const HeadingLine = styled.span`
  display: inline-block;
  width: 65px;
  height: 1px;
  margin: 0 auto;
  background: #ccc;
  position: relative;
  top: -6px;
  margin-bottom: 4px;
  &:after {
    content: '';
    width: 40px;
    height: 1px;
    display: block;
    background: #ccc;
    margin: 3px auto;
  }
`;
