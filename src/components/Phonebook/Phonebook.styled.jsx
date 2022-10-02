import styled from '@emotion/styled';

export const BoxPhonebook = styled.div`
  border: 2px solid;
  margin-top: ${props => props.theme.space[5]};
  margin-bottom: ${props => props.theme.space[5]};
  padding: ${props => props.theme.space[4]};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: ${p => p.theme.fontSizes.mm};
`;

export const Input = styled.input`
  margin-top: ${props => props.theme.space[1]};
  font-size: ${p => p.theme.fontSizes.m};
  padding: ${props => props.theme.space[2]};
`;

export const Button = styled.button`
  margin-top: ${props => props.theme.space[5]};
  width: 120px;
  font-size: ${p => p.theme.fontSizes.m};
  cursor: pointer;
`;

export const TitleContacts = styled.h3`
  font-size: ${p => p.theme.fontSizes.l};
  margin-bottom: ${props => props.theme.space[5]};
`;