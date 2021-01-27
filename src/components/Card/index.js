import styled from 'styled-components';

const Card = styled.div`
  width: 350px;
  border: 1px solid #144236;
  background-color: #144236;
  border-radius: 4px;
  overflow: hidden;
`;

Card.Header = styled.div`
  img {
    width: 100%;
    object-fit: cover;
    max-height: 220px;
  }
`;

Card.Content = styled.div`
  padding: 24px 28px;
  display: flex;
  flex-direction: column;
`;

export default Card;
