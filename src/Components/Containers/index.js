import styled, { css } from 'styled-components';
import { TouchableOpacity as BaseTouchableOpacity, Text as BaseText } from 'react-native';

const processNumericValue = value => {
  if (typeof value === 'string') return value;
  else return `${value}px`;
};

const generalProperties = css`
  ${props =>
    props.text &&
    css`
      font-size: ${processNumericValue(props.text)};
    `}

  ${props =>
    props.weight &&
    css`
      font-weight: ${processNumericValue(props.weight)};
    `}

  ${props =>
    props.alignItems &&
    css`
      align-items: ${props.alignItems};
    `}
  
   ${props =>
    props.justifyContent &&
    css`
      justify-content: ${props.justifyContent};
    `}
  
   ${props =>
    props.alignSelf &&
    css`
      align-self: ${props.alignSelf};
    `}

   ${props =>
    props.display &&
    css`
      display: ${props.display};
    `}

   ${props =>
    props.position &&
    css`
      position: ${props.position};
    `}
`;

const colorProperties = css`
  ${props =>
    props.color &&
    css`
      color: ${props.color};
    `}

  ${props =>
    props.background &&
    css`
      background-color: ${props.background};
    `}

   ${props =>
    props.borderWidth &&
    css`
      border-width: ${processNumericValue(props.borderWidth)};
    `}
  
   ${props =>
    props.borderColor &&
    css`
      border-color: ${props.borderColor};
    `}

    ${props =>
    props.borderBottomWidth &&
    css`
      border-bottom-width: ${processNumericValue(props.borderBottomWidth)};
    `}
    
     ${props =>
    props.borderBottomColor &&
    css`
      border--bottom-color: ${props.borderBottomColor};
    `}

    ${props =>
    props.borderRadius &&
    css`
      border-radius: ${processNumericValue(props.borderRadius)};
    `}
`;

const resizeProperties = css`
  ${props =>
    props.h !== undefined &&
    css`
      height: ${processNumericValue(props.h)};
    `}

  ${props =>
    props.w !== undefined &&
    css`
      width: ${processNumericValue(props.w)};
    `}

    ${props =>
    props.top !== undefined &&
    css`
      top: ${processNumericValue(props.top)};
    `}
  
    ${props =>
    props.bottom !== undefined &&
    css`
      bottom: ${processNumericValue(props.bottom)};
    `}

      ${props =>
    props.left !== undefined &&
    css`
      left: ${processNumericValue(props.left)};
    `}
    
      ${props =>
    props.right !== undefined &&
    css`
      right: ${processNumericValue(props.right)};
    `}
`;

const paddingProperties = css`
  ${props =>
    props.p &&
    css`
      padding: ${processNumericValue(props.p)};
    `}

  ${props =>
    props.pl &&
    css`
      padding-left: ${processNumericValue(props.pl)};
    `}

  ${props =>
    props.pr &&
    css`
      padding-right: ${processNumericValue(props.pr)};
    `}

  ${props =>
    props.pb &&
    css`
      padding-bottom: ${processNumericValue(props.pb)};
    `}

  ${props =>
    props.pt &&
    css`
      padding-top: ${processNumericValue(props.pt)};
    `}
`;

const marginProperties = css`
  ${props =>
    props.m &&
    css`
      margin: ${processNumericValue(props.m)};
    `}

  ${props =>
    props.ml &&
    css`
      margin-left: ${processNumericValue(props.ml)};
    `}

  ${props =>
    props.mr &&
    css`
      margin-right: ${processNumericValue(props.mr)};
    `}

  ${props =>
    props.mb &&
    css`
      margin-bottom: ${processNumericValue(props.mb)};
    `}

  ${props =>
    props.mt &&
    css`
      margin-top: ${processNumericValue(props.mt)};
    `}

    ${props =>
    props.my &&
    css`
      margin-vertical: ${processNumericValue(props.my)};
    `}
  
    ${props =>
    props.mx &&
    css`
      margin-horizontal: ${processNumericValue(props.mx)};
    `}
`;

export const TouchableOpacity = styled(BaseTouchableOpacity)`
  ${generalProperties}
  ${colorProperties}
  ${resizeProperties}
  ${paddingProperties}
  ${marginProperties}
`;

export const General = styled.View`
  ${generalProperties}
  ${colorProperties}
  ${resizeProperties}
  ${paddingProperties}
  ${marginProperties}
`;

export const Flex = styled(General)`
  display: flex;
  flex-direction: ${props => (props.column ? 'column' : 'row')};
`;

export const Text = styled(BaseText)`
  ${generalProperties}
  ${colorProperties}
  ${resizeProperties}
  ${paddingProperties}
  ${marginProperties}
`;
