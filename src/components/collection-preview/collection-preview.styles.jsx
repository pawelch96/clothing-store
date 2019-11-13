import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const CollectionPreviewTitleLink = styled(Link)`
  font-size: 28px;
  margin-bottom: 25px;
  text-transform: capitalize;
  cursor: pointer;
`;

export const PreviewContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
