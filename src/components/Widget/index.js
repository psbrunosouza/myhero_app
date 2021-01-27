import styled from 'styled-components';

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

  form {
    display: flex;
    flex-direction: column;
  }
`;
export default Widget;
