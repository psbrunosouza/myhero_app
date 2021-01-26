import styled from 'styled-components';
import preset from '../../../config/presetConfig.json';

const Widget = styled.div`
  border: 1px solid #144236;
  background-color: #144236;
  border-radius: 4px;
  overflow: hidden;
  width: 350px;
  & + div {
    margin-top: 24px;
    margin-bottom: 24px;
  }
`;

Widget.Content = styled.div`
  padding: 24px 28px;
  display: flex;
  flex-direction: column;
  
  input {
    background: ${preset.theme.colors.secondary};
    border: 0;
    height: 32px;
    padding: 0 8px;

    &::placeholder {
      color: ${preset.theme.colors.placeholder}
    }
  }

  button {
    flex: 1;
    margin-top: 16px;
    background-color: ${preset.theme.colors.button};
    border: 0;
    border-radius: 10px;
    padding: 8px 0px;
    font-size: 20px;
    cursor: pointer;
  }
`;

export default Widget;