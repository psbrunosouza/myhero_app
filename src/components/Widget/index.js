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

Widget.Header = styled.header`
  img {
    width: 100%;
    object-fit: cover;
    height: 220px;
  }
`;

Widget.Content = styled.section`
  padding: 24px 28px;
  display: flex;
  flex-direction: column;

  form {
    display: flex;
    flex-direction: column;
  }
`;

Widget.Alternative = styled.a`
  background-color: #113028;
  border-radius: 10px;
  padding: 5px 16px;
  cursor: pointer;
  display: block;
  margin-top: 10px;

  &:hover {
    background-color: #184f41;
  }

  input[type=radio] {
    display: none;
  }
`;
export default Widget;
